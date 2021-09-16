import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI optional <Step>'

export const body = ({
  $,
  Components: { Step, StepLabel, Typography },
}: SnippetOptions) => (
  <Step __key={$} completed={$} $>
    <StepLabel
      optional={<Typography variant="caption">{$('Optional')}</Typography>}
    >
      $
    </StepLabel>
  </Step>
)
