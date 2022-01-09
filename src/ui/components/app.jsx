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
import { useStatebot } from 'statebot-mithril-hooks'
import { match, when, otherwise } from 'match-iz'

import clsx from 'clsx'

import { VerticalAnimationContainer } from './animation'
import {
  Dialog,
  Header,
  Subheader,
  Button,
  Account,
  Accounts,
  StatementsLoaded,
  YearsLoaded,
  AccountName,
  Actions,
  YearsSlider,
  ProgressBar
} from './dialog'

import { Delay, seconds } from '@/cjs/timers'
import { actions } from '@/obis/actions'
import { store } from '@/obis/store'
import { flow, pipe } from '@/cjs/fp'

const SUPPORTS_YEARS_SLIDER = false

const { fetchMachine: fetcher } = obis
const { Statebot, messages } = obis.deps
const { Emit } = fetcher

const MAXIMUM_YEARS_TO_FETCH = 10
const DEFAULT_YEARS_TO_FETCH = 3

const uiMachine = Statebot('UI', {
  events: messages,
  chart: `

    loading ->
    rendering-ui ->
      closed -> opened -> closed

  `,
  startIn: process.env.HYDRATE === 'yes' ? 'opened' : 'loading',
  logLevel: 2
})

uiMachine.performTransitions({
  'loading -> rendering-ui': {
    on: actions.ui.RENDERED,
    then: Delay(Emit(actions.FIRST_RUN), seconds(0.1))
  },
  'rendering-ui -> closed': {
    on: actions.FIRST_RUN
  },
  'closed -> opened -> closed': {
    on: actions.ui.TOGGLE_OPEN
  }
})

//
// Main UI component
//

export const progressBar = {
  max: 0,
  value: 0
}

export const App = ViewComponent(() => {
  const state = useStatebot(uiMachine)
  const ready = !['idle', 'loading'].includes(state)
  const closed = state === 'closed'
  const opened = state === 'opened'

  const [yearsToFetch, setYearsToFetch] = useState(DEFAULT_YEARS_TO_FETCH)

  const handleToggleOpen = useCallback(Emit(actions.ui.TOGGLE_OPEN), [])

  const handleRangeSlider = useCallback(
    flow(
      event => event?.target?.value,
      $ => parseInt($, 10),
      $ => (isNaN($) ? DEFAULT_YEARS_TO_FETCH : $),
      $ => setYearsToFetch($)
    ),
    [setYearsToFetch]
  )

  const handleFetchClick = useCallback(
    Emit(actions.get.ACCOUNTS, yearsToFetch),
    [yearsToFetch]
  )

  const handleViewStatementsClick = useCallback(
    Emit(actions.ui.VIEW_STATEMENTS),
    []
  )

  const handleDownloadAllClick = useCallback(
    Emit(actions.ui.DOWNLOAD_STATEMENTS),
    []
  )

  return (
    <Dialog hidden={!ready}>
      {ready && (
        <Button
          className={clsx('toggle-button', {
            opened: opened,
            closed: closed
          })}
          handleClick={handleToggleOpen}
          disabled={!opened && !closed}
        >
          {'\u21E7'}
        </Button>
      )}

      <Header>{obis.plugin.description}</Header>

      <Subheader>
        {match({ ready, opened })(
          when({ ready: true, opened: true })(
            'Hit the button below to try and download everything automatically.'
          ),
          when({ ready: true, opened: false })(
            'Welcome! Click that button on the right to see if we can download some statements.'
          ),
          otherwise('Loading...')
        )}
        <br />
        <br />
        {fetcher.inState({
          'getting-accounts': 'Finding accounts...',
          'getting-statements': 'Getting statements...',
          'getting-entries': 'Getting transactions...'
        })}
        <ProgressBar {...progressBar} />
      </Subheader>

      {ready && (
        <VerticalAnimationContainer opened={opened}>
          <Accounts>
            {store().accounts.map(account => {
              const allStatementYears = pipe(
                store(),
                $ => $.statements.filter(x => x.accountId === account.id),
                $ => $.map(x => new Date(x.endDate).getFullYear())
              )

              const uniqueStatementYears = pipe(
                allStatementYears,
                $ => new Set($),
                $ => [...$]
              )

              return (
                <Account key={account.id}>
                  <StatementsLoaded>
                    Statements: {allStatementYears.length}
                  </StatementsLoaded>
                  <YearsLoaded>{uniqueStatementYears.join(' ')}</YearsLoaded>
                  <AccountName>
                    {account.sortCode} {account.accountNumber}
                  </AccountName>
                </Account>
              )
            })}
          </Accounts>

          <Actions>
            {match(SUPPORTS_YEARS_SLIDER)(
              when(true)(
                <YearsSlider
                  max={MAXIMUM_YEARS_TO_FETCH}
                  value={yearsToFetch}
                  handleUpdate={handleRangeSlider}
                  disabled={!fetcher.inState('idle')}
                />
              ),
              otherwise(<div>&nbsp;</div>)
            )}

            <Button
              handleClick={handleFetchClick}
              className="fetch-everything"
              disabled={!fetcher.inState('idle')}
            >
              {match(SUPPORTS_YEARS_SLIDER)(
                when(true)(
                  <>
                    Fetch {yearsToFetch} {yearsToFetch == 1 ? 'year' : 'years'}
                  </>
                ),
                otherwise('Fetch statements')
              )}
            </Button>
            <Button
              handleClick={handleViewStatementsClick}
              disabled={!fetcher.inState('found-entries')}
            >
              View statements
            </Button>
            <Button
              handleClick={handleDownloadAllClick}
              disabled={!fetcher.inState('found-entries')}
            >
              Download all
            </Button>
          </Actions>
        </VerticalAnimationContainer>
      )}
    </Dialog>
  )
})
