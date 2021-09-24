import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Step> with <StepContent>'

export const body = ({
  $,
  Components: { Step, StepLabel, StepContent },
}: SnippetOptions): React.ReactElement<any> => (
  <Step __key={$} completed={$} $ __multiLineChildren>
    <StepLabel>$</StepLabel>
    <StepContent __multiLineChildren>$</StepContent>
  </Step>
)
