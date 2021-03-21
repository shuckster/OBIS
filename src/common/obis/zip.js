/* globals obis */

import { makePromise } from '@/cjs/promises'
import { getGenerators } from '@/obis/generators'
import { dateTimeString, zeroPad } from '@/obis/utils/dates'
import { compatMakeStatements } from '@/obis/statements'

export { makeZip }

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
