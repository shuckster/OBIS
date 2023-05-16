import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

export const Account = ViewComponent(props => {
  const { children } = props || {}
  return <div className="account">{children}</div>
})
