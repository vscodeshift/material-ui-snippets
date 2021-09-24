import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Stepper>'

export const body = ({
  $,

  Components: { Stepper },
}: SnippetOptions): React.ReactElement<any> => (
  <Stepper activeStep={$} __oneLineProps>
    $
  </Stepper>
)
