import m from 'mithril'
import { withHooks as ViewComponent, useCallback } from 'mithril-hooks'
import clsx from 'clsx'

export const Years = ViewComponent(props => {
  const { selectedYear, years = [], handleClick } = props || {}

  const clickHandler = useCallback(
    event => handleClick(event?.target?.dataset?.year),
    [handleClick]
  )

  return years.map(year => (
    <div
      onclick={clickHandler}
      key={year}
      data-year={year}
      className={clsx('year', {
        selected: year == selectedYear
      })}
    >
      {year}
    </div>
  ))
})
