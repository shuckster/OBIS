import jmespath from 'jmespath'

import { buildHeadersFromSiteConfig } from '../helpers'
import { makeTransactionsUrl } from '../urls'

//
// Fetch transactions on an account. Can only grab 12 months at a time
//

export const fetchTransactions = ({
  host = '',
  accountId,
  productCategoryCode,
  transactionStartDate,
  transactionEndDate
} = {}) =>
  fetch(
    makeTransactionsUrl({
      host,
      accountId,
      productCategoryCode,
      transactionStartDate,
      transactionEndDate
    }),
    {
      method: 'GET',
      headers: {
        ...buildHeadersFromSiteConfig(),
        'content-type': 'application/json',
        accept: 'application/json, text/plain, */*',
        adrum: 'isAjax:true',
        token_type: 'SESSION_TOKEN',
        iscacheable: 'false'
      }
    }
  )
    .then(res => res.json())
    .then(json => {
      const entriesPath = `
        transactionSummary[].{
          "date":        transactionDate,
          "payee":       transactionDescriptions[0],
          "note":        transactionDescriptions[1:-1:] | join(' ', @),
          "amount":      transactionAmount.amount,
          "balance":     runningBalanceAmount.amount
        }
      `
      const entries = jmespath.search(json, entriesPath).map(entry => {
        const { date, amount, balance, ...restEntry } = entry
        return {
          date: new Date(date).getTime(),
          type: amount > 0 ? 'DEP' : 'WITHD',
          ...restEntry,
          ...creditAndDebitFromAmount(amount),
          balance: Math.round(balance * 100)
        }
      })
      return entries
    })

function creditAndDebitFromAmount(amount) {
  const [debit, credit] = (amount < 0 ? [amount, 0] : [0, amount])
    .map(x => x * 100)
    .map(Math.abs)
    .map(Math.round)

  return { debit, credit }
}
