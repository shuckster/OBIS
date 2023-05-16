import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'

export const ShowHelpOnError = ViewComponent(() => {
  return (
    <span style="font-weight: bold; color: red;">
      Sorry, something went wrong. Please try again, or report a problem on the{' '}
      <a
        href="https://github.com/shuckster/OBIS/issues"
        target="_blank"
        rel="noopener noreferrer"
      >
        OBIS Github repo
      </a>
    </span>
  )
})
