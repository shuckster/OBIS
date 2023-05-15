import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

export const Subheader = ViewComponent(props => {
  const { children } = props || {}
  return <h2>{children}</h2>
})
