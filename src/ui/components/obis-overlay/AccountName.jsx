import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

export const AccountName = ViewComponent(props => {
  const { children } = props || {}
  return <h3 className="account-name">{children}</h3>
})
