import { messages } from '@/esm/bus'
import { makeRegExpFromWildcardString } from '@/cjs/regexp'
import { actions } from '@/obis/actions'
import { getPluginMeta } from './pluginRegistry'

export function loadObisInChunks(obis) {
  const { rootPath, pluginRegistry } = obis
  const loadQueue = [`${rootPath}/plugins.js`]
  const loadAfterPlugin = [`${rootPath}/ui.css`, `${rootPath}/ui.js`]

  function pluginValidForLocation(plugin) {
    const { urls = [] } = plugin
    const usePlugin = urls.some(url => {
      const rx =
        typeof url === 'string'
          ? makeRegExpFromWildcardString(url)
          : url instanceof RegExp
          ? url
          : null

      return rx?.test(location.href)
    })
    return usePlugin
  }

  messages.on(actions.plugin.ALL_REGISTERED, () => {
    const plugins = Array.from(pluginRegistry.values())
    const pluginDetected = plugins.find(pluginValidForLocation)
    if (!pluginDetected) {
      const reason = 'No plugin valid for current location. Nothing to do.'
      throw new Error(reason)
    }

    loadQueue.push(`${rootPath}/plugins/${pluginDetected.name}.js`)
  })

  messages.on(actions.plugin.AVAILABLE, name => {
    obis.plugin = getPluginMeta(name)
    const { loaderFn } = obis.plugin
    if (typeof loaderFn !== 'function') {
      const reason = `Plugin "${name}" did not provide a valid load-function: ${loaderFn}`
      throw new TypeError(reason)
    }

    loaderFn()
    messages.emit(actions.plugin.LOADED)
  })

  messages.on(actions.plugin.LOADED, () => {
    loadQueue.push(...loadAfterPlugin)
  })

  messages.on(actions.ui.LOADED, () => {
    messages.emit(actions.OBIS_READY)
  })

  //
  // loadScript() defined in bookmarklet. Add one for styles, too
  //
  obis.loadStyle = (url, cb) => {
    const el = document.createElement('link')
    el.href = url
    el.rel = 'stylesheet'
    el.type = 'text/css'
    console.log('Loading: ' + url)
    if (cb instanceof Function) {
      el.onload = () => cb(url, true)
      el.onerror = () => cb(url, false)
    }
    document.getElementsByTagName('head')[0].appendChild(el)
  }

  //
  // Load everything in the queue; plugin -> styles -> ui
  //
  const loadQueuedFiles = () => {
    if (!loadQueue.length) {
      console.log('Done loading scripts')
      return
    }

    const nextFile = loadQueue.shift()

    if (/\.css$/.test(nextFile)) {
      obis.loadStyle(nextFile, (style, success) => {
        if (!success) {
          console.error('Could not load style: ' + style)
        } else {
          loadQueuedFiles()
        }
      })
    } else {
      obis.loadScript(nextFile, (script, success) => {
        if (!success) {
          console.error('Could not load script: ' + script)
        } else {
          loadQueuedFiles()
        }
      })
    }
  }

  loadQueuedFiles()
}
