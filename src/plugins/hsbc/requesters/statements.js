/* globals obis */

import { makePromise, poolPromises } from '@/cjs/promises'
import { actions } from '@/obis/actions'
import { LEAVE_UNCHANGED } from '@/obis/store'

import { actions as hsbcActions } from '../actions'
import { addAccountStatementsInterceptor } from '../hijack/statements'

export default configureStatementsInterceptor

function generateStatementListRequesterPayloads(
  accountsResponse,
  years = ['Latest']
) {
  return years.map(year =>
    accountsResponse.map(act => ({
      year: year,
      acctIndex: act.id,
      ctryCde: act.ctryCde,
      grpMmbr: act.grpMmbr,
      entProdTypCde: act.entProdTypCde,
      entProdCatCde: act.entProdCatCde
    }))
  )
}

function configureStatementsInterceptor() {
  const { messages } = obis.deps
  const { on, emit } = messages

  const requestStatementListForAccount = addAccountStatementsInterceptor()
  const accountsResponse = []
  on(actions.got.ACCOUNTS, _accountsResponse => {
    accountsResponse.push(..._accountsResponse)
  })

  function updateProgressBar(max, value) {
    emit(actions.ui.UPDATE_PROGRESS_BAR, { max, value })
  }

  function _requestStatements(years = ['Latest']) {
    // const years = ['2021', '2020']

    const statementListRequesters = generateStatementListRequesterPayloads(
      accountsResponse,
      years
    )
      .flat()
      .map(payload => () => {
        const [prom, res, rej] = makePromise()
        const resOff = on(hsbcActions.received.STATEMENTS_LIST, res)
        const rejOff = on(actions.error.STATEMENTS, rej)

        requestStatementListForAccount(payload)
        updateProgressBar(statementListRequesters.length, ++count)

        return prom.finally(() => {
          resOff()
          rejOff()
        })
      })

    let count = 0
    updateProgressBar(statementListRequesters.length, count)

    const CONCURRENT_REQUESTS_NOT_POSSIBLE_YET = 1

    poolPromises(
      CONCURRENT_REQUESTS_NOT_POSSIBLE_YET,
      ...statementListRequesters
    ).then(everything => {
      const fulfilled = everything
        .filter(x => x.status === 'fulfilled')
        .map(x => x.value[0])

      if (!fulfilled.length) {
        const reasons = everything
          .filter(x => x.status === 'rejected')
          .map(x => x.reason)

        emit(actions.error.STATEMENTS, reasons)
        return
      }

      const accountUpdates = fulfilled.map(x => ({
        id: x.id,
        iban: x.iban,
        bic: x.bic,
        accountNumber: LEAVE_UNCHANGED,
        sortCode: LEAVE_UNCHANGED,
        name: LEAVE_UNCHANGED,
        type: LEAVE_UNCHANGED
      }))

      const statementsAdded = fulfilled
        .map(account =>
          account.statementIds.map(statement => ({
            id: statement.id,
            accountId: account.id,
            endDate: new Date(statement.endDate).getTime(),
            startDate: LEAVE_UNCHANGED,
            startBalance: LEAVE_UNCHANGED,
            endBalance: LEAVE_UNCHANGED
          }))
        )
        .flat()

      emit(actions.update.ACCOUNTS, accountUpdates)
      emit(actions.add.STATEMENTS, statementsAdded)
      emit(actions.got.STATEMENTS)
      accountsResponse.length = 0
    })
  }

  return {
    canRequestStatements: () => !!accountsResponse.length,
    requestStatements: _requestStatements
  }
}
