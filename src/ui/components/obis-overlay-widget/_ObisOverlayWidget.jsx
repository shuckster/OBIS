import m from 'mithril'
import { withHooks as ViewComponent } from 'mithril-hooks'
import clsx from 'clsx'

// Components
import { VerticalAnimationContainer } from '../common/VerticalAnimationContainer'
import { Button } from '../common/Button'
import { Dialog } from '../common/Dialog'

export const ObisOverlayWidget = ViewComponent(props => {
  const {
    ready = true,
    opened = false,
    alwaysVisibleSlot = null,
    toggledSlot = null,
    onToggle: handleToggle = () => {}
  } = props || {}

  const closed = !opened

  return (
    <Dialog hidden={!ready}>
      {ready && (
        <Button
          className={clsx('toggle-button', { opened, closed })}
          onClick={handleToggle}
          disabled={!ready}
        >
          {'\u21E7'}
        </Button>
      )}

      {alwaysVisibleSlot}
      <VerticalAnimationContainer opened={opened}>
        {toggledSlot}
      </VerticalAnimationContainer>
    </Dialog>
  )
})
