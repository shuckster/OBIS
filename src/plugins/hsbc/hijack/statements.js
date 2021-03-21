/* globals obis */

import { ObjTypeError, isString, isNumber, isThisValue } from '@/esm/types'
import { actions } from '@/obis/actions'
import { actions as hsbcActions } from '../actions'
import { hsbcCommonHeaders } from '../helpers'

export { addAccountStatementsInterceptor }

//
// STATEMENT ACCOUNTS LIST
//

const checkSchema = ObjTypeError('addAccountStatementsInterceptor#')

function addAccountStatementsInterceptor() {
  const { addAjaxListener, AjaxRequester, jmespath, messages } = obis.deps

  addAjaxListener({
    name: 'rtrvStmtAcctList',
    description: 'Parse a list of available statements in an account',
    rx: /\/accountDataSvc\/rtrvStmtAcctList/,
    onFullResponse: payload => {
      const { responseText } = payload
      const json = JSON.parse(responseText)

      // ...
      const entriesPath = `
        {
          id:     stmtAcctList[].acctIdr.acctIndex | [0],
          bic:    extensions[?name=='bic'].value   | [0],
          iban:   extensions[?name=='iban'].value  | [0],

          entProdCatCde: stmtAcctList[].acctIdr.entProdCatCde | [0],
          entProdTypCde: stmtAcctList[].acctIdr.entProdTypCde | [0],

          startSheet: stmtAcctList[].startSheet | [0],
          statementIds: stmtAcctList[].stmts[?stmtType=='BASE'][].{
            id:       stmtPart[].partId | [0],
            endDate:  stmtEndDt
          }
        }
      `
      const validateEntries = entry =>
        !checkSchema(
          'validateEntries',
          {
            id: isString,
            bic: isString,
            iban: isString,
            entProdCatCde: isString,
            entProdTypCde: isString,
            startSheet: isNumber,
            statementIds: isValidStatementIds
          },
          entry
        )
      const entries = jmespath.search(json, entriesPath)
      const entriesValid = validateEntries(entries)

      if (!entriesValid) {
        const reason = `rtrvStmtAcctList :: Validation failed: ${entries}`
        messages.emit(actions.error.STATEMENTS, new TypeError(reason))
        return
      }

      messages.emit(hsbcActions.received.STATEMENTS_LIST, [entries])
    }
  })

  return AjaxRequester({
    name: 'rtrvStmtAcctList',
    description: 'Request a list of available statements in an account',
    method: 'post',
    url: '/gpib/channel/proxy/accountDataSvc/rtrvStmtAcctList',
    setHeaders: hsbcCommonHeaders,
    setPayload: options => {
      const err = checkSchema(
        'AjaxRequester',
        {
          ctryCde: isString,
          grpMmbr: isString,
          year: [isThisValue('Latest'), isString],
          acctIndex: isString,
          entProdTypCde: isString,
          entProdCatCde: isString
        },
        options
      )
      if (err) {
        const reason = `rtrvStmtAcctList :: Invalid options: ${err}`
        messages.emit(actions.error.STATEMENTS, new TypeError(reason))
        return
      }

      const payload = {
        extensions: [
          {
            name: 'date',
            value: options.year || 'Latest'
          }
        ],
        custIdr: {
          entityID: {
            ctryCde: options.ctryCde,
            grpMmbr: options.grpMmbr
          },
          custID: ' '
        },
        account: [
          {
            acctIdr: {
              acctIndex: options.acctIndex,
              entProdTypCde: options.entProdTypCde,
              entProdCatCde: options.entProdCatCde
            },
            procFlag: ' ',
            eStmFlag: ' ',
            emailId: ' '
          }
        ]
      }
      return JSON.stringify(payload)
    }
  })
}

function isValidStatementIds(statementIds) {
  return statementIds.every(({ id, endDate }) => {
    return typeof id === 'string' && typeof endDate === 'string'
  })
}
isValidStatementIds.displayName = 'isValidStatementIds'
