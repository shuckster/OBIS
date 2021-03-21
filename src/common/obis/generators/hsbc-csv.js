import { csvEscape } from '@/obis/utils/escape'
import { UKDateTimeString } from '@/obis/utils/dates'
import { convertCentsToDecimal } from '@/obis/utils/currency'
import { addSpaces } from '@/obis/utils/strings'

export function makeGenerator() {
  return {
    id: 'HSBC',
    folder: 'hsbc-legacy',
    extension: 'csv',
    description: 'CSV Legacy HSBC (à la Recent Transactions)',

    generate: statement => {
      const csv = []

      statement.entries.forEach(entry => {
        // eslint-disable-next-line no-unused-vars
        const { debit, credit, id, date, payee, note, type } = entry
        const transactionAmount = convertCentsToDecimal(debit + credit)

        csv.push(
          '"' +
            csvEscape(UKDateTimeString(date)) +
            '",' +
            '"' +
            csvEscape(addSpaces(payee, 25) + addSpaces(note || '', 25) + type) +
            '",' +
            '"' +
            csvEscape(transactionAmount) +
            '"'
        )
      })

      csv.push('')

      return csv.join('\r\n')
    }
  }
}
