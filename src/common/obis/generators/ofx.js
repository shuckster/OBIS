import { ofxEscape } from '@/obis/utils/escape'
import { dateTimeString } from '@/obis/utils/dates'
import { convertCentsToDecimal } from '@/obis/utils/currency'

// FIXME: Can this be retrieved from HSBC?
const HSBC_OFX = {
  INTU_BID: '01267',
  LANGUAGE: 'ENG',
  CURDEF: 'GBP'
}

export function makeGenerator() {
  return {
    id: 'OFX',
    folder: 'ofx',
    extension: 'ofx',
    description: 'OFX 1.0.2 (Money, Quicken)',

    generate: statement => {
      let ofx
      const latestBalanceIndex = statement.balances.length - 1

      // TODO: Move into hsbc.js somehow
      function filterTransactionType(type) {
        switch (type) {
          case 'ATM':
            break
          case 'TFR':
            type = 'XFER'
            break

          default:
            type = 'OTHER'
        }

        return type
      }

      ofx =
        'OFXHEADER:100' +
        '\n' +
        'DATA:OFXSGML' +
        '\n' +
        'VERSION:102' +
        '\n' +
        'SECURITY:NONE' +
        '\n' +
        'ENCODING:USASCII' +
        '\n' +
        'CHARSET:1252' +
        '\n' +
        'COMPRESSION:NONE' +
        '\n' +
        'OLDFILEUID:NONE' +
        '\n' +
        'NEWFILEUID:NONE' +
        '\n' +
        '\n' +
        '<OFX>' +
        '\n' +
        '\n' +
        '\t' +
        '<SIGNONMSGSRSV1>' +
        '\n' +
        '\t\t' +
        '<SONRS>' +
        '\n' +
        '\t\t\t' +
        '<STATUS>' +
        '\n' +
        '\t\t\t\t' +
        '<CODE>0</CODE>' +
        '\n' +
        '\t\t\t\t' +
        '<SEVERITY>INFO</SEVERITY>' +
        '\n' +
        '\t\t\t' +
        '</STATUS>' +
        '\n' +
        '\t\t\t' +
        '<DTSERVER>' +
        ofxEscape(dateTimeString(new Date())) +
        '</DTSERVER>' +
        '\n' +
        '\t\t\t' +
        '<LANGUAGE>' +
        ofxEscape(HSBC_OFX.LANGUAGE) +
        '</LANGUAGE>' +
        '\n' +
        '\t\t\t' +
        '<INTU.BID>' +
        ofxEscape(HSBC_OFX.INTU_BID) +
        '</INTU.BID>' +
        '\n' +
        '\t\t' +
        '</SONRS>' +
        '\n' +
        '\t' +
        '</SIGNONMSGSRSV1>' +
        '\n' +
        '\n' +
        '\t' +
        '<BANKMSGSRSV1>' +
        '\n' +
        '\n' +
        '\t\t' +
        '<STMTTRNRS>' +
        '\n' +
        '\n' +
        '\t\t\t' +
        '<TRNUID>1</TRNUID>' +
        '\n' +
        '\n' +
        '\t\t\t' +
        '<STATUS>' +
        '\n' +
        '\t\t\t\t' +
        '<CODE>0</CODE>' +
        '\n' +
        '\t\t\t\t' +
        '<SEVERITY>INFO</SEVERITY>' +
        '\n' +
        '\t\t\t' +
        '</STATUS>' +
        '\n' +
        '\n' +
        '\t\t\t' +
        '<STMTRS>' +
        '\n' +
        '\n' +
        '\t\t\t\t' +
        '<CURDEF>' +
        ofxEscape(HSBC_OFX.CURDEF) +
        '</CURDEF>' +
        '\n' +
        '\n' +
        '\t\t\t\t' +
        '<BANKACCTFROM>' +
        '\n' +
        '\t\t\t\t\t' +
        '<BANKID>' +
        ofxEscape(statement.sortCode) +
        '</BANKID>' +
        '\n' +
        '\t\t\t\t\t' +
        '<ACCTID>' +
        ofxEscape(statement.sortCode + statement.accountNumber) +
        '</ACCTID>' +
        '\n' +
        '\t\t\t\t\t' +
        '<ACCTTYPE>CHECKING</ACCTTYPE>' +
        '\n' +
        '\t\t\t\t' +
        '</BANKACCTFROM>' +
        '\n' +
        '\n' +
        '\t\t\t\t' +
        '<BANKTRANLIST>' +
        '\n' +
        '\n' +
        '\t\t\t\t\t' +
        '<DTSTART>' +
        ofxEscape(dateTimeString(statement.balances[0].date)) +
        '</DTSTART>' +
        '\n' +
        '\t\t\t\t\t' +
        '<DTEND>' +
        ofxEscape(dateTimeString(statement.balances[latestBalanceIndex].date)) +
        '</DTEND>' +
        '\n' +
        '\n'

      statement.entries.forEach(entry => {
        const { debit, credit, type, date, id, payee, note } = entry
        const transactionAmount = convertCentsToDecimal(debit + credit)

        ofx +=
          '\t\t\t\t\t' +
          '<STMTTRN>' +
          '\n' +
          '\t\t\t\t\t\t' +
          '<TRNTYPE>' +
          ofxEscape(filterTransactionType(type)) +
          '</TRNTYPE>' +
          '\n' +
          '\t\t\t\t\t\t' +
          '<DTPOSTED>' +
          ofxEscape(dateTimeString(date)) +
          '</DTPOSTED>' +
          '\n' +
          '\t\t\t\t\t\t' +
          '<TRNAMT>' +
          ofxEscape(transactionAmount) +
          '</TRNAMT>' +
          '\n' +
          '\t\t\t\t\t\t' +
          '<FITID>' +
          ofxEscape(id) +
          '</FITID>' +
          '\n' +
          '\t\t\t\t\t\t' +
          '<NAME>' +
          ofxEscape(payee) +
          '</NAME>' +
          '\n' +
          (note
            ? '\t\t\t\t\t\t' + '<MEMO>' + ofxEscape(note) + '</MEMO>' + '\n'
            : '') +
          '\t\t\t\t\t' +
          '</STMTTRN>' +
          '\n' +
          '\n'
      })

      const balanceCarriedForward =
        statement.balances[latestBalanceIndex].balance

      ofx +=
        '\t\t\t\t' +
        '</BANKTRANLIST>' +
        '\n' +
        '\n' +
        '\t\t\t\t' +
        '<LEDGERBAL>' +
        '\n' +
        '\t\t\t\t\t' +
        '<BALAMT>' +
        ofxEscape(convertCentsToDecimal(balanceCarriedForward)) +
        '</BALAMT>' +
        '\n' +
        '\t\t\t\t\t' +
        '<DTASOF>' +
        ofxEscape(dateTimeString(statement.balances[latestBalanceIndex].date)) +
        '</DTASOF>' +
        '\n' +
        '\t\t\t\t' +
        '</LEDGERBAL>' +
        '\n' +
        '\n' +
        '\t\t\t' +
        '</STMTRS>' +
        '\n' +
        '\t\t' +
        '</STMTTRNRS>' +
        '\n' +
        '\t' +
        '</BANKMSGSRSV1>' +
        '\n' +
        '\n' +
        '</OFX>' +
        '\n'

      return ofx
    }
  }
}
