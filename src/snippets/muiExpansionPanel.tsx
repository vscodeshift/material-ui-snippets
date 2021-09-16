import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <ExpansionPanel>'

export const body = ({
  $,
  Components: {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
  },
  Icons: { ExpandMoreIcon },
}: SnippetOptions) => (
  <ExpansionPanel>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-label={$('Expand')}
      aria-controls="${id}-content"
      id="${id}-header"
    >
      <Typography $>$</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>$</ExpansionPanelDetails>
  </ExpansionPanel>
)
