/*
 * OBIS: Online Banking Is Shit
 * A JavaScript framework for downloading bank statements
 * Copyright (c) 2021 by Conan Theobald https://github.com/shuckster
 * MIT licensed: See LICENSE.md
 *
 * File: main.js: Post-bookmarklet entry-point
 */

import { obis } from './bootstrap/_namespace'
import { extendObisNamespace } from './bootstrap/extendObisNamespace'
import { loadObisInChunks } from './bootstrap/loadObisInChunks'
import { loadObisAsBundle } from './bootstrap/loadObisAsBundle'

import './bootstrap/patchMithril.js'

// Add dependencies, plugin API
extendObisNamespace(obis)

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
