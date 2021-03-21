// const gbpFormatter = new Intl.NumberFormat('en-GB', {
//   style: 'currency',
//   currency: 'GBP'
// })

export function convertCentsToDecimal(cents) {
  if (!cents || 'number' !== typeof cents) {
    return '-'
  }
  const decimal = cents / 100
  // const currencyString = gbpFormatter.format(decimal)
  return decimal.toLocaleString('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}
