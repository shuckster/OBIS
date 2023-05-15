import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

export const Accounts = ViewComponent(props => {
  const { children } = props || {}
  return <div className="accounts">{children}</div>
})
