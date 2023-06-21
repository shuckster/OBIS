/* globals obis */

//
// OBIS UI
//

import m from 'mithril'
import {
  withHooks as ViewComponent,
  useState,
  useCallback
} from 'mithril-hooks'
import { useStatebot } from 'statebot/hooks/mithril'

import { Delay, seconds } from '@/cjs/timers'
import { actions } from '@/obis/actions'
import { uiWidgetStates } from '@/flows/uiWidgetStates'
import { DEFAULT_YEARS_TO_FETCH } from './constants'

// Components
import { Header } from './obis-overlay-widget/atoms/Header'
import { ObisOverlayWidget } from './obis-overlay-widget/_ObisOverlayWidget'
import { YearsAndActionButtons } from './obis-overlay-widget/YearsAndActionButtons'
import { ListOfAccountCards } from './obis-overlay-widget/ListOfAccountCards'
import { HelpAndProgressBar } from './obis-overlay-widget/HelpAndProgressBar'

const { fetchMachine: fetcher } = obis
const { Statebot, messages } = obis.deps
const { Emit } = fetcher

const uiMachine = Statebot('UI', {
  events: messages,
  chart: uiWidgetStates,
  startIn: process.env.HYDRATE === 'yes' ? 'opened' : 'loading',
  logLevel: 2
})

uiMachine.performTransitions({
  'loading -> rendering_ui': {
    on: actions.ui.RENDERED,
    then: Delay(Emit(actions.FIRST_RUN), seconds(0.1))
  },
  'rendering_ui -> closed': {
    on: actions.FIRST_RUN
  },
  'closed -> opened -> closed': {
    on: actions.ui.TOGGLE_OPEN
  }
})

//
// Main UI component
//

const handleToggleOpen = Emit(actions.ui.TOGGLE_OPEN)
const handleViewStatementsClick = Emit(actions.ui.VIEW_STATEMENTS)
const handleDownloadAllClick = Emit(actions.ui.DOWNLOAD_STATEMENTS)

export const App = ViewComponent(() => {
  const state = useStatebot(uiMachine)
  const ready = !['idle', 'loading'].includes(state)
  const opened = state === 'opened'

  const [yearsToFetch, setYearsToFetch] = useState(DEFAULT_YEARS_TO_FETCH)
  const handleFetchClick = useCallback(
    Emit(actions.get.ACCOUNTS, yearsToFetch),
    [yearsToFetch]
  )

  return (
    <ObisOverlayWidget
      ready={ready}
      opened={opened}
      onToggle={handleToggleOpen}
      alwaysVisibleSlot={
        <>
          <Header>{obis.plugin.description}</Header>
          <HelpAndProgressBar ready={ready} opened={opened} />
        </>
      }
      toggledSlot={
        <>
          {ready && (
            <>
              <ListOfAccountCards />
              <YearsAndActionButtons
                onYearsChanged={setYearsToFetch}
                onFetch={handleFetchClick}
                onViewStatements={handleViewStatementsClick}
                onDownloadAll={handleDownloadAllClick}
              />
            </>
          )}
        </>
      }
    />
  )
})
