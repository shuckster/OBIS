import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

export const YearsLoaded = ViewComponent(props => {
  const { children } = props || {}
  return <div className="years-loaded">{children}</div>
})
