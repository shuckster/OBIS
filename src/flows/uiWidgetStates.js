import { mermaid } from 'statebot'

/**
 * Flow for the main OBIS widget
 */

export const uiWidgetStates = mermaid(`
::: mermaid

stateDiagram-v2
  loading --> rendering_ui
  rendering_ui --> closed
  closed --> opened
  opened --> closed

:::
`)
