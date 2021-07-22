module.exports = {
  isThennable,
  makePromise,
  delay,
  unzip,
  makeIdleDetectorWithTimeout,
  poolPromises,
  runPromisesInSequence
}

const { seconds, runOnce, makeDebouncer } = require('./timers')

function makeUnzipReducer() {
  return [
    (acc, [first, second]) => [
      [...acc[0], first],
      [...acc[1], second]
    ],
    [[], []]
  ]
}

function unzip(arr) {
  // Does the opposite of zip()
  // http://api.prototypejs.org/language/Enumerable/prototype/zip/
  return arr.reduce(...makeUnzipReducer())
}

//
// Promises
//

function isThennable(obj) {
  return obj && typeof obj.then === 'function'
}

function makePromise() {
  let _resolve
  let _reject
  const promise = new Promise((resolve, reject) => {
    _resolve = resolve
    _reject = reject
  })
  return [promise, _resolve, _reject]
}

function delay(ms) {
  const [promise, resolve] = makePromise()
  setTimeout(resolve, ms || 0)
  return promise
}

function makeIdleDetectorWithTimeout(
  initBouncer = () => {},
  { withinMs = 500, timeoutInMs = seconds(5) }
) {
  const [promise, resolve, reject] = makePromise()
  const [resolveSoon, dontResolve] = makeDebouncer(resolve, withinMs)
  const [rejectLater, dontReject] = makeDebouncer(reject, timeoutInMs)
  const cleanup = initBouncer(resolveSoon)

  resolveSoon()
  rejectLater()

  return promise.finally(() => {
    cleanup && cleanup()
    dontResolve()
    dontReject()
  })
}

//
// Pool-specific stuff
//

function poolPromises(limit, ...promiseMakerFns) {
  const checkAll = () => canPromisesRun.forEach(check => check())
  const context = makePoolCounter(limit, checkAll)

  const [pooledPromises, canPromisesRun] = promiseMakerFns
    .map(fn => makePoolAwarePromise(context, fn))
    .reduce(...makeUnzipReducer())

  checkAll()

  return Promise.allSettled(pooledPromises)
}

function makePoolAwarePromise(context, promiseMakerFn) {
  const { allowedToStartNext, bumpRunCount, unbump } = context
  const [promise, resolve, reject] = makePromise()

  const startPromise = () => {
    bumpRunCount()
    promiseMakerFn().then(resolve, reject).finally(unbump)
  }
  return [promise, runOnce(startPromise).when(allowedToStartNext)]
}

function makePoolCounter(limit, onChange) {
  let running = 0

  return {
    allowedToStartNext: () => running < Math.max(1, limit),
    bumpRunCount: () => onChange(++running),
    unbump: () => onChange(--running)
  }
}

//
// Sequential
//

function runPromisesInSequence(initialState, ...promiseMakerFns) {
  const [promise, resolve, reject] = makePromise()

  promiseMakerFns
    .reduce(PromiseSequenceReducer(reject), Promise.resolve(initialState))
    .then(resolve)
    .catch(reject)

  return promise
}

function PromiseSequenceReducer(reject) {
  return (lastPromise, createNextPromise) => {
    return lastPromise.then(createNextPromise, reject)
  }
}
