import { qifEscape } from '@/obis/utils/escape'
import { USDateTimeString } from '@/obis/utils/dates'
import { convertCentsToDecimal } from '@/obis/utils/currency'

export function makeGenerator() {
  return {
    id: 'QIF',
    folder: 'qif',
    extension: 'qif',
    description: 'QIF (Quicken)',

    generate: statement => {
      let qif
      const latestBalanceIndex = statement.balances.length - 1

      qif =
        '!Account' +
        '\n' +
        'N' +
        qifEscape(statement.type) +
        '\n' +
        'A' +
        qifEscape(
          statement.sortCode +
            '/' +
            statement.sortCode +
            statement.accountNumber
        ) +
        '\n' +
        '/' +
        qifEscape(
          USDateTimeString(statement.balances[latestBalanceIndex].date)
        ) +
        '\n' +
        '$' +
        qifEscape(
          convertCentsToDecimal(statement.balances[latestBalanceIndex].balance)
        ) +
        '\n' +
        'T' +
        'Bank' +
        '\n' +
        '^' +
        '\n' +
        '!Type:Bank' +
        '\n'

      statement.entries.forEach(entry => {
        // eslint-disable-next-line no-unused-vars
        const { debit, credit, id, date, payee, note, type } = entry
        const transactionAmount = convertCentsToDecimal(-debit + credit)

        qif +=
          'D' +
          qifEscape(USDateTimeString(date)) +
          '\n' +
          'N' +
          qifEscape(-debit + credit < 0 ? 'WITHD' : 'DEP') +
          '\n' +
          'T' +
          qifEscape(transactionAmount) +
          '\n' +
          'C' +
          '\n' +
          'P' +
          qifEscape(payee) +
          '\n' +
          (note ? 'M' + qifEscape(note) + '\n' : '') +
          '^' +
          '\n'
      })

      qif += '\n'

      return qif
    }
  }
}
