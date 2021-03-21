//
// Intercept/repeat XHR requests
//

//
// MONITOR
//

export const addAjaxListener = (function () {
  attachAjaxEventRepeater()

  function onRx(eventName, options) {
    const { rx, cb } = options
    if (typeof cb !== 'function') {
      throw TypeError('Callback is not a function')
    }

    window.addEventListener(eventName, event => {
      const options = event.detail
      const url = options.url
      let runCallback = true

      if (rx instanceof RegExp) {
        runCallback = rx.test(url)
      } else if (typeof rx === 'string') {
        runCallback = -1 !== rx.indexOf(url)
      }

      if (runCallback) {
        cb(options)
      }
    })
  }

  return function (options) {
    const {
      name,
      description,
      rx,
      onBeforeOpen,
      onBeforeSend,
      onFullResponse
    } = options || {}

    console.info(`AjaxListener[${name}]: ${description}`)

    if (typeof onBeforeOpen === 'function') {
      onRx('ajax:onBeforeOpen', { rx, cb: onBeforeOpen })
    }

    if (typeof onBeforeSend === 'function') {
      onRx('ajax:onBeforeSend', { rx, cb: onBeforeSend })
    }

    if (typeof onFullResponse === 'function') {
      onRx('ajax:onFullResponse', { rx, cb: onFullResponse })
    }
  }
})()

//
// REQUEST
//

export function AjaxRequester(options) {
  const { name, description, method, url, setHeaders, setPayload } = options

  const _method = (method || 'get').toUpperCase()

  const _formatPayload = (...args) => {
    let data
    if (typeof setPayload === 'function') {
      data = setPayload(...args)
    } else {
      data = setPayload
    }
    return data ? data : ''
  }

  const _setHeaders = (...args) => {
    let headers
    if (typeof setHeaders === 'function') {
      headers = setHeaders(...args)
    } else {
      headers = setHeaders
    }
    return headers ? headers : {}
  }

  const requesterFn = (...args) => {
    console.info(`AjaxRequester[${name}]: ${description}`)
    const headers = _setHeaders(...args)
    const xhr = new XMLHttpRequest()

    xhr.open(_method, url)
    Object.keys(headers).forEach(header => {
      const value = headers[header]
      if (header && value) {
        xhr.setRequestHeader(header, value)
      }
    })
    xhr.send(_formatPayload(...args))
  }

  return requesterFn
}

//
// INTERCEPT
//

// Props to:
// https://dmitripavlutin.com/catch-the-xmlhttp-request-in-plain-javascript/

function attachAjaxEventRepeater() {
  function emit(eventName, options) {
    const event = new CustomEvent(eventName, { detail: options })
    window.dispatchEvent(event)
  }

  const open = window.XMLHttpRequest.prototype.open
  const send = window.XMLHttpRequest.prototype.send

  function openReplacement(method, url, async = true, user, password) {
    this._options = { method, url, async, user, password, xhr: this }

    emit('ajax:onBeforeOpen', this._options)
    return open.apply(this, arguments)
  }

  function sendReplacement(data) {
    this._options.data = data
    if (this.onreadystatechange) {
      this._onreadystatechange = this.onreadystatechange
    }
    this.onreadystatechange = onReadyStateChangeReplacement

    emit('ajax:onBeforeSend', this._options)
    return send.apply(this, arguments)
  }

  function onReadyStateChangeReplacement() {
    if (this.readyState === 4) {
      this._options.status = this.status
      this._options.responseText = this.responseText
      emit('ajax:onFullResponse', this._options)
    }

    if (this._onreadystatechange) {
      return this._onreadystatechange.apply(this, arguments)
    }
  }

  window.XMLHttpRequest.prototype.open = openReplacement
  window.XMLHttpRequest.prototype.send = sendReplacement

  console.log('attachAjaxEventRepeater')
}
