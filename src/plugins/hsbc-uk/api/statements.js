import jmespath from 'jmespath'

import { buildHeadersFromSiteConfig } from '../helpers'
import { makeStatementsUrl } from '../urls'

//
// Fetch statements list
//

export const fetchStatementsList = ({ host = '', accountId } = {}) =>
  fetch(makeStatementsUrl({ host, accountId }), {
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
      if (!Array.isArray(json.statements)) {
        console.warn('No statements found in JSON', { accountId, json })
        return []
      }
      const entriesPath = `
        statements[].{
          "id":               statementIdentifier,
          "accountNumber":    accountNumber,
          "endDate":          statementDate
        }
      `
      const entries = jmespath.search(json, entriesPath)
      // NOTE: Does this always return an array?
      return entries
    })
