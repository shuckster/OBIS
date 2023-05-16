import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'
import classNames from 'clsx'

export const Dialog = ViewComponent(props => {
  const { children, hidden } = props || {}
  return (
    <div
      className={classNames('dialog', {
        hidden
      })}
    >
      {children}
    </div>
  )
})
