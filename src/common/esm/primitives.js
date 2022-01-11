export const isArray = x => Array.isArray(x)
export const isDate = x => x instanceof Date && !isNaN(x)
export const isNumber = x => typeof x === 'number' && !isNaN(x)
export const isObject = x => typeof x === 'object' && x !== null
export const isString = x => typeof x === 'string'
export const isNullish = x => x == null
export const not = f => x => !f(x)
