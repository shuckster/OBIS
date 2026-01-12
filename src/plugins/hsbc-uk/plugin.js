/* globals obis, store */

//
// HSBC UK plugin entry-point
//

import { actions } from '@/obis/actions'
import { LEAVE_UNCHANGED } from '@/obis/store'
import { generateIdForTransaction } from '@/obis/generators'

import { fetchAccounts } from './api/accounts'
import { fetchStatementsList, fetchAllCcStatementPdfs } from './api/statements'
import { fetchTransactions, fetchCreditCardTransactions } from './api/transactions'

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
                const { sortCodeAndAccountNumber, normalisedProductCategoryCode } = accountResponse
                const isCreditCard = normalisedProductCategoryCode === 'CC'

                if (!sortCodeAndAccountNumber) {
                  console.warn(
                    'No sortCodeAndAccountNumber in accountResponse',
                    { accountResponse }
                  )
                  return
                }

                let sortCode = ''
                let accountNumber = ''

                if (isCreditCard) {
                  // Credit cards show masked number like "•••• •••• •••• 6137"
                  // Extract last 4 digits as identifier
                  const match = sortCodeAndAccountNumber.match(/(\d{4})$/)
                  accountNumber = match ? match[1] : sortCodeAndAccountNumber
                  sortCode = ''  // Credit cards don't have sort codes
                } else {
                  // Regular accounts show "40-16-08 52384027"
                  const parts = (sortCodeAndAccountNumber || '').split(' ')
                  sortCode = parts[0] || ''
                  accountNumber = parts[1] || ''

                  if (!sortCode || !accountNumber) {
                    console.warn('Could not parse sortCodeAndAccountNumber', {
                      sortCodeAndAccountNumber,
                      accountResponse
                    })
                    return
                  }
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
                  availableBalance: accountResponse.availableBalance
                    ? Math.round(accountResponse.availableBalance * 100)
                    : LEAVE_UNCHANGED,
                  lastUpdatedTimestamp: new Date(
                    accountResponse.lastUpdatedDate
                  ).getTime(),
                  isCreditCard,

                  iban: LEAVE_UNCHANGED,
                  bic: LEAVE_UNCHANGED
                }
              })
              .filter(Boolean)

            console.log('[OBIS] Storing accounts:', accountsUpdate.map(a => ({
              id: a.id.slice(-20),
              accountNumber: a.accountNumber,
              isCreditCard: a.isCreditCard
            })))
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
        // Build next query - separate account types
        // Only CHQ (current) and SAV (savings) support the statements API
        // CC (credit cards) use the CC transactions API
        // LOAN and OTHER are not supported for transaction download
        //
        const supportedForStatements = ['CHQ', 'SAV']
        const regularAccounts = accountsResponse.filter(
          a => supportedForStatements.includes(a.normalisedProductCategoryCode)
        )
        const creditCardAccounts = accountsResponse.filter(
          a => a.normalisedProductCategoryCode === 'CC'
        )
        const skippedAccounts = accountsResponse.filter(
          a => !supportedForStatements.includes(a.normalisedProductCategoryCode) && a.normalisedProductCategoryCode !== 'CC'
        )

        console.log('[OBIS] Account types found:', {
          regular: regularAccounts.map(a => ({ id: a.id.slice(-20), type: a.normalisedProductCategoryCode })),
          creditCards: creditCardAccounts.map(a => ({ id: a.id.slice(-20), type: a.normalisedProductCategoryCode })),
          skipped: skippedAccounts.map(a => ({ id: a.id.slice(-20), type: a.normalisedProductCategoryCode }))
        })

        const statementsQueries = regularAccounts.map(accountResponse => ({
          host: getHost(),
          accountId: accountResponse.id,
          productCategoryCode: accountResponse.productCategoryCode
        }))

        emit(actions.get.STATEMENTS, {
          statementsQueries,
          creditCardAccounts,
          yearsToDownload
        })
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
      then: ({ statementsQueries, creditCardAccounts = [], yearsToDownload }) => {
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
                    endDate,
                    isCreditCard: false
                  }
                })
              )
            })
          }
        )
        Promise.allSettled(fetchStatementsJobs)
          .then(onlyFulfilled)
          .then(allAcctStatements => {
            const regularStatements = allAcctStatements.flat()

            //
            // Create synthetic statement for credit cards
            // Single statement containing both pending (UN_BILLED) and posted (BILLED) transactions
            //
            console.log('[OBIS] Creating CC statements for:', creditCardAccounts.length, 'credit cards')
            const ccStatements = creditCardAccounts.map(cc => {
              const now = new Date()
              const lastFour = cc.sortCodeAndAccountNumber.match(/(\d{4})$/)?.[1] || '****'
              console.log('[OBIS] CC account:', {
                display: cc.sortCodeAndAccountNumber,
                lastFour,
                name: cc.accountHolderName,
                id: cc.id.slice(-30)
              })

              return {
                id: `${cc.id}-all`,
                accountId: cc.id,
                sortCode: '',
                accountNumber: lastFour,
                productCategoryCode: cc.productCategoryCode,
                endDate: now.toISOString().split('T')[0],
                isCreditCard: true,
                cardName: `${cc.accountHolderName} (${lastFour})`
              }
            })
            console.log('[OBIS] Created CC statements:', ccStatements.map(s => ({ id: s.id.slice(-20) })))

            const allStatements = [...regularStatements, ...ccStatements]

            if (allStatements.length === 0) {
              fetcher.emit(actions.error.STATEMENTS)
              return
            }

            //
            // Update store
            //
            const statementsUpdate = allStatements.map(
              ({ id, accountId, endDate: endDateString, isCreditCard }) => {
                const endDate = new Date(endDateString)
                const startDate = new Date(endDate)
                if (!isCreditCard) {
                  startDate.setMonth(startDate.getMonth() - 1)
                }

                return {
                  id,
                  accountId,
                  endDate: endDate.getTime(),
                  startDate: isCreditCard ? 0 : startDate.getTime(),

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
        // For CC accounts, create two queries (UN_BILLED + BILLED) for the same statement
        //
        const accountsTransactionsQueries = allStatements.flatMap(
          ({ id, accountId, endDate: endDateString, productCategoryCode, isCreditCard }) => {
            const endDate = new Date(endDateString)
            const startDate = new Date(endDate)
            startDate.setMonth(startDate.getMonth() - 1)

            if (isCreditCard) {
              // Credit card: create two queries for UN_BILLED and BILLED
              // Both use the same statementId so entries are combined
              console.log('[OBIS] Building CC transaction queries:', {
                statementId: id.slice(-20),
                cardIdentifier: accountId.slice(-30)
              })
              return [
                {
                  host: getHost(),
                  id,
                  accountId,
                  isCreditCard: true,
                  transactionType: 'UN_BILLED',
                  cardIdentifier: accountId
                },
                {
                  host: getHost(),
                  id,
                  accountId,
                  isCreditCard: true,
                  transactionType: 'BILLED',
                  cardIdentifier: accountId
                }
              ]
            }

            // Regular account query - uses date range
            return {
              host: getHost(),
              id,
              accountId,
              isCreditCard: false,
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
            const { id, accountId, isCreditCard, transactionType } = query
            return pool(() => {
              progress(idx + 1)

              console.log('[OBIS] Fetching transactions:', {
                isCreditCard,
                transactionType: transactionType || 'N/A',
                statementId: id.slice(-20),
                accountId: accountId.slice(-30)
              })

              // Use appropriate fetcher based on account type
              const fetchPromise = isCreditCard
                ? fetchCreditCardTransactions(query)
                : fetchTransactions(query)

              return fetchPromise.then(transactions => {
                console.log('[OBIS] Fetched transactions:', {
                  count: transactions.length,
                  isCreditCard,
                  transactionType: transactionType || 'N/A'
                })
                return transactions
              }).then(
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
            console.log('[OBIS] Processing transactions:', allTransactions.length)
            console.log('[OBIS] Store accounts:', store().accounts.map(a => ({ id: a.id.slice(-20), accountNumber: a.accountNumber })))

            allTransactions.map(transaction => {
              const { date, debit, credit, type, payee, note } = transaction
              const account = store().accounts.find(
                acct => acct.id === transaction.accountId
              )
              if (!account) {
                console.warn('[OBIS] Could not find account for transaction:', {
                  accountId: transaction.accountId.slice(-30),
                  payee
                })
                return transaction
              }
              const { accountNumber, sortCode } = account
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
            console.log('[OBIS] Emitting add.ENTRIES with', allTransactions.length, 'transactions')
            emit(actions.add.ENTRIES, allTransactions)
            console.log('[OBIS] Emitting got.ENTRIES to transition to found_entries')
            emit(actions.got.ENTRIES)
            console.log('[OBIS] State machine should now be in found_entries')
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

  // Register CC PDF fetcher for use by zip export
  obis.fetchAllCcStatementPdfs = fetchAllCcStatementPdfs

  fetcher.info()
})
