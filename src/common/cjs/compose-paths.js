module.exports = {
  composePaths,
  zip
}

// `npm i url-join` for browser
const path = require('path')

//
// MAIN
//

function composePaths(dsl) {
  const linesWithIndentMeta = sanitizedLines(dsl).map(splitByIndent)

  const shallowestIndent = linesWithIndentMeta.reduce(
    (min, { indent }) => Math.min(min, indent),
    Infinity
  )
  const clampedIndents = linesWithIndentMeta.map(({ indent, content }) => ({
    indent: indent - shallowestIndent,
    content
  }))

  const fullLinesMeta = composeFullLinesMeta(clampedIndents)
  const output = performPathComposition(fullLinesMeta)

  fullLinesMeta.forEach(({ name, index }) => {
    if (!name) {
      return output
    }

    const fullPath = output[index]
    Object.defineProperty(output, name, {
      value: fullPath,
      enumerable: false
    })
  })

  const aliases = fullLinesMeta
    .filter(prop => !!prop?.name)
    .map(prop => prop.name)

  return Object.defineProperty(output, 'aliases', {
    value: aliases,
    enumerable: false
  })
}

//
// ZIP
//
// (Map one set of composed-paths onto another; see _mock-server/index.js)
//

function zip(keys, values, options) {
  const { aliases = [], ignoreAliases = false } = options || {}
  const useAliases = aliases.length && !ignoreAliases ? aliases : keys.aliases

  return useAliases.reduce((acc, alias) => {
    if (ignoreAliases && aliases.includes(alias)) {
      return acc
    }
    return [...acc, [keys[alias], values[alias]]]
  }, [])
}

//
// HELPERS
//

const rxCRLF = /[\r\n]/
const rxComment = /(\s*\/\/[^\n\r]*)/
const rxLineIndentation = /^( *)([^$]*)/
const rxPathAssignment = /\s*=\s*([^$]+)/
const rxJustWhiteSpace = /^\s*$/

function performPathComposition(fullLinesMeta) {
  const pathStack = []
  const allExpandedPaths = []
  let previousIndent = -1
  let indentationSize = -1

  fullLinesMeta.forEach(({ indent, content }) => {
    if (indent <= previousIndent) {
      let count = 1 + (previousIndent - indent) / indentationSize
      while (count--) {
        pathStack.pop()
      }
    } else if (indentationSize <= 0) {
      indentationSize = indent
    }

    pathStack.push(content)
    allExpandedPaths.push(path.join(pathStack.join('/')))
    previousIndent = indent
  })

  return allExpandedPaths
}

function composeFullLinesMeta(linesIndentMeta) {
  return linesIndentMeta.map((lineMeta, index) => {
    const { content, indent } = lineMeta
    const match = content.match(rxPathAssignment)
    if (!match) {
      return { index, indent, content }
    }

    return {
      index,
      indent,
      content: content.slice(0, content.length - match[0].length),
      name: match[1]
    }
  })
}

function splitByIndent(line) {
  const defaultSplit = [line, '', line]
  const lineSplitByIndentation = line.match(rxLineIndentation) ?? defaultSplit

  return {
    indent: lineSplitByIndentation[1].length,
    content: lineSplitByIndentation[2]
  }
}

function sanitizedLines(strOrArr) {
  return [strOrArr]
    .flat()
    .reduce((acc, line) => [...acc, ...line.split(rxCRLF)], [])
    .filter(notJustWhiteSpace)
    .map(line => line.replace(rxComment, ''))
}

function notJustWhiteSpace(line) {
  return !rxJustWhiteSpace.test(line)
}
