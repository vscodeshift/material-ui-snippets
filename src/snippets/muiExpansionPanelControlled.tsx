import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI controlled <ExpansionPanel>'

export const body = ({
  $,
  Components: {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
  },
  Icons: { ExpandMore },
}: SnippetOptions) => (
  <ExpansionPanel expanded={$} onChange={$}>
    <ExpansionPanelSummary
      expandIcon={<ExpandMore />}
      aria-label={$('Expand')}
      aria-controls="${id}-content"
      id="${id}-header"
    >
      <Typography $>$</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>$</ExpansionPanelDetails>
  </ExpansionPanel>
)
