/*
NOTE: This generator does not replace personally-identifiable
information with asterisks, as per the standard.

The arranged overdraft limit is also hard-coded to £0.

FIXME: Updated OBIS is able to fetch overdraft info now, so could implement
this, but does anyone use midata?
*/

import { csvEscape } from '@/obis/utils/escape'
import { UKDateTimeString } from '@/obis/utils/dates'
import { convertCentsToDecimal } from '@/obis/utils/currency'
import { SortByNumber } from '@/obis/utils/sorting'

export function makeGenerator() {
  return {
    id: 'MIDATA',
    folder: 'midata',
    extension: 'csv',
    description: 'midata (non-standard, CSV)',

    generate: statement => {
      const initialBalanceInCents = (
        statement.balances || [{ date: 0, balance: 0 }]
      ).sort(SortByNumber('date'))[0].balance

      let runningBalanceInCents = initialBalanceInCents

      const csv = [' Date,Type,Merchant/Description,Debit/Credit,Balance', '']

      statement.entries.forEach(entry => {
        const { debit, credit, date, type, payee, note } = entry

        const transactionAmountInCents = -debit + credit
        runningBalanceInCents += transactionAmountInCents

        csv.push(
          '"' +
            csvEscape(UKDateTimeString(date)) +
            '",' +
            '"' +
            csvEscape(type) +
            '",' +
            '"' +
            csvEscape(payee + (note || '')) +
            '",' +
            '"' +
            csvEscape(convertCentsToDecimal(transactionAmountInCents)) +
            '",' +
            '"' +
            csvEscape(convertCentsToDecimal(runningBalanceInCents)) +
            '"'
        )
      })

      csv.push(
        '',
        'Arranged overdraft limit,' +
          csvEscape(UKDateTimeString(statement.date)) +
          ',£0.00',
        ''
      )

      return csv.join('\r\n')
    }
  }
}
