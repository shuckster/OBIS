import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

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
