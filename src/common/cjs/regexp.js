const { against, when, otherwise, isString } = require('match-iz')
const { pipe, flow, aside, memo } = require('./fp')

const makeRegExpFromWildcardString = memo(str => {
  if (!isString(str) || !str.length) {
    throw new TypeError('Please pass a non-empty string')
  }
  return pipe(
    str
      .replace(rxConsecutiveWildcards(), '*')
      .split('*')
      .map(x => x.trim())
      .map(escapeStringForRegExp),

    aside(x => console.log(`1 aside = "${x}"`)),

    against(
      when(hasNoWildcards)(templateMatchExact),
      when(hasNoWildcardAtStart)(flow(insertWildcards, templateMatchStart)),
      when(hasNoWildcardAtEnd)(flow(insertWildcards, templateMatchEnd)),
      otherwise(insertWildcards)
    ),

    aside(x => console.log(`2 aside = "${x}"`)),

    $ => new RegExp($)
  )
})

//
// Helpers
//

const rxEscape = () => /[.*+?^${}()|[\]\\]/g
const rxConsecutiveWildcards = () => /\*{2,}/g

const hasNoWildcards = x => x.length === 1
const hasNoWildcardAtStart = x => x.at(0) !== ''
const hasNoWildcardAtEnd = x => x.at(-1) !== ''

const insertWildcards = x => x.join('(.*)')
const templateMatchExact = ([x]) => `^${x}$`
const templateMatchStart = x => `^${x}`
const templateMatchEnd = x => `${x}$`

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
function escapeStringForRegExp(str) {
  if (!isString(str)) {
    throw new TypeError('Please pass a string')
  }
  // $& means the whole matched string
  return str.replace(rxEscape(), '\\$&')
}

module.exports = {
  makeRegExpFromWildcardString,
  escapeStringForRegExp
}
