/* globals obis */

import { zeroPad } from '@/obis/utils/dates'
import { getCookie } from '@/obis/utils/cookie'

export {
  parseDescriptionIntoPayeeAndNote,
  parseHsbcDateTimeString,
  hsbcBrowserTimeStamp,
  hsbcGetJSCDataTimeStamp,
  hsbcCommonHeaders,
  hsbcCodes
}

//
// HSBC specific helpers
//

function parseDescriptionIntoPayeeAndNote(payeeAndNote) {
  const matches = payeeAndNote.split(/\s{3,}/)
  const [payee, ...notes] = matches.map(x => x.trim().replace(/ +/g, ' '))
  return [payee, notes.join(' ')]
}

function parseHsbcDateTimeString(dateTimeString) {
  const rxDateTime = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/
  const matches = dateTimeString.match(rxDateTime)
  if (!matches) {
    const reason = `dateTimeString does not match expected pattern: ${rxDateTime.toString()}`
    throw new TypeError(reason)
  }

  const [, year, month, day, hours, minutes, seconds] = matches
  return Date.UTC(year, month - 1, day, hours, minutes, seconds)
}

function hsbcBrowserTimeStamp() {
  const now = new Date()
  return (
    now.getMonth() +
    1 +
    '/' +
    now.getDate() +
    '/' +
    now.getFullYear() +
    ' ' +
    now.getHours() +
    ':' +
    zeroPad(now.getMinutes()) +
    ':' +
    zeroPad(now.getSeconds())
  )
}

function hsbcGetJSCDataTimeStamp() {
  const { getJSCDataTimeStamp, HSBCGLBL } = window

  if (typeof getJSCDataTimeStamp === 'function') {
    return getJSCDataTimeStamp()
  }

  if (HSBCGLBL && typeof HSBCGLBL.hsbcglblform === 'function') {
    const JSCData = HSBCGLBL.hsbcglblform()
    return JSCData + ':' + hsbcBrowserTimeStamp()
  }
  return null
}

function hsbcCommonHeaders() {
  const headers = {
    'Content-type': 'application/json',
    'X-HDR-Synchronizer-Token': getCookie('SYNC_TOKEN'),
    'X-HDR-jscData': hsbcGetJSCDataTimeStamp()
  }
  return headers
}

function hsbcCodes(storage = sessionStorage) {
  const { jmespath } = obis.deps
  const { accountselected = '{}' } = storage
  const json = JSON.parse(accountselected)
  const codesPath = `
    {
      ctryCde: entityIdentifier.ctryCde,
      grpMmbr: entityIdentifier.grpMmbr
    }
  `
  const { ctryCde, grpMmbr } = jmespath.search(json, codesPath)
  return {
    ctryCde: ctryCde || 'GB',
    grpMmbr: grpMmbr || 'HBEU'
  }
}
