/* globals obis */

import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'
import { match, when, otherwise } from 'match-iz'

// Components
import { ProgressBar } from '../common/ProgressBar'
import { Subheader } from '../common/Subheader'
import { ShowHelpOnError } from '../common/ShowHelpOnError'

import { progressBar } from '../../store/progressBar'
const { fetchMachine: fetcher } = obis

export const HelpAndProgressBar = ViewComponent(props => {
  const { ready, opened } = props || {}
  return (
    <Subheader>
      {match({ ready, opened })(
        when({ ready: true, opened: true })(
          'Hit the "Fetch" button below to try and download everything automatically.'
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
        'getting-entries': 'Getting transactions... (takes a moment to finish)',
        idle: () =>
          match(fetcher.history().some(state => /^failed-/.test(state)))(
            when(true)(<ShowHelpOnError />),
            otherwise('')
          )
      })}
      <ProgressBar {...progressBar} />
    </Subheader>
  )
})
