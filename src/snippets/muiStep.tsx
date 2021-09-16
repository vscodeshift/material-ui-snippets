import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Step>'

export const body = ({
  $,
  Components: { Step, StepLabel },
}: SnippetOptions) => (
  <Step __key={$} completed={$} $ __multiLineChildren>
    <StepLabel>$</StepLabel>
  </Step>
)
