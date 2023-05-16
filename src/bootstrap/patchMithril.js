import { messages } from '@/esm/bus'
import { actions } from '@/obis/actions'

// Mithril.js Fragment <></> support (see build.js for implementation)
messages.on(actions.ui.RENDERING, m => {
  m.Fragment = {
    view: function (vnode) {
      return vnode.children
    }
  }
})
