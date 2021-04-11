//
// Browser message-bus using CustomEvent()
//

import { makeRegExpFromWildcardString } from '@/cjs/regexp'

// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#polyfill
// eslint-disable-next-line no-extra-semi
;(function () {
  if (typeof window.CustomEvent === 'function') return false

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: null }
    const evt = document.createEvent('CustomEvent')
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
    return evt
  }

  window.CustomEvent = CustomEvent
})()

const messages = (function () {
  let global
  try {
    global = window
  } catch (e) {
    global = self
  }

  const BUS = 'message-bus'
  const eventMap = new Map()

  function emit(eventName, ...args) {
    const detail = { eventName, args, timestamp: Date.now() }
    const event = new CustomEvent(BUS, { detail })
    global.dispatchEvent(event)
  }

  //
  // ON
  //

  function on(eventNameOrPattern, cb) {
    if (typeof cb !== 'function') {
      throw new TypeError('Callback is not a function')
    }

    const cbMap = eventMap.has(eventNameOrPattern)
      ? eventMap.get(eventNameOrPattern)
      : eventMap.set(eventNameOrPattern, new Map()).get(eventNameOrPattern)

    if (cbMap.has(cb)) {
      throw new Error('Callback already deals with this event')
    }

    const isPlainMatcher =
      typeof eventNameOrPattern === 'string' &&
      eventNameOrPattern.indexOf('*') === -1

    const rx =
      typeof eventNameOrPattern === 'string'
        ? makeRegExpFromWildcardString(eventNameOrPattern)
        : eventNameOrPattern instanceof RegExp
        ? eventNameOrPattern
        : null

    if (rx === null) {
      const reason = `Could not figure-out eventNameOrPattern`
      throw new Error(`${reason} = ${eventNameOrPattern}`)
    }

    const eventHandler = event => {
      const { eventName = '', args = [] } = event?.detail || {}
      const runCallback = rx.test(eventName)

      if (runCallback) {
        if (isPlainMatcher) {
          cb(...args)
        } else {
          cb(eventName, ...args)
        }
      }
    }

    cbMap.set(cb, eventHandler)
    global.addEventListener(BUS, eventHandler)
    return () => off(eventNameOrPattern, cb)
  }

  //
  // OFF
  //

  function off(eventNameOrPattern, cb) {
    if (typeof cb !== 'function') {
      throw new TypeError('Callback is not a function')
    }

    if (!eventMap.has(eventNameOrPattern)) {
      throw new Error('No event-listener for that name/pattern')
    }

    const cbMap = eventMap.get(eventNameOrPattern)
    if (!cbMap.has(cb)) {
      throw new Error('Event callback not found for name/pattern')
    }

    const eventHandler = cbMap.get(cb)
    global.removeEventListener(BUS, eventHandler)
    cbMap.delete(cb)
  }

  return {
    emit,
    on,
    off
  }
})()

export { messages }
