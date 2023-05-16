import { Statebot } from 'statebot'
import SparkMD5 from 'spark-md5'
import jmespath from 'jmespath'
import { zip, strToU8 } from 'fflate'
import { saveAs } from 'file-saver'

import { addAjaxListener, AjaxRequester } from '@/esm/ajacks'
import { messages } from '@/esm/bus'
import { actions } from '@/obis/actions'
import { obisFetchFlow } from '@/flows/fetchAccountsAndStatements'
import { getPluginMeta } from './pluginRegistry'

export function extendObisNamespace(obis) {
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
