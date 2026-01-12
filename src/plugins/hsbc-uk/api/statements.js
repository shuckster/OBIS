import jmespath from 'jmespath'

import { buildHeadersFromSiteConfig } from '../helpers'
import { makeStatementsUrl, makeStatementPdfUrl } from '../urls'

//
// Fetch statements list
//

export const fetchStatementsList = ({ host = '', accountId } = {}) =>
  fetch(makeStatementsUrl({ host, accountId }), {
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
    .then(res => res.json())
    .then(json => {
      if (!Array.isArray(json.statements)) {
        console.warn('No statements found in JSON', { accountId, json })
        return []
      }
      const entriesPath = `
        statements[].{
          "id":               statementIdentifier,
          "accountNumber":    accountNumber,
          "endDate":          statementDate
        }
      `
      const entries = jmespath.search(json, entriesPath)
      // NOTE: Does this always return an array?
      return entries
    })

//
// Fetch statement PDF
// Handles both raw PDF data and base64-encoded data URLs
//

export const fetchStatementPdf = async ({ host = '', statementIdentifier, statementDate, accountNumber, cardLastFour } = {}) => {
  const url = makeStatementPdfUrl({ host, statementIdentifier })

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      ...buildHeadersFromSiteConfig(),
      'content-type': 'application/json',
      accept: 'application/json, text/plain, */*',
      adrum: 'isAjax:true',
      token_type: 'SESSION_TOKEN',
      iscacheable: 'true'
    }
  })

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  }

  const arrayBuffer = await response.arrayBuffer()
  const bytes = new Uint8Array(arrayBuffer)
  const firstChars = new TextDecoder().decode(bytes.slice(0, 50))

  // Use cardLastFour if provided, otherwise fall back to last 4 of accountNumber
  const displayNumber = cardLastFour || accountNumber.slice(-4)
  const filename = `CC_Statement_${displayNumber}_${statementDate}.pdf`

  // Raw PDF data (starts with %PDF)
  if (firstChars.startsWith('%PDF')) {
    return { bytes, filename }
  }

  // Base64-encoded data URL
  if (firstChars.startsWith('data:')) {
    const text = new TextDecoder().decode(bytes)
    const base64Match = text.match(/^data:application\/pdf;base64,(.+)$/)
    if (base64Match) {
      const binaryString = atob(base64Match[1])
      const pdfBytes = new Uint8Array(binaryString.length)
      for (let i = 0; i < binaryString.length; i++) {
        pdfBytes[i] = binaryString.charCodeAt(i)
      }
      return { bytes: pdfBytes, filename }
    }
  }

  console.error('[OBIS] Unknown PDF format, first 100 chars:', firstChars.substring(0, 100))
  throw new Error('Unknown PDF response format')
}

//
// Fetch all CC statement PDFs for an account
// Returns: Array of { bytes: Uint8Array, filename: string }
//

const RATE_LIMIT_MS = 5000  // 5 seconds between API requests
const DEBUG_LIMIT = 0       // Set to 0 for no limit, or a number to limit PDFs fetched

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const fetchAllCcStatementPdfs = async ({ host = '', accountId, cardLastFour, onProgress, onPdfReady } = {}) => {
  // First get the list of statements
  const statements = await fetchStatementsList({ host, accountId })
  const limit = DEBUG_LIMIT > 0 ? Math.min(DEBUG_LIMIT, statements.length) : statements.length
  console.log(`[OBIS] Found ${statements.length} CC statements, fetching ${limit}, estimated time: ${Math.ceil(limit * RATE_LIMIT_MS / 60000)} minutes`)

  let successCount = 0

  for (let i = 0; i < limit; i++) {
    const statement = statements[i]
    if (onProgress) {
      onProgress(i + 1, limit)
    }

    try {
      console.log(`[OBIS] Downloading PDF ${i + 1}/${limit}: ${statement.endDate}`)
      const pdf = await fetchStatementPdf({
        host,
        statementIdentifier: statement.id,
        statementDate: statement.endDate,
        accountNumber: statement.accountNumber,
        cardLastFour
      })
      console.log(`[OBIS] Got PDF: ${pdf.filename}, ${pdf.bytes.length} bytes`)

      // Save immediately if callback provided
      if (onPdfReady) {
        onPdfReady(pdf)
      }
      successCount++

      // Rate limit - wait before next request (unless this is the last one)
      if (i < limit - 1) {
        await delay(RATE_LIMIT_MS)
      }
    } catch (err) {
      console.error(`[OBIS] Failed to download PDF for ${statement.endDate}:`, err)
    }
  }

  console.log('[OBIS] Finished fetching', successCount, 'PDFs')
  return successCount
}
