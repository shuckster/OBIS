/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2021 by Conan Theobald https://github.com/shuckster
 * MIT licensed: See LICENSE.md
 *
 * File: main.js: Post-bookmarklet entry-point
 */

import SparkMD5 from 'spark-md5'
import jmespath from 'jmespath'
import { zip, strToU8 } from 'fflate'
import { saveAs } from 'file-saver'
import { Statebot } from 'statebot'

import { messages } from '@/esm/bus'
import { addAjaxListener, AjaxRequester } from '@/esm/ajacks'
import { makeRegExpFromWildcardString } from '@/cjs/regexp'
import { actions } from '@/obis/actions'

// Mithril.js Fragment <></> support (see build.js for implementation)
messages.on(actions.ui.RENDERING, m => {
  m.Fragment = {
    view: function (vnode) {
      return vnode.children
    }
  }
})

const obisFetchFlow = `

  // Happy path
  //
    [idle] -> getting-accounts ->
    [found-accounts] -> getting-statements ->
    [found-statements] -> getting-entries ->
    [found-entries]

  // Downloading Zip
  //
    found-entries -> [download-all] -> found-entries

  // Failures
  //
    (getting-accounts -> failed-accounts -> idle)
    (getting-statements -> failed-statements -> idle)
    (getting-entries -> failed-entries -> idle)

`

// obisDefault used for (potential) Chrome/Web Extension
const obisDefault = { rootPath: '.' }
const obis = window.obis || (window.obis = obisDefault)

// Plugin registry
obis.pluginRegistry = new Map()
const getPluginMeta = name =>
  obis.pluginRegistry.has(name)
    ? obis.pluginRegistry.get(name)
    : obis.pluginRegistry.set(name, {}).get(name)

// Add dependencies, plugin API
addObisDependencies(obis)

// Guard against OBIS loading again in the statements-browser for Extension
if (document.title !== 'OBIS :: Statements Browser') {
  main()
}

function main() {
  if (obis.fromBookmarklet) {
    loadObisInChunks(obis)
  } else {
    loadObisAsBundle(obis)
  }
}

function addObisDependencies(obis) {
  //
  // Dependencies that plugins have access to without import'ing them
  //

  obis.deps = {
    addAjaxListener,
    AjaxRequester,
    fflate: { zip, strToU8 },
    jmespath,
    messages,
    saveAs,
    SparkMD5,
    Statebot
  }

  obis.fetchMachine = Statebot('fetcher', {
    events: messages,
    startIn: process.env.HYDRATE === 'yes' ? 'found-entries' : 'idle',
    chart: obisFetchFlow,
    logLevel: 2
  })

  obis.makePluginAvailable = (name, pluginLoaderFn) => {
    console.log(`Registering plugin loader: ${name}`)
    const meta = getPluginMeta(name)
    meta.name = name
    meta.loaderFn = pluginLoaderFn
    messages.emit(actions.plugin.AVAILABLE, name)
  }

  obis.registerPlugins = plugins => {
    plugins.map(plugin => {
      const meta = getPluginMeta(plugin.name)
      meta.name = plugin.name
      meta.description = plugin.description
      meta.urls = plugin.urls
    })

    messages.emit(actions.plugin.ALL_REGISTERED)
  }
}

function loadObisAsBundle(obis) {
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

  let waitingOn = 2

  function checkReady() {
    waitingOn -= 1
    if (waitingOn === 0) {
      messages.emit(actions.OBIS_READY)
    }
  }

  messages.on(actions.ui.LOADED, checkReady)
  messages.on(actions.plugin.LOADED, checkReady)
}

function loadObisInChunks(obis) {
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
