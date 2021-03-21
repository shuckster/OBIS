/* globals obis */

import m from 'mithril'
import './styles/app.scss'

import { seconds } from '@/cjs/timers'
import { delay } from '@/cjs/promises'
import { actions } from '@/obis/actions'
import { store } from '@/obis/store'
import { makeZip } from '@/obis/zip'

import { App, progressBar } from './components/app'
import {
  StatementsPicker,
  createStatementsWindow
} from './components/statements'

const { fetchMachine: fetcher } = obis
const { messages } = obis.deps
const { on, emit } = messages
const { Emit } = fetcher

// Expose for debugging
window.store = store
window.actions = actions
window.messages = messages

//
// Statements-browsing, downloading
//

function viewStatements() {
  const windowRef = createStatementsWindow()
  m.mount(windowRef.document.body, StatementsPicker)

  const offClose = on(actions.ui.CLOSE_STATEMENTS_WINDOW, () => {
    offClose()
    windowRef.close()
  })
}

on(actions.ui.VIEW_STATEMENTS, viewStatements)
on(actions.ui.DOWNLOAD_STATEMENTS, () => {
  makeZip()
    .finally(() => delay(seconds(3)))
    .finally(Emit(actions.ui.DOWNLOADED_STATEMENTS))
})

//
// Entry-point
//

function main() {
  emit(actions.ui.RENDERING, m)

  // Mount

  const rootEl =
    document.querySelector('#obis-root') ||
    document.body.appendChild(
      withProps(document.createElement('div'), { id: 'obis-root' })
    )

  m.mount(rootEl, App)

  // Redraw

  const rafRedraw = () => requestAnimationFrame(() => m.redraw())
  fetcher.onSwitched(rafRedraw)
  on(actions.STORE_UPDATED, rafRedraw)
  on(actions.ui.UPDATE_PROGRESS_BAR, metrics => {
    const newMax = metrics.max
    const newValue = metrics.value
    progressBar.max = newMax
    progressBar.value = newValue
    rafRedraw()
  })

  delay().then(Emit(actions.ui.RENDERED))
}

//
// Completely unnecessary helper, but here it is
//

function withProps(obj, props) {
  return Object.entries(props).reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, obj)
}

main()
