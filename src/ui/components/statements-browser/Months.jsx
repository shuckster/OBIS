import m from 'mithril'
import { withHooks as ViewComponent, useCallback } from 'mithril-hooks'
import clsx from 'clsx'

export const Months = ViewComponent(props => {
  const _months = 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec'.split('|')
  const { selectedMonth, months = [], handleClick } = props || {}

  const clickHandler = useCallback(
    event => handleClick(event?.target?.dataset?.month),
    [handleClick]
  )

  return _months.map((month, index) => (
    <div
      onclick={clickHandler}
      key={month}
      data-month={index}
      className={clsx('month', {
        selected: index === selectedMonth,
        'no-entries': !months.includes(index)
      })}
    >
      {month}
    </div>
  ))
})
