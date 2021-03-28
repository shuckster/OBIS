/* globals obis */

import { ObjTypeError, isString } from '@/esm/types'
import { actions } from '@/obis/actions'
import { actions as hsbcActions } from '../actions'
import { hsbcCommonHeaders } from '../helpers'

export { addAccountsInterceptor }

//
// ACCOUNTS SUMMARY
//

const checkSchema = ObjTypeError('addStatementDetailInterceptor#')

function addAccountsInterceptor() {
  const { addAjaxListener, AjaxRequester, jmespath, messages } = obis.deps

  addAjaxListener({
    name: 'rtrvAcctSumm',
    description: 'Parse a list of accounts',
    rx: /\/accountDataSvc\/rtrvAcctSumm/,
    onFullResponse: payload => {
      const { responseText } = payload
      const json = JSON.parse(responseText)

      // ...
      const entriesPath = `
        countriesAccountList[].acctLiteWrapper[].{
          id:                         acctIndex,
          accountHolderName:          acctHldrFulName[0],
          sortCodeAndAccountNumber:   displyID,

          entProdTypCde: entProdTypCde,
          entProdCatCde: entProdCatCde
        }
      `
      const entityPath = `
        countriesAccountList[].entityID
      `

      const validateEntry = entry =>
        !checkSchema({
          id: isString,
          accountHolderName: isString,
          sortCodeAndAccountNumber: isString
        })('validateEntry')(entry)

      const validateEntity = entity =>
        !checkSchema({
          ctryCde: isString,
          grpMmbr: isString
        })('validateEntity')(entity)

      const entries = jmespath.search(json, entriesPath)
      const entity = jmespath.search(json, entityPath)
      const entriesValid = entries.every(validateEntry)
      const entityValid = entity.every(validateEntity)

      if (!entriesValid || !entityValid) {
        const reason = `rtrvAcctSumm :: Validation failed: ${entries} + ${entity}`
        messages.emit(actions.error.ACCOUNTS, new TypeError(reason))
        return
      }

      const { ctryCde, grpMmbr } = entity[0]
      const sanitizedEntity = {
        ctryCde: ctryCde.toLowerCase(),
        grpMmbr
      }

      const obisEntries = entries.map(entry => {
        const { sortCodeAndAccountNumber, ...restEntry } = entry
        const [sortCode, accountNumber] = sortCodeAndAccountNumber.split(' ')
        return {
          ...sanitizedEntity,
          ...restEntry,
          sortCode,
          accountNumber
        }
      })

      messages.emit(hsbcActions.received.ACCOUNTS_LIST, obisEntries)
    }
  })

  return AjaxRequester({
    name: 'rtrvAcctSumm',
    description: 'Request a list of accounts',
    method: 'post',
    url: '/gpib/channel/proxy/accountDataSvc/rtrvAcctSumm',
    setHeaders: hsbcCommonHeaders,
    setPayload: options => {
      const err = checkSchema({
        ctryCde: isString,
        grpMmbr: isString
      })('AjaxRequester')(options)

      if (err) {
        const reason = `rtrvAcctSumm :: Invalid options: ${err}`
        messages.emit(actions.error.ACCOUNTS, new TypeError(reason))
        return
      }

      const payload = {
        accountSummaryFilter: {
          txnTypCdes: [],
          entityCdes: [
            {
              ctryCde: options.ctryCde,
              grpMmbr: options.grpMmbr
            }
          ]
        }
      }
      return JSON.stringify(payload)
    }
  })
}
