import { obis } from './_namespace'

// Plugin registry
obis.pluginRegistry = new Map()

export const getPluginMeta = name =>
  obis.pluginRegistry.has(name)
    ? obis.pluginRegistry.get(name)
    : obis.pluginRegistry.set(name, {}).get(name)
