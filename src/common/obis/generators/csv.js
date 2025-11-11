import { csvEscape } from '@/obis/utils/escape'
import { simpleDate } from '@/obis/utils/dates'
import { convertCentsToDecimal } from '@/obis/utils/currency'

export function makeGenerator() {
  return {
    id: 'CSV',
    folder: 'csv',
    extension: 'csv',
    description: 'CSV RFC4180 (Excel, Numbers)',

    generate: statement => {
      const csv = [
        '"Transaction ID","Date","Account type","Account number","Payee","Memo","Type","Amount","Balance","Sort code","Account number only"',
        ''
      ]

      statement.entries.forEach(entry => {
        const { debit, credit, id, date, payee, note, type, balance } = entry
        const transactionAmount = convertCentsToDecimal(-debit + credit)

        csv.push(
          '"' +
            csvEscape(id) +
            '",' +
            '"' +
            csvEscape(simpleDate(date)) +
            '",' +
            '"' +
            csvEscape(statement.type) +
            '",' +
            '"' +
            csvEscape(statement.sortCode + ' ' + statement.accountNumber) +
            '",' +
            '"' +
            csvEscape(payee) +
            '",' +
            '"' +
            csvEscape(note || '') +
            '",' +
            '"' +
            csvEscape(type) +
            '",' +
            '"' +
            csvEscape(transactionAmount) +
            '",' +
            '"' +
            csvEscape(convertCentsToDecimal(balance)) +
            '",' +
            '"' +
            csvEscape(statement.sortCode) +
            '",' +
            '"' +
            csvEscape(statement.accountNumber) +
            '"'
        )
      })

      csv.push('')

      return csv.join('\r\n')
    }
  }
}
