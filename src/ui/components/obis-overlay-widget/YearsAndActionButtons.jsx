/* globals obis */

import m from 'mithril'
import {
  withHooks as ViewComponent,
  useState,
  useCallback
} from 'mithril-hooks'
import { match, when, otherwise } from 'match-iz'

// Components
import { Button } from '../common/Button'
import { Actions } from './atoms/Actions'
import { YearsSlider } from './YearsSlider'

import {
  SUPPORTS_YEARS_SLIDER,
  MAXIMUM_YEARS_TO_FETCH,
  DEFAULT_YEARS_TO_FETCH
} from '../constants'

const { fetchMachine: fetcher } = obis

export const YearsAndActionButtons = ViewComponent(props => {
  const {
    onYearsChanged,
    onFetch: handleFetchClick,
    onViewStatements: handleViewStatementsClick,
    onDownloadAll: handleDownloadAllClick
  } = props || {}

  const [yearsToFetch, setYearsToFetch] = useState(DEFAULT_YEARS_TO_FETCH)
  const handleYearsChanged = useCallback(
    years => {
      setYearsToFetch(years)
      onYearsChanged(years)
    },
    [onYearsChanged]
  )

  return (
    <Actions>
      {match(SUPPORTS_YEARS_SLIDER)(
        when(true)(
          <YearsSlider
            maxYears={MAXIMUM_YEARS_TO_FETCH}
            defaultYears={DEFAULT_YEARS_TO_FETCH}
            value={yearsToFetch}
            onUpdate={handleYearsChanged}
            disabled={!fetcher.inState('idle')}
          />
        ),
        otherwise(<div>&nbsp;</div>)
      )}

      <Button
        onClick={handleFetchClick}
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
        onClick={handleViewStatementsClick}
        disabled={!fetcher.inState('found_entries')}
      >
        View statements
      </Button>
      <Button
        onClick={handleDownloadAllClick}
        disabled={!fetcher.inState('found_entries')}
      >
        Download all
      </Button>
    </Actions>
  )
})
