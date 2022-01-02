const { memo } = require('./fp')

//
// Wildcard helpers
//

const makeRegExpFromWildcardString = memo(str => {
  if (!str.length) {
    throw new Error('String should not be empty')
  }
  const sanitized = str
    .split('*')
    .map(x => x.trim())
    .map(escapeStringForRegExp)

  // Allow matching of wildcards
  const rxString = sanitized.join('(.*)')

  switch (true) {
    // No wildcards? Match string exactly
    case sanitized.length === 1:
      return new RegExp(`^${rxString}$`)

    // No wildcard at the start? Match string-start exactly
    case sanitized[0] !== '':
      return new RegExp(`^${rxString}`)

    // No wildcard at the end? Match string-end exactly
    case sanitized[sanitized.length - 1] !== '':
      return new RegExp(`${rxString}$`)
  }
  return new RegExp(rxString)
})

function escapeStringForRegExp(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Expected string to be passed-in')
  }
  // $& means the whole matched string
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

module.exports = {
  makeRegExpFromWildcardString,
  escapeStringForRegExp
}
