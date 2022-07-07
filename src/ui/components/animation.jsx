import m from 'mithril'
import { withHooks as ViewComponent, useState, useEffect } from 'mithril-hooks'
import { useStatebotFactory } from 'statebot/hooks/mithril'

import { Delay } from '@/cjs/timers'

export const ContainerWithRef = ViewComponent(props => {
  const { children } = props || {}
  const { setRef = () => {} } = props || {}
  return <div oncreate={vnode => setRef(vnode.dom)}>{children}</div>
})

const event = {
  TOGGLE_OPEN: 'toggle-open',
  OPEN_FINISHED: 'open-finished',
  CLOSE_FINISHED: 'close-finished'
}

const chart = `
  closed -> opening -> opened
  opened -> closing -> closed
`

export const VerticalAnimationContainer = ViewComponent(props => {
  const { children } = props || {}
  const { opened = false, durationInMs = 250 } = props || {}

  const { state, bot } = useStatebotFactory('animated-close/open', {
    chart: chart,
    startIn: opened ? 'opened' : 'closed',
    logLevel: 2,

    performTransitions: ({ Emit }) => ({
      // Open
      'closed -> opening': {
        on: event.TOGGLE_OPEN,
        then: Delay(Emit(event.OPEN_FINISHED), durationInMs)
      },
      'opening -> opened': {
        on: event.OPEN_FINISHED
      },
      // Close
      'opened -> closing': {
        on: event.TOGGLE_OPEN,
        then: Delay(Emit(event.CLOSE_FINISHED), durationInMs)
      },
      'closing -> closed': {
        on: event.CLOSE_FINISHED
      }
    })
  })

  // The user might toggle the open-state again before the
  // animation has finished. We take care of that using the
  // onSwitched() handler in this effect
  const [firstRun, setFirstRun] = useState(true)

  useEffect(() => {
    if (firstRun) {
      setFirstRun(false)
      return
    }

    const expectedState = opened ? 'opened' : 'closed'
    const removeListener = bot.onSwitched(toState => {
      if (['opened', 'closed'].includes(toState) && toState !== expectedState) {
        bot.emit(event.TOGGLE_OPEN)
      }
    })
    bot.emit(event.TOGGLE_OPEN)
    return removeListener
  }, [bot, opened])

  // Get initial container height
  const [containerEl, setContainerEl] = useState(undefined)
  const [containerHeight, setContainerHeight] = useState(undefined)
  useEffect(
    () => void (containerEl && setContainerHeight(containerEl.scrollHeight)),
    [containerEl, children]
  )

  return (
    <div
      className={`vertical-animation-container ${state}`}
      style={`max-height: ${containerHeight}px`}
    >
      <ContainerWithRef setRef={setContainerEl}>{children}</ContainerWithRef>
    </div>
  )
})
