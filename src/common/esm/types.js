//
// RUNTIME TYPE CHECKING
//

export {
  isArray,
  isArguments,
  isEventEmitter,
  isFunction,
  isPojo,
  isString,
  isTemplateLiteral,
  isNumber,
  isThisValue,
  isUnset,
  ArgTypeError,
  ObjTypeError
}

//
// isType
//

function isEventEmitter(obj) {
  return (
    isObject(obj) &&
    isFunction(obj.emit) &&
    (isFunction(obj.addListener) || isFunction(obj.on)) &&
    (isFunction(obj.removeListener) || isFunction(obj.off))
  )
}

isEventEmitter.displayName = 'isEventEmitter'

function isUnset(obj) {
  return obj === null || obj === undefined
}

isArray.displayName = 'isUnset'

function isArray(obj) {
  return Array.isArray(obj)
}

isArray.displayName = 'isArray'

function isArguments(obj) {
  const isObject = typeof obj === 'object'
  if (!isObject || obj === null) {
    return false
  }
  const hasMap = typeof obj.map === 'function'
  const hasLength = typeof obj.length === 'number'
  const hasObjectPrototype = obj.__proto__ === Object.prototype
  return hasObjectPrototype && isObject && hasLength && !hasMap
}

isArguments.displayName = 'isArguments'

function isFunction(obj) {
  return typeof obj === 'function'
}

isFunction.displayName = 'isFunction'

function isString(obj) {
  return typeof obj === 'string'
}

isString.displayName = 'isString'

function isNumber(obj) {
  return typeof obj === 'number'
}

isNumber.displayName = 'isNumber'

function isObject(obj) {
  return typeof obj === 'object'
}

isObject.displayName = 'isObject'

function isPojo(obj) {
  if (obj === null || !isObject(obj)) {
    return false
  }
  return Object.getPrototypeOf(obj) === Object.prototype
}

isPojo.displayName = 'isPojo'

function isTemplateLiteral(obj) {
  if (isString(obj)) {
    return true
  }
  if (!isArray(obj)) {
    return false
  }
  return obj.every(isString)
}

isTemplateLiteral.displayName = 'isTemplateLiteral'

function isThisValue(value) {
  function inObject(obj) {
    return obj === value
  }
  inObject.displayName = `isThisValue(${value})`
  return inObject
}

//
// ArgTypeError
//

const typeErrorStringIfFnReturnsFalse = (argName, argTypeFn, arg) => {
  return argTypeFn(arg)
    ? undefined
    : (argTypeFn.displayName || argTypeFn.name) +
        `(${argName}) did not return true`
}

const typeErrorStringIfTypeOfFails = (argName, argType, arg) => {
  return typeof arg === argType
    ? undefined
    : `Argument "${argName}" should be a ${argType}`
}

const typeErrorStringFromArgument = (argMap, arg, index) => {
  const { argName, argType } = argMap[index]
  if (arg === undefined) {
    return `Argument undefined: "${argName}"`
  }

  const permittedArgTypes = Array.isArray(argType) ? argType : [argType]

  const errorDescs = permittedArgTypes
    .map(argType =>
      isFunction(argType)
        ? typeErrorStringIfFnReturnsFalse(argName, argType, arg)
        : typeErrorStringIfTypeOfFails(argName, argType, arg)
    )
    .filter(isString)

  const multipleTypesSpecified = permittedArgTypes.length > 1
  const shouldError = multipleTypesSpecified
    ? errorDescs.length > 1
    : errorDescs.length

  if (shouldError) {
    return (
      errorDescs.join('\n| ') +
      `\n> typeof ${argName} === ${typeof arg}(${JSON.stringify(arg)})`
    )
  }
}

/**
 * Helper for enforcing correct argument-types.
 *
 * @private
 * @param {string} errPrefix
 *
 * @example
 * const argTypeError = ArgTypeError('namespace#')
 *
 * function myFn (myArg1, myArg2) {
 *   const err = argTypeError('myFn',
 *     { myArg1: isString, myArg2: Boolean },
 *     myArg1, myArg2
 *   )
 *   if (err) {
 *     throw new TypeError(err)
 *   }
 * }
 */

function ArgTypeError(errPrefix) {
  return (fnName, typeMap, ...args) => {
    const argMap = Object.entries(typeMap).map(([argName, argType]) => ({
      argName,
      argType
    }))

    const err = args
      .map((...args) => typeErrorStringFromArgument(argMap, ...args))
      .filter(isString)

    if (!err.length) {
      return
    }

    const signature = Object.keys(typeMap).join(', ')
    return (
      `\n${errPrefix || ''}${fnName}(${signature}):\n` +
      `${err.map(err => `| ${err}`).join('\n')}`
    )
  }
}

function ObjTypeError(errPrefix) {
  const objTypeError = ArgTypeError(errPrefix)
  return (fnName, typeMap, obj) => {
    const keys = Object.keys(typeMap)
    const values = valuesOf(obj, { keys })
    const err = objTypeError(fnName, typeMap, ...values)
    return err
  }
}

function valuesOf(obj, options) {
  const { keys } = options
  if (!Array.isArray(keys)) {
    return Object.values(obj)
  }
  return keys.reduce((acc, key) => {
    return [...acc, obj[key]]
  }, [])
}
