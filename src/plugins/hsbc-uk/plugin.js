/* globals obis, store */

//
// HSBC UK plugin entry-point
//

import { actions } from '@/obis/actions'
import { LEAVE_UNCHANGED } from '@/obis/store'
import { generateIdForTransaction } from '@/obis/generators'

import { fetchAccounts } from './api/accounts'
import { fetchStatementsList } from './api/statements'
import { fetchTransactions } from './api/transactions'

import { map, onlyFulfilled } from './helpers'
import { makePromisePool } from '@/cjs/promises'

// const getYears = compose(
//   $ => [...new Set($)],
//   map(date => {
//     const [year, , day] = date.split('-')
//     return `${year}::${day}`
//   })
// )

const liveHost = 'https://www.hsbc.co.uk'

function getHost() {
  return ''
}

const pool = makePromisePool(3)

obis.makePluginAvailable('hsbc-uk', () => {
  const fetcher = obis.fetchMachine
  const { messages } = obis.deps
  const { emit } = messages

  const updateProgressBar = max => value =>
    emit(actions.ui.UPDATE_PROGRESS_BAR, { max, value })

  fetcher.performTransitions({
    //
    // Accounts
    //
    'idle -> getting_accounts': {
      on: actions.get.ACCOUNTS,
      then: requestedYearsToDownload =>
        fetchAccounts()
          .then(accountsResponse => {
            //
            // Update store
            //
            const accountsUpdate = accountsResponse
              .map(accountResponse => {
                const { sortCodeAndAccountNumber } = accountResponse
                if (!sortCodeAndAccountNumber) {
                  console.warn(
                    'No sortCodeAndAccountNumber in accountResponse',
                    { accountResponse }
                  )
                  return
                }

                const [sortCode = '', accountNumber = ''] = (
                  sortCodeAndAccountNumber || ''
                ).split(' ')

                if (!sortCode || !accountNumber) {
                  console.warn('Could not parse sortCodeAndAccountNumber', {
                    sortCodeAndAccountNumber,
                    accountResponse
                  })
                  return
                }

                return {
                  id: accountResponse.id,
                  accountNumber: accountNumber,
                  sortCode: sortCode,
                  name: accountResponse.accountHolderName,
                  type: accountResponse.productCode,
                  ledgerBalance: Math.round(
                    accountResponse.ledgerBalance * 100
                  ),
                  lastUpdatedTimestamp: new Date(
                    accountResponse.lastUpdatedDate
                  ).getTime(),

                  iban: LEAVE_UNCHANGED,
                  bic: LEAVE_UNCHANGED
                }
              })
              .filter(Boolean)

            emit(actions.add.ACCOUNTS, accountsUpdate)
            emit(actions.got.ACCOUNTS, {
              accountsResponse,
              yearsToDownload: requestedYearsToDownload
            })
          })
          .catch(fetcher.Emit(actions.error.ACCOUNTS))
    },

    'getting_accounts -> found_accounts': {
      on: actions.got.ACCOUNTS,
      then: ({ accountsResponse, yearsToDownload }) => {
        //
        // Build next query
        //
        const statementsQueries = accountsResponse.map(accountResponse => ({
          host: getHost(),
          accountId: accountResponse.id,
          productCategoryCode: accountResponse.productCategoryCode
        }))

        emit(actions.get.STATEMENTS, { statementsQueries, yearsToDownload })
      }
    },

    'getting_accounts -> failed_accounts': {
      on: actions.error.ACCOUNTS,
      then: fetcher.Enter('idle')
    },

    //
    // Statements list
    //
    'found_accounts -> getting_statements': {
      on: actions.get.STATEMENTS,
      then: ({ statementsQueries, yearsToDownload }) => {
        const progress = updateProgressBar(statementsQueries.length)
        progress(0)

        const fetchStatementsJobs = statementsQueries.map(
          (statementsQuery, idx) => {
            const { accountId, productCategoryCode } = statementsQuery

            return pool(() => {
              progress(idx + 1)

              return fetchStatementsList(statementsQuery).then(
                map(statementsResponse => {
                  const { endDate, accountNumber: mashed } = statementsResponse

                  const [, sortCode1, sortCode2, sortCode3, accountNumber] =
                    mashed.match(/^(\d{2})(\d{2})(\d{2})(\d{8})$/)

                  const sortCode = `${sortCode1}-${sortCode2}-${sortCode3}`
                  return {
                    //
                    // We're only actually interested in the endDate, not
                    // the statement-ids. Requesting transactions requires
                    // only the account-id + a date range.
                    //
                    id: statementsResponse.id,
                    accountId,
                    sortCode,
                    accountNumber,
                    productCategoryCode,
                    endDate
                  }
                })
              )
            })
          }
        )
        Promise.allSettled(fetchStatementsJobs)
          .then(onlyFulfilled)
          .then(allAcctStatements => {
            const allStatements = allAcctStatements.flat()
            if (allStatements.length === 0) {
              fetcher.emit(actions.error.STATEMENTS)
              return
            }

            //
            // Update store
            //
            const statementsUpdate = allStatements.map(
              ({ id, accountId, endDate: endDateString }) => {
                const endDate = new Date(endDateString)
                const startDate = new Date(endDate)
                startDate.setMonth(startDate.getMonth() - 1)

                return {
                  id,
                  accountId,
                  endDate: endDate.getTime(),
                  startDate: startDate.getTime(),

                  startBalance: LEAVE_UNCHANGED,
                  endBalance: LEAVE_UNCHANGED
                }
              }
            )
            emit(actions.add.STATEMENTS, statementsUpdate)
            emit(actions.got.STATEMENTS, { allStatements, yearsToDownload })
          })
      }
    },

    'getting_statements -> found_statements': {
      on: actions.got.STATEMENTS,
      then: ({ allStatements, yearsToDownload }) => {
        //
        // Build next query
        //
        const accountsTransactionsQueries = allStatements.map(
          ({ id, accountId, endDate: endDateString, productCategoryCode }) => {
            const endDate = new Date(endDateString)
            const startDate = new Date(endDate)
            startDate.setMonth(startDate.getMonth() - 1)

            return {
              host: getHost(),
              id,
              accountId,
              productCategoryCode,
              transactionStartDate: startDate.toISOString().split('T')[0],
              transactionEndDate: endDate.toISOString().split('T')[0]
            }
          }
        )
        emit(actions.get.ENTRIES, {
          accountsTransactionsQueries,
          yearsToDownload
        })
      }
    },

    'getting_statements -> failed_statements': {
      on: actions.error.STATEMENTS,
      then: fetcher.Enter('idle')
    },

    //
    // Transactions
    //
    'found_statements -> getting_entries': {
      on: actions.get.ENTRIES,
      then: ({ accountsTransactionsQueries, yearsToDownload }) => {
        const progress = updateProgressBar(accountsTransactionsQueries.length)
        progress(0)

        const fetchAccountsTransactionsJobs = accountsTransactionsQueries.map(
          (query, idx) => {
            const { id, accountId } = query
            return pool(() => {
              progress(idx + 1)

              return fetchTransactions(query).then(
                map(transaction => ({
                  accountId,
                  statementId: id,
                  ...transaction
                }))
              )
            })
          }
        )
        Promise.allSettled(fetchAccountsTransactionsJobs)
          .then(onlyFulfilled)
          .then(allTransactionsInAccount => {
            const allTransactions = allTransactionsInAccount.flat()
            if (allTransactions.length === 0) {
              fetcher.emit(actions.error.ENTRIES)
              return
            }

            //
            // Update store
            //
            allTransactions.map(transaction => {
              const { date, debit, credit, type, payee, note } = transaction
              const { accountNumber, sortCode } = store().accounts.find(
                acct => acct.id === transaction.accountId
              )
              return Object.assign(transaction, {
                id: generateIdForTransaction({
                  date,
                  debit,
                  credit,
                  accountNumber,
                  sortCode,
                  type,
                  payee,
                  note
                })
              })
            })
            emit(actions.add.ENTRIES, allTransactions)
            emit(actions.got.ENTRIES)
          })
      }
    },

    'getting_entries -> found_entries': {
      on: actions.got.ENTRIES,
      then: () => {}
    },

    'getting_entries -> failed_entries': {
      on: actions.error.ENTRIES,
      then: fetcher.Enter('idle')
    },

    //
    // Downloading
    //
    'found_entries -> download_all': {
      on: actions.ui.DOWNLOAD_STATEMENTS,
      then: () => {}
    },

    'download_all -> found_entries': {
      on: actions.ui.DOWNLOADED_STATEMENTS,
      then: () => {}
    }
  })

  fetcher.onTransitions({
    //
    // Flag a problem
    //
    [`
        failed_accounts |
      failed_statements |
         failed_entries -> idle

    `]: () => {
      console.warn('Problem fetching data. Please try again.')
    }
  })

  fetcher.info()
})
