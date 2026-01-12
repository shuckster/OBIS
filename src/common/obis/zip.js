/* globals obis, store */

import { makePromise } from '@/cjs/promises'
import { getGenerators } from '@/obis/generators'
import { dateTimeString, zeroPad } from '@/obis/utils/dates'
import { compatMakeStatements } from '@/obis/statements'

export { makeZip, makePdfZip }

const { fflate, saveAs } = obis.deps

//
// Create Zip and download
//

function makeZip() {
  const { filename, content } = fflateBuildZipContent()
  const [zipPromise, resolve, reject] = makePromise()

  fflate.zip(content, (err, data) => {
    if (err) {
      reject(err)
      return
    }
    resolve(data)
  })

  return zipPromise.then(makeBlob).then(blob => {
    saveAs(blob, filename)
  })
}

//
// Helpers
//

function makeBlob(zipped) {
  const [promise, resolve] = makePromise()
  resolve(new Blob([zipped]))
  return promise
}

function fflateBuildZipContent() {
  const { filename, content } = compatBuildZipContent()
  return {
    filename,
    content: content.reduce((acc, { folder, files }) => {
      return {
        ...acc,
        [folder]: files.reduce((acc, { name, content }) => {
          if (acc[name]) {
            return acc
          }
          return {
            ...acc,
            [name]: fflate.strToU8(content)
          }
        }, {})
      }
    }, {})
  }
}

function compatBuildZipContent() {
  const statements = compatMakeStatements()
  const generators = getGenerators()
  const zipContents = [
    /* { folder: '', files: [ { name: '', content: '' }, ] } */
  ]
  let zipName

  generators.forEach(generator => {
    const { generate, extension, folder } = generator
    const zipContent = {
      folder: folder,
      files: []
    }

    statements.forEach(statement => {
      const filename = filenameFromStatement(statement, extension)
      const content = generate(statement)

      zipContent.files.push({
        name: filename,
        content: content
      })

      if (!zipName) {
        zipName = zipnameFromStatement(statement)
      }
    })

    zipContents.push(zipContent)
  })

  return {
    filename: zipName,
    content: zipContents
  }
}

function filenameFromStatement(statement, extension) {
  const { date, type, sortCode, accountNumber } = statement
  const statementDate = new Date(date)
  return (
    `${type} ${sortCode} ${accountNumber}`.replace(/[^a-zA-Z0-9-]/g, '_') +
    '-' +
    statementDate.getFullYear() +
    '-' +
    zeroPad(statementDate.getMonth() + 1) +
    '-' +
    zeroPad(statementDate.getDate()) +
    '.' +
    extension
  )
}

function zipnameFromStatement(statement) {
  const { date } = statement
  const statementDate = new Date(date)
  return (
    'OBIS-Statements' +
    '-' +
    statementDate.getFullYear() +
    '-' +
    dateTimeString(new Date(), '_') +
    '.zip'
  )
}

//
// Download CC statement PDFs directly (no ZIP)
// Uses obis.fetchAllCcStatementPdfs if registered by a plugin
// Each PDF is saved individually with a small delay between downloads
//

const DOWNLOAD_DELAY_MS = 500  // Delay between saveAs calls to avoid browser blocking

async function makePdfZip() {
  // Check if a PDF fetcher is registered
  if (typeof obis.fetchAllCcStatementPdfs !== 'function') {
    console.error('[OBIS] No PDF fetcher registered - is a supported plugin loaded?')
    return
  }

  // Get CC accounts from store
  const ccAccounts = store().accounts.filter(a => a.isCreditCard)
  if (ccAccounts.length === 0) {
    console.warn('[OBIS] No CC accounts found for PDF download')
    return
  }

  console.log('[OBIS] Found', ccAccounts.length, 'CC accounts for PDF download')

  // Fetch and save PDFs for each CC account
  let totalSaved = 0

  // Callback to save each PDF immediately as it's fetched
  const savePdf = (pdf) => {
    console.log('[OBIS] Saving PDF:', pdf.filename, 'bytes:', pdf.bytes?.length)
    const blob = new Blob([pdf.bytes], { type: 'application/pdf' })
    saveAs(blob, pdf.filename)
    totalSaved++
    console.log(`[OBIS] Saved PDF ${totalSaved}: ${pdf.filename}`)
  }

  for (const cc of ccAccounts) {
    console.log('[OBIS] Fetching PDFs for CC account:', cc.accountNumber)
    try {
      await obis.fetchAllCcStatementPdfs({
        host: '',
        accountId: cc.id,
        cardLastFour: cc.accountNumber,  // This is the last 4 digits of the card
        onPdfReady: savePdf  // Save each PDF immediately
      })
    } catch (err) {
      console.error('[OBIS] Failed to fetch PDFs for CC account:', cc.accountNumber, err)
    }
  }

  console.log('[OBIS] Total PDFs saved:', totalSaved)
}
