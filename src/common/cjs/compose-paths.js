module.exports = {
  composePaths,
  zip
}

// `npm i url-join` for browser
const path = require('path')

//
// MAIN
//

function composePaths(linesOfPaths) {
  const lineDepthInfo = sanitizedLines(linesOfPaths).map(splitByIndentation)

  const minLineDepth = lineDepthInfo.reduce(
    (minDepth, { depth }) => Math.min(minDepth, depth),
    Infinity
  )

  const floorLineDepthInfo = lineDepthInfo.map(({ depth, ...rest }) => {
    return {
      depth: depth - minLineDepth,
      ...rest
    }
  })

  const [props, rawLineInfo] = extractAssignments(floorLineDepthInfo)
  const justPaths = performPathComposition(rawLineInfo)
  const aliases = props.filter(prop => !!prop?.name).map(prop => prop.name)

  const output = props.reduce((paths, prop, index) => {
    if (!prop) {
      return paths
    }
    return Object.defineProperty(paths, prop.name, {
      value: justPaths[index],
      enumerable: false
    })
  }, justPaths)

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

function performPathComposition(lineInfo) {
  const pathStack = []
  const allExpandedPaths = []
  let previousDepth = -1
  let indentationSize = -1

  lineInfo.forEach(({ depth, content }) => {
    if (depth <= previousDepth) {
      let count = 1 + (previousDepth - depth) / indentationSize
      while (count--) {
        pathStack.pop()
      }
    } else if (indentationSize <= 0) {
      indentationSize = depth
    }

    pathStack.push(content)
    allExpandedPaths.push(path.join(pathStack.join('/')))
    previousDepth = depth
  })

  return allExpandedPaths
}

function extractAssignments(lineInfo) {
  const props = []
  const contentArrayWithoutProps = lineInfo.map(line => {
    const { content, ...rest } = line
    const match = content.match(rxPathAssignment)
    if (!match) {
      props.push(undefined)
      return line
    }

    props.push({ name: match[1] })
    return {
      content: content.slice(0, content.length - match[0].length),
      ...rest
    }
  })

  return [props, contentArrayWithoutProps]
}

function splitByIndentation(line) {
  const defaultSplit = [line, '', line]
  const lineSplitByIndentation = line.match(rxLineIndentation) || defaultSplit

  return {
    depth: lineSplitByIndentation[1].length,
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
