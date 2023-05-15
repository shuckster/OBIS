import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

export const ProgressBar = ViewComponent(props => {
  const { value, max } = props || {}
  return <progress value={value} max={max}></progress>
})
