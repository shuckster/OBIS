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
    (getting-statements -> failed-statements -> found-accounts)
    (getting-entries -> failed-entries -> found-statements)

`

postBookmarkletOps(window.obis)

function postBookmarkletOps(obis) {
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

  //
  // Plugin registering/loading
  //

  const { rootPath } = obis
  const loadQueue = [`${rootPath}/plugins.js`]
  const loadAfterPlugin = [`${rootPath}/ui.css`, `${rootPath}/ui.js`]

  obis.loadPlugin = pluginLoaderFn => {
    obis.plugin = pluginLoaderFn()
    loadQueue.push(...loadAfterPlugin)
  }

  obis.registerPlugins = plugins => {
    const pluginDetected = plugins.find(registerPlugin)

    if (!pluginDetected) {
      console.error('No plugin detected. Nothing to do.')
    }
  }

  function registerPlugin(plugin) {
    const { name, description, urls } = plugin
    const usePlugin = urls.some(url => location.href.includes(url))
    if (usePlugin) {
      console.log('Detected ' + description + ': Adding plugin')
      loadQueue.push(`${rootPath}/plugins/${name}.js`)
      return true
    }
  }

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
