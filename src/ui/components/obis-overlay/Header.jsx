import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

export const Header = ViewComponent(props => {
  const { children } = props || {}
  return <h1>OBIS | {children}</h1>
})
