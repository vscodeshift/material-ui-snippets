import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Slider> with discrete values'

export const body = ({
  formControlMode,
  $,
  Components: { Slider },
}: SnippetOptions) => (
  <Slider
    {...(formControlMode === 'controlled'
      ? { value: $, onChange: $ }
      : { defaultValue: $ })}
    aria-labelledby="$"
    step={$(1)}
    marks
    min={$(0)}
    max={$(100)}
    $
  />
)
