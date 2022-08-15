import jmespath from 'jmespath'

import { buildHeadersFromSiteConfig } from '../helpers'
import { makeAccountsUrl } from '../urls'

//
// Fetch accounts list
//

export const fetchAccounts = ({ host = '' } = {}) =>
  fetch(makeAccountsUrl({ host }), {
    method: 'GET',
    headers: {
      ...buildHeadersFromSiteConfig(),
      'content-type': 'application/json',
      accept: 'application/json, text/plain, */*',
      adrum: 'isAjax:true',
      token_type: 'SESSION_TOKEN',
      iscacheable: 'false'
    }
  })
    .then(res => res.json())
    .then(json => {
      if (!Array.isArray(json.accountList)) {
        console.warn('No accounts-list found in JSON', { json })
        return []
      }
      const entriesPath = `
        accountList[].{
          id:                         accountIdentifier.accountNumber,
          accountHolderName:          accountHolderName,
          sortCodeAndAccountNumber:   accountDisplay,
          ledgerBalance:              ledgerBalance.amount,
          lastUpdatedDate:            lastUpdatedDate,

          productCode:           accountIdentifier.productCode,
          productCategoryCode:   accountIdentifier.productCategoryCode
        }
      `
      const entries = jmespath.search(json, entriesPath)
      // NOTE: Does this always return an array?
      return entries
    })
