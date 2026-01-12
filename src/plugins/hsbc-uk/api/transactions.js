import jmespath from 'jmespath'

import { buildHeadersFromSiteConfig } from '../helpers'
import { makeTransactionsUrl, makeCreditCardTransactionsUrl } from '../urls'

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
      const transactionsKey = "transactions";
      if (!Array.isArray(json[transactionsKey])) {
        console.warn('No transactions found in JSON', { accountId, json })
        return []
      }
      const entriesPath = `
        ${transactionsKey}[].{
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
      // NOTE: Does this always return an array?
      return entries
    })

function creditAndDebitFromAmount(amount) {
  const [debit, credit] = (amount < 0 ? [amount, 0] : [0, amount])
    .map(x => x * 100)
    .map(Math.abs)
    .map(Math.round)

  return { debit, credit }
}

//
// Fetch credit card transactions
//

export const fetchCreditCardTransactions = async ({
  host = '',
  cardIdentifier,
  transactionType = 'UN_BILLED'
} = {}) => {
  const allEntries = []
  let nextPageIndex = null
  let pageNum = 1
  const MAX_PAGES = 50 // Safety limit

  console.log('[OBIS] CC Transaction params:', { cardIdentifier: cardIdentifier?.slice(-30), transactionType })

  do {
    const url = makeCreditCardTransactionsUrl({
      host,
      cardIdentifier,
      transactionType,
      nextPageIndex
    })
    console.log(`[OBIS] CC Transaction fetch page ${pageNum}:`, url.slice(0, 120) + '...')

    const response = await fetch(url, {
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

    const json = await response.json()

    if (!Array.isArray(json.transactions)) {
      console.warn('No credit card transactions found in JSON', { cardIdentifier, transactionType, pageNum, json })
      break
    }

    const entriesPath = `
      transactions[].{
        "date":                   transactionDate,
        "payee":                  transactionDescriptions[0],
        "note":                   transactionDescriptions[1:-1:] | join(' ', @),
        "amount":                 transactionAmount.amount,
        "creditDebitCode":        transactionCreditDebitCode,
        "transactionReference":   transactionReferenceNumber,
        "category":               categoryOfTransaction
      }
    `
    const entries = jmespath.search(json, entriesPath).map(entry => {
      const { date, amount, creditDebitCode, ...restEntry } = entry
      // Credit card transactions use explicit credit/debit code
      // DEBIT_TRANSACTION = spent money (positive debit)
      // CREDIT_TRANSACTION = refund/payment received (positive credit)
      const isCredit = creditDebitCode === 'CREDIT_TRANSACTION'
      const absAmount = Math.abs(amount)

      return {
        date: new Date(date).getTime(),
        type: isCredit ? 'DEP' : 'WITHD',
        ...restEntry,
        debit: isCredit ? 0 : Math.round(absAmount * 100),
        credit: isCredit ? Math.round(absAmount * 100) : 0,
        balance: 0  // Credit cards don't have running balance per transaction
      }
    })

    allEntries.push(...entries)
    console.log(`[OBIS] CC Transaction page ${pageNum}: got ${entries.length} entries (total: ${allEntries.length})`)

    // Check for next page - pagination info is nested in json.pagination object
    nextPageIndex = json.pagination?.nextPageIndex || null
    pageNum++

  } while (nextPageIndex && pageNum <= MAX_PAGES)

  if (pageNum > MAX_PAGES) {
    console.warn(`[OBIS] CC Transaction pagination stopped at ${MAX_PAGES} pages`)
  }

  console.log(`[OBIS] CC Transaction ${transactionType} complete: ${allEntries.length} total entries`)
  return allEntries
}
