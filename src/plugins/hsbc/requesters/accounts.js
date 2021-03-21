/* globals obis */

import { actions } from '@/obis/actions'
import { LEAVE_UNCHANGED } from '@/obis/store'

import { actions as hsbcActions } from '../actions'
import { addAccountsInterceptor } from '../hijack/accounts'
import { hsbcCodes } from '../helpers'

export default configureEntriesInterceptor

function configureEntriesInterceptor() {
  const { messages } = obis.deps
  const { on, emit } = messages

  const requestAccounts = addAccountsInterceptor()

  function _requestAccounts() {
    requestAccounts(hsbcCodes())
  }

  on(hsbcActions.received.ACCOUNTS_LIST, accountsResponse => {
    const accountsUpdate = accountsResponse.map(accountResponse => {
      return {
        id: accountResponse.id,
        accountNumber: accountResponse.accountNumber,
        sortCode: accountResponse.sortCode,
        name: accountResponse.accountHolderName,
        type: accountResponse.entProdTypCde,
        iban: LEAVE_UNCHANGED,
        bic: LEAVE_UNCHANGED
      }
    })

    emit(actions.add.ACCOUNTS, accountsUpdate)
    emit(actions.got.ACCOUNTS, accountsResponse)
  })

  return {
    canRequestAccounts: () => true,
    requestAccounts: _requestAccounts
  }
}
