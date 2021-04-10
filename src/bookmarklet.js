/* globals obis */
if (!('obis' in window)) {
  // HSBC defines AMD, and it interferes with loading FileSaver
  if ('define' in window) {
    delete window.define
  }

  window.obis = {
    loadScript: function (url, cb) {
      var el = document.createElement('script')
      el.src = url
      el.type = 'text/javascript'
      console.log('Loading: ' + url)
      if (cb instanceof Function) {
        el.onload = () => cb(url, true)
        el.onerror = () => cb(url, false)
      }
      document.head.appendChild(el)
    }
  }

  obis.rootPath =
    process.env.NODE_ENV === 'local'
      ? 'http://localhost:4000'
      : 'https://raw.githubusercontent.com/shuckster/OBIS/master/dist'

  obis.fromBookmarklet = true
  obis.loadScript(obis.rootPath + '/main.js')
}
