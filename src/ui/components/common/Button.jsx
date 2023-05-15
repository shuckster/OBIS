import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

export const Button = ViewComponent(props => {
  const { children } = props || {}
  const { className, handleClick, disabled } = props || {}
  return (
    <button className={className} onclick={handleClick} disabled={disabled}>
      {children}
    </button>
  )
})
