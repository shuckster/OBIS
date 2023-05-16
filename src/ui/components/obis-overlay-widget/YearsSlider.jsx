import m from 'mithril'
import { withHooks as ViewComponent, useCallback } from 'mithril-hooks'

import { flow } from '@/cjs/fp'

export const YearsSlider = ViewComponent(props => {
  const {
    value,
    maxYears = 15,
    defaultYears = 7,
    onUpdate,
    disabled
  } = props || {}

  const handleUpdate = useCallback(
    flow(
      event => event?.target?.value,
      $ => parseInt($, 10),
      $ => (isNaN($) ? defaultYears : $),
      $ => onUpdate($)
    ),
    [onUpdate, defaultYears]
  )

  return (
    <input
      className="fetch-slider"
      type="range"
      min="1"
      max={maxYears}
      oninput={handleUpdate}
      onchange={handleUpdate}
      value={value}
      disabled={disabled}
    ></input>
  )
})
