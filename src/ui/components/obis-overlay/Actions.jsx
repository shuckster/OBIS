import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

export const Actions = ViewComponent(props => {
  const { children } = props || {}
  return <div className="actions">{children}</div>
})
