/* globals obis */

import { makePromise, poolPromises } from '@/cjs/promises'
import { actions } from '@/obis/actions'
import { LEAVE_UNCHANGED } from '@/obis/store'

import { actions as hsbcActions } from '../actions'
import { addStatementDetailInterceptor } from '../hijack/entries'

export default configureEntriesInterceptor

function generateStatementDetailsRequesterPayloads(statementsListResponse) {
  return statementsListResponse.map(stmtList =>
    stmtList.statementIds.map(stmtMeta => ({
      entProdTypCde: stmtList.entProdTypCde,
      acctIndex: stmtList.id,
      startSheet: stmtList.startSheet,
      stmtId: stmtMeta.id,
      stmtDt: stmtMeta.endDate
    }))
  )
}

function configureEntriesInterceptor() {
  const { messages } = obis.deps
  const { on, emit } = messages

  const requestStatementDetail = addStatementDetailInterceptor()

  const statementsListResponses = []
  on(hsbcActions.received.STATEMENTS_LIST, _statementsListResponse => {
    statementsListResponses.push(..._statementsListResponse)
  })

  function updateProgressBar(max, value) {
    emit(actions.ui.UPDATE_PROGRESS_BAR, { max, value })
  }

  function _requestEntries() {
    const statementDetailsRequesters = generateStatementDetailsRequesterPayloads(
      statementsListResponses
    )
      .flat()
      .map(payload => () => {
        const [prom, res, rej] = makePromise()
        const resOff = on(hsbcActions.received.STATEMENT_DETAILS, res)
        const rejOff = on(actions.error.ENTRIES, rej)

        requestStatementDetail(payload)
        updateProgressBar(statementDetailsRequesters.length, ++count)

        return prom.finally(() => {
          resOff()
          rejOff()
        })
      })

    let count = 0
    updateProgressBar(statementDetailsRequesters.length, count)

    const CONCURRENT_REQUESTS_NOT_POSSIBLE_YET = 1

    poolPromises(
      CONCURRENT_REQUESTS_NOT_POSSIBLE_YET,
      ...statementDetailsRequesters
    ).then(everything => {
      const fulfilled = everything
        .filter(x => x.status === 'fulfilled')
        .map(x => x.value)

      if (!fulfilled.length) {
        const reasons = everything
          .filter(x => x.status === 'rejected')
          .map(x => x.reason)

        emit(actions.error.ENTRIES, reasons)
        return
      }

      const allBalances = fulfilled.map(x => x.balances)
      const allEntries = fulfilled.map(x => x.entries).flat()

      const statementUpdates = allBalances.map(balance => {
        const {
          statementId,
          startDate,
          endDate,
          startBalance,
          endBalance
        } = balance
        return {
          id: statementId,
          accountId: LEAVE_UNCHANGED,
          endDate: endDate,
          startDate: startDate,
          startBalance: startBalance,
          endBalance: endBalance
        }
      })

      const entriesAdded = allEntries.map(entry => {
        const amount = entry.credit + -entry.debit
        const type = amount < 0 ? 'WITHD' : 'DEP'
        return {
          id: entry.id,
          accountId: entry.accountId,
          statementId: entry.statementId,

          date: entry.date,
          type: type,
          payee: entry.payee,
          note: entry.note,
          debit: entry.debit,
          credit: entry.credit,
          balance: entry.balance
        }
      })

      emit(actions.update.STATEMENTS, statementUpdates)
      emit(actions.add.ENTRIES, entriesAdded)
      emit(actions.got.ENTRIES)
      statementsListResponses.length = 0
    })
  }

  return {
    canRequestEntries: () => !!statementsListResponses.length,
    requestEntries: _requestEntries
  }
}
