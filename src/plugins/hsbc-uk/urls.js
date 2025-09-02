export { makeAccountsUrl, makeStatementsUrl, makeTransactionsUrl }

const liveHost = 'https://www.hsbc.co.uk'

function makeAccountsUrl({ host = liveHost }) {
  return [
    host,
    `/api`,
    `/dcc-gb-hrfb-account-list-papi-prod-proxy/v1/accounts/domestic`
  ].join('')
}

function makeStatementsUrl({ host = liveHost, accountId }) {
  return [
    host,
    `/api`,
    `/mmf-files-statements--gb-hrfb-prod-proxy/v2/customer-accounts/${accountId}`,
    `/statements?statementType=REGULAR`
  ].join('')
}

// function makeTransactionsUrl({
//   host = liveHost,
//   accountId,
//   productCategoryCode,
//   transactionStartDate = 'yyyy-MM-dd',
//   transactionEndDate = 'yyyy-MM-dd'
// }) {
//   return [
//     host,
//     `/api`,
//     `/dcc-gb-hrfb-account-transactions-papi-prod-proxy/v1/accounts/${productCategoryCode}-${accountId}`,
//     `/historical-transactions?`,
//     `transactionStartDate=${transactionStartDate}&`,
//     `transactionEndDate=${transactionEndDate}&`,
//     `sortCode=D&`,
//     `txnSearch=true`
//   ].join('')
// }

function makeTransactionsUrl({
  host = liveHost,
  accountId,
  // productCategoryCode,
  transactionStartDate = 'yyyy-MM-dd',
  transactionEndDate = 'yyyy-MM-dd'
}) {
  const baseUrl = [
    host,
    "/api",
    "/wpb-mmf-gb-hrfb-pa-account-transactions-prod-proxy",
    "/v2",
    "/transactions"
  ].join("");

  const params = new URLSearchParams({
    identifier: accountId,
    limit: "500",
    transactionCategory: "HISTORIC",
    identifierType: "ACCOUNT",
    transactionStartDate,
    transactionEndDate,
    txnSearch: "true",
  });

  const url = `${baseUrl}?${params.toString()}`;
  return url;
}

