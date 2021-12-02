// The spread/rest "..." permit the first function
// in compose & flow to accept more than 1 argument.
// All other functions in the chain must be unary

function compose(...fns) {
  return (...x) => fns.reduceRight((g, f) => [f(...g)], x)[0]
}

function flow(...fns) {
  return (...x) => fns.reduce((g, f) => [f(...g)], x)[0]
}

function pipe(x, ...fns) {
  return fns.reduce((g, f) => f(g), x)
}

function flip(fn) {
  // prettier-ignore
  return (...x) => (...y) => fn(...y)(...x)
}

function do_(f) {
  return f()
}

function memo(fn) {
  const table = new Map()
  return x => (table.has(x) ? table.get(x) : table.set(x, fn(x)).get(x))
}

function cache(fn) {
  const cache = new Map()
  return x =>
    cache.has(x)
      ? cache.get(x)
      : cache.set(x, fn(x, invalidater(cache, x))).get(x)
}

const invalidater = (cache, x) => () => cache.delete(x)

/**
 * For debugging pipe/compose
 * @example
 * pipe(value,
 *   fn1,
 *   fn2,
 *   aside(console.log),
 *   fn3
 * )
 * */

function aside(fn) {
  return x => (fn(x), x)
}

module.exports = {
  compose,
  pipe,
  flow,
  flip,
  do_,
  memo,
  cache,
  aside
}
