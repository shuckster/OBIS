/* globals obis */

import { ObjTypeError, isString, isNumber, isThisValue } from '@/esm/types'
import { generateIdForTransaction } from '@/obis/generators'
import { actions } from '@/obis/actions'
import { actions as hsbcActions } from '../actions'
import {
  parseDescriptionIntoPayeeAndNote,
  parseHsbcDateTimeString,
  hsbcCommonHeaders
} from '../helpers'

export { addStatementDetailInterceptor }

//
// STATEMENT DETAIL
//

const checkSchema = ObjTypeError('addStatementDetailInterceptor#')

function addStatementDetailInterceptor() {
  const { addAjaxListener, AjaxRequester, jmespath, messages } = obis.deps

  addAjaxListener({
    name: 'rtrvStmtDetl',
    description: 'Parse a statement part',
    rx: /\/accountDataSvc\/rtrvStmtDetl/,
    onFullResponse: payload => {
      const { data = '{}', responseText } = payload
      const postData = JSON.parse(data)
      const json = JSON.parse(responseText)

      //
      // IDs
      //
      const idsPath = `
        {
          accountId: acctIdr.acctIndex,
          statementId: stmtDtl.stmtId
        }
      `
      const ids = jmespath.search(postData, idsPath)

      const idsErr = checkSchema({
        accountId: isString,
        statementId: isString
      })('ids')(ids)

      if (idsErr) {
        const reason = `rtrvStmtDetl :: Validation failed: ${idsErr}`
        messages.emit(actions.error.ENTRIES, new TypeError(reason))
        return
      }

      //
      // BALANCES
      //

      // FIXME: Why has HSBC swapped around the start/end balances? o_O
      const balancesPath = `
        stmtInfo.{
          startDate:      stmtPrdDetl.stmtPrdStrtDt,
          endDate:        stmtPrdDetl.stmtPrdEndDt,
          endBalance:     stmtStartBal.amt,
          startBalance:   stmtEndBal.amt
        }
      `
      // FIXME: Why has HSBC swapped around the start/end balances? o_O

      const balances = jmespath.search(json, balancesPath)

      const balancesErr = checkSchema({
        startDate: isString,
        startBalance: isNumber,
        endDate: isString,
        endBalance: isNumber
      })('balances')(balances)

      if (balancesErr) {
        const reason = `rtrvStmtDetl :: Validation failed: ${balancesErr}`
        messages.emit(actions.error.ENTRIES, new TypeError(reason))
        return
      }

      //
      // ENTRIES
      //
      const entriesPath = `
        stmtInfo.stmtTxnDetl[].{
          fullDescription:   txnDetail[0],
          amount:            txnAmt.amt,
          runningBalance:    balRunAmt.amt,
          date:              txnDt
        }
      `
      const validateEntry = entry =>
        !checkSchema({
          date: isString,
          fullDescription: isString,
          amount: isNumber,
          runningBalance: [isNumber, isThisValue(null)]
        })('validateEntry')(entry)

      const entries = jmespath.search(json, entriesPath)
      const entriesValid = entries.every(validateEntry)

      if (!entriesValid) {
        const reason = `rtrvStmtDetl :: Validation failed: ${entries}`
        messages.emit(actions.error.ENTRIES, new TypeError(reason))
        return
      }

      //
      // BUILD
      //
      const obisBalances = {
        ...ids,
        startDate: parseHsbcDateTimeString(balances.startDate),
        endDate: parseHsbcDateTimeString(balances.endDate),
        startBalance: Math.round(balances.startBalance * 100),
        endBalance: Math.round(balances.endBalance * 100)
      }
      const obisEntries = entries.map(entry => {
        const { fullDescription, amount, runningBalance, date } = entry
        const [payee, note] = parseDescriptionIntoPayeeAndNote(fullDescription)
        const debit = Math.round(Math.abs(Math.min(amount, 0)) * 100)
        const credit = Math.round(Math.max(amount, 0) * 100)
        const balance = Math.round(runningBalance * 100)
        const transaction = {
          ...ids,
          payee,
          note,
          date: parseHsbcDateTimeString(date),
          debit,
          credit,
          balance
        }
        const id = generateIdForTransaction(transaction)
        return {
          id,
          ...transaction
        }
      })

      messages.emit(hsbcActions.received.STATEMENT_DETAILS, {
        balances: obisBalances,
        entries: obisEntries
      })
    }
  })

  return AjaxRequester({
    name: 'rtrvStmtDetl',
    description: 'Request a statement part',
    method: 'post',
    url: '/gpib/channel/proxy/accountDataSvc/rtrvStmtDetl',
    setHeaders: hsbcCommonHeaders,
    setPayload: options => {
      const err = checkSchema({
        entProdTypCde: isString,
        acctIndex: isString,
        startSheet: isNumber,
        stmtId: isString,
        stmtDt: isString
      })('AjaxRequester')(options)

      if (err) {
        const reason = `rtrvStmtDetl :: Invalid options: ${err}`
        messages.emit(actions.error.ENTRIES, new TypeError(reason))
        return
      }

      const payload = {
        acctIdr: {
          acctIndex: options.acctIndex,
          entProdTypCde: options.entProdTypCde
        },
        startSheet: options.startSheet,
        bulkKey: 0,
        bulkKeyNum: 0,
        stmtDtl: {
          stmtId: options.stmtId,
          stmtDt: options.stmtDt,
          stmtType: 'undefined'
          // Set to "BASE"? (ie; not "AIS_BASE")
        },
        pagingInfo: {},
        extensions: [
          {
            name: ' ',
            value: '1'
          },
          {
            name: ' ',
            value: '1'
          },
          {
            name: ' ',
            value: '1'
          }
        ]
      }
      return JSON.stringify(payload)
    }
  })
}
