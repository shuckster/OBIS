import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

export const StatementsLoaded = ViewComponent(props => {
  const { children } = props || {}
  return <div className="statements-loaded">{children}</div>
})
