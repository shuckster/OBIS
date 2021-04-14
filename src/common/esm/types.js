//
// RUNTIME TYPE CHECKING
//

export {
  isArray,
  isArguments,
  isBoolean,
  isEventEmitter,
  isFunction,
  isPojo,
  isString,
  isTemplateLiteral,
  isNumber,
  isThisValue,
  isNull,
  isUnset,
  ArgTypeError,
  ObjTypeError
}

//
// isType
//

// isEventEmitter
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

// isUnset
//
function isUnset(obj) {
  return obj === null || obj === undefined
}

isArray.displayName = 'isUnset'

// isArray
//
function isArray(obj) {
  return Array.isArray(obj)
}

isArray.displayName = 'isArray'

// isArguments
//
function isArguments(obj) {
  return Object.prototype.toString.call(obj) === '[object Arguments]'
}

isArguments.displayName = 'isArguments'

// isBoolean
//
function isBoolean(obj) {
  return obj === true || obj === false
}

isBoolean.displayName = 'isBoolean'

// isFunction
//
function isFunction(obj) {
  return typeof obj === 'function'
}

isFunction.displayName = 'isFunction'

// isString
//
function isString(obj) {
  return typeof obj === 'string'
}

isString.displayName = 'isString'

// isNull
//
function isNull(obj) {
  return obj === null
}

isNull.displayName = 'isNull'

// isNumber
//
function isNumber(obj) {
  return typeof obj === 'number'
}

isNumber.displayName = 'isNumber'

// isObject
//
function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

isObject.displayName = 'isObject'

// isPojo
//
function isPojo(obj) {
  if (obj === null || !isObject(obj) || isArguments(obj)) {
    return false
  }
  return Object.getPrototypeOf(obj) === Object.prototype
}

isPojo.displayName = 'isPojo'

// isTemplateLiteral
//
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

// isThisValue
//
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

const typeErrorStringFromArgument = argMap => (arg, index) => {
  if (index >= argMap.length) {
    return
  }

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
 * @param {string} namespace
 *
 * @example
 * const argTypeError = ArgTypeError('namespace#')
 *
 * function myFn (myArg1, myArg2) {
 *   const err = argTypeError({
 *     myArg1: isString,
 *     myArg2: isBoolean
 *   })('myFn')(myArg1, myArg2)
 *   if (err) {
 *     throw new TypeError(err)
 *   }
 * }
 */

function ArgTypeError(namespace) {
  return typeMap => {
    const argMap = Object.entries(typeMap).map(([argName, argType]) => ({
      argName,
      argType
    }))

    return fnName => (...args) => {
      const processedArgs = Array.from(args, x =>
        isArguments(x) ? Array.from(x) : x
      ).flat(1)

      const err = processedArgs
        .map(typeErrorStringFromArgument(argMap))
        .filter(isString)

      if (!err.length) {
        return
      }

      const signature = Object.keys(typeMap).join(', ')
      return (
        `\n${namespace || ''}${fnName}(${signature}):\n` +
        `${err.map(err => `| ${err}`).join('\n')}`
      )
    }
  }
}

function ObjTypeError(namespace) {
  return typeMap => {
    const keys = Object.keys(typeMap)
    const objTypeError = ArgTypeError(namespace)(typeMap)
    return fnName => obj => {
      const values = valuesOf(obj, { keys })
      const err = objTypeError(fnName)(...values)
      return err
    }
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
