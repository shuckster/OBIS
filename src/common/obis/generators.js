import { makeGenerator as csv } from './generators/csv'
import { makeGenerator as hsbc } from './generators/hsbc-csv'
import { makeGenerator as json } from './generators/json'
import { makeGenerator as midata } from './generators/midata'
import { makeGenerator as ofx } from './generators/ofx'
import { makeGenerator as qif } from './generators/qif'

import { dateTimeString } from '@/obis/utils/dates'
import { convertCentsToDecimal } from '@/obis/utils/currency'
import { md5 } from '@/esm/md5'

export { generateIdForTransaction, getGenerators }

function getGenerators() {
  return [csv(), hsbc(), json(), midata(), ofx(), qif()]
}

//
// I tried to make transaction-ids compatible with ancient OBIS,
// but probably failed
//

function generateIdForTransaction(fullEntry) {
  const {
    date,
    debit,
    credit,
    index,
    accountNumber,
    sortCode,
    type,
    payee,
    note
  } = fullEntry

  const dateTime = dateTimeString(date) || 'UNKNOWN_DATE'
  const transactionAmount = convertCentsToDecimal(debit + credit)

  return (
    dateTime +
    '_' +
    md5(
      dateTime +
        (undefined !== index ? index : '') +
        (accountNumber || '') +
        (sortCode || '') +
        (type || '') +
        (payee || '') +
        (note || '') +
        transactionAmount
    )
  )
}
