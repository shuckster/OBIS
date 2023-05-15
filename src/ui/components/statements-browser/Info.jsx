import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

export const Info = ViewComponent(props => {
  const { children = [] } = props || {}
  return children
})
