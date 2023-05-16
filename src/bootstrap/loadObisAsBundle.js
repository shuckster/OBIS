import { messages } from '@/esm/bus'
import { actions } from '@/obis/actions'
import { getPluginMeta } from './pluginRegistry'

export function loadObisAsBundle(obis) {
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
