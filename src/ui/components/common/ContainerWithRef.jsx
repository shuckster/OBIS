import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

export const ContainerWithRef = ViewComponent(props => {
  const { children } = props || {}
  const { setRef = () => {} } = props || {}
  return <div oncreate={vnode => setRef(vnode.dom)}>{children}</div>
})



