const fs = require('fs')
const path = require('path')
const { makePromise } = require('@/cjs/promises')

module.exports = {
  fileOnly,
  loadTextFile
}

function fileOnly(potentialFile) {
  const [promise, resolve, reject] = makePromise()

  fs.stat(potentialFile, (err, stats) => {
    const invalid = err || !stats.isFile()
    return invalid ? reject(err || stats) : resolve(potentialFile)
  })

  return promise
}

function loadTextFile(fileName) {
  if (!fileName) {
    return Promise.reject(new Error('No fileName specified'))
  }

  const [promise, resolve, reject] = makePromise()
  const fullPath = [fileName].flat()

  fs.readFile(path.join(...fullPath), (err, data) =>
    err ? reject(err) : resolve(data.toString())
  )

  return promise
}
