import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Stepper>'

export const body = ({ $, Components: { Stepper } }: SnippetOptions) => (
  <Stepper activeStep={$} __oneLineProps>
    $
  </Stepper>
)
