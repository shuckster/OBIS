//
// A minimal Maybe monad.
//
// Maybe's (or "Options") are a way of making compact sequences of
// transformations while avoiding runaway error handling. This is
// especially useful for adding guards to existing-code without
// needing to "break it up" into imperative steps.
//
// Think of it like Promise then/catch, but for synchronous code.
//

import { not, isNullish } from './primitives'

export const Identity = x => x

/**
 * Nothing monad. One half of {@link Maybe}.
 * @returns {Nothing} A Nothing.
 * @example
 * const nothing = Nothing('lost forever')
 * nothing.valueOf()
 * // undefined
 *
 * nothing
 *   .map(x => `Contents: ${x}`)
 *   .valueOf()
 * // undefined
 *
 * nothing
 *   .orElse(() => 'fallback')
 *   .map(x => `Contents: ${x}`)
 *   .valueOf()
 * // "Contents: fallback"
 */
export const Nothing = () => ({
  valueOf: () => undefined,
  toString: () => 'Nothing',
  map: () => Nothing(),
  chain: () => Nothing(),
  // eslint-disable-next-line no-unused-vars
  fold: (f, _) => f(),
  orElse: f => Just(f()),
  ap: m => m.map(() => Nothing()),
  isNothing: true,
  isJust: false
})

Nothing.of = () => Nothing()

/**
 * Just monad. One half of {@link Maybe}.
 * @returns {Just} A Just.
 * @example
 * const just = Just(42)
 * just.valueOf()
 * // 42
 *
 * just
 *   .map(x => `Contents: ${x}`)
 *   .map(console.log)
 * // "Contents: 42"
 *
 * just
 *   .orElse(() => 'fallback')
 *   .map(x => `Contents: ${x}`)
 *   .valueOf()
 * // "Contents: 42"
 */
export const Just = x => ({
  valueOf: () => x,
  toString: () => `Just(${x})`,
  map: f => Just(f(x)),
  chain: f => f(x),
  fold: (_, g) => g(x),
  orElse: () => Just(x),
  ap: m => m.map(x),
  isNothing: false,
  isJust: true
})

Just.of = x => Just(x)

/**
 * Maybe factory. Make Maybe's that infer {@link Just}/{@link Nothing}
 * from a predicate.
 *
 * @param {function} predicate
 * @returns {Maybe}  A Maybe that uses the given predicate
 * to determine if construction will produce a Just or a Nothing.
 *
 * @example
 * const MaybeNumber = safe(x => !Number.isNaN(x))
 *
 * const result = MaybeNumber('not a number')
 *   .fold(
 *     () => 0,
 *     (x) => x + 1
 *   )
 *
 * result === 0 // true
 *
 */
export const safe = (predicate = not(isNullish)) => {
  const Maybe = x => {
    return predicate(x) ? Just(x) : Nothing()
  }
  Maybe.of = x => Maybe(x)
  return Maybe
}

/**
 * Return a {@link Maybe} that will be {@link Nothing} if the provided
 * function throws. If it doesn't throw, a {@link Just} of the result
 * will be returned.
 *
 * @example
 * maybeTry(msg => { throw msg; })('fit')
 *   .map(() => 'that did not throw')
 *   .orElse(() => 'that threw')
 *   .valueOf()
 * // "that threw"
 */
export const maybeTry = f => x => {
  try {
    return Just(f(x))
  } catch (e) {
    return Nothing()
  }
}

/**
 * Standard Maybe monad.
 *
 * @function
 * @returns {Maybe} Returns {@link Just} if the passed-in (lifted)
 * value is not nullish, otherwise will return {@link Nothing}
 * @example
 * const nothing = Maybe(undefined)
 * const just = Maybe(42)
 *
 * nothing.valueOf()
 * // undefined
 *
 * nothing
 *   .orElse(() => 'fallback')
 *   .map(x => `Contents: ${x}`)
 *   .valueOf()
 * // "Contents: fallback"
 *
 * just.valueOf()
 * // 42
 *
 * just
 *   .orElse(() => 'fallback')
 *   .map(x => `Contents: ${x}`)
 *   .valueOf()
 * // "Contents: 42"
 *
 */
export const Maybe = safe()
