module.exports = {
  seconds,
  makeDebouncer,
  makeThrottler,
  runAfter,
  runOnce,
  runFnPeriodically,
  makeValueChangeDetector,
  makeValueInPredicateDetector,
  runFnWhenValueChanges,
  Delay
}

function seconds(n) {
  const ms = n * 1000
  return ms
}

//
// setTimeout
//

function Delay(fn, forMs) {
  const [_fn] = makeDebouncer(forMs, fn)
  return (...args) => _fn(...args)
}

function makeDebouncer(ms, fn) {
  let timerId
  const cancel = () => clearTimeout(timerId)
  const debouncedFn = (...args) => {
    cancel()
    timerId = setTimeout(fn, ms, ...args)
  }
  return [debouncedFn, cancel]
}

function makeThrottler(fn, ms) {
  let canRun = true
  const [reset, clear] = makeDebouncer(ms, () => (canRun = true))
  const throttledFn = (...args) => {
    if (canRun) {
      canRun = false
      reset()
      fn(...args)
    }
  }
  return [throttledFn, clear]
}

function runAfter(delayInMs, fn) {
  const [runSoon, cancel] = makeDebouncer(delayInMs, fn)
  runSoon()
  return cancel
}

function runOnce(fn) {
  let run = true
  let predicateFn = () => true
  const onceFn = (...args) => {
    if (run && predicateFn()) {
      run = false
      fn(...args)
    }
  }
  onceFn.when = fn => {
    predicateFn = fn
    return onceFn
  }
  return onceFn
}

function runFnPeriodically(fn, ms = 16) {
  const cleanup = () => clearInterval(timerId)
  const timerId = setInterval(fn, ms, { cleanup })
  return cleanup
}

//
// Values
//

function makeValueChangeDetector({
  onChange = () => {},
  getValueFn = () => NaN,
  equalityFn = (a, b) => a === b
}) {
  let currentValue = getValueFn()

  const performCheck = (...checkArgs) => {
    const newValue = getValueFn()

    if (!equalityFn(newValue, currentValue)) {
      const oldValue = currentValue
      currentValue = newValue
      onChange(newValue, oldValue, ...checkArgs)
    }
  }

  return performCheck
}

function makeValueInPredicateDetector({
  onChange = () => {},
  getValueFn = () => NaN,
  predicateFn = () => true
}) {
  const performCheck = makeValueChangeDetector({
    getValueFn,
    onChange: newValue => predicateFn(newValue) && onChange()
  })

  return performCheck
}

function runFnWhenValueChanges({ fn, getValueFn }) {
  const performCheck = makeValueChangeDetector({ getValueFn, onChange: fn })
  const checkPeriodInMs = 16
  const cleanup = runFnPeriodically(performCheck, checkPeriodInMs)
  return cleanup
}
