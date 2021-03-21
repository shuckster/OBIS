import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'
import classNames from 'clsx'

export const Dialog = ViewComponent(props => {
  const { children, hidden } = props || {}
  return (
    <div
      className={classNames('dialog', {
        hidden
      })}
    >
      {children}
    </div>
  )
})

export const Header = ViewComponent(props => {
  const { children } = props || {}
  return <h1>OBIS | {children}</h1>
})

export const Subheader = ViewComponent(props => {
  const { children } = props || {}
  return <h2>{children}</h2>
})

export const Button = ViewComponent(props => {
  const { children } = props || {}
  const { className, handleClick, disabled } = props || {}
  return (
    <button className={className} onclick={handleClick} disabled={disabled}>
      {children}
    </button>
  )
})

export const YearsSlider = ViewComponent(props => {
  const { value, max = 15, handleUpdate, disabled } = props || {}
  return (
    <input
      className="fetch-slider"
      type="range"
      min="1"
      max={max}
      oninput={handleUpdate}
      onchange={handleUpdate}
      value={value}
      disabled={disabled}
    ></input>
  )
})

export const ProgressBar = ViewComponent(props => {
  const { value, max } = props || {}
  return <progress value={value} max={max}></progress>
})

export const Account = ViewComponent(props => {
  const { children } = props || {}
  return <div className="account">{children}</div>
})

export const Accounts = ViewComponent(props => {
  const { children } = props || {}
  return <div className="accounts">{children}</div>
})

export const StatementsLoaded = ViewComponent(props => {
  const { children } = props || {}
  return <div className="statements-loaded">{children}</div>
})

export const YearsLoaded = ViewComponent(props => {
  const { children } = props || {}
  return <div className="years-loaded">{children}</div>
})

export const AccountName = ViewComponent(props => {
  const { children } = props || {}
  return <h3 className="account-name">{children}</h3>
})

export const Actions = ViewComponent(props => {
  const { children } = props || {}
  return <div className="actions">{children}</div>
})
