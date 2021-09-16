import * as React from 'react'
import { SnippetOptions } from './index'
import { variants, colors, margins, sizes } from './muiTextField'

export const description = 'Material-UI <TextField> with more props'

export const body = ({
  formControlMode,
  $,
  Components: { TextField },
}: SnippetOptions) => (
  <TextField
    id="$"
    label="$"
    variant__optional={$(variants)}
    color__optional={$(colors)}
    margin__optional={$(margins)}
    sizes__optional={$(sizes)}
    {...(formControlMode === 'controlled'
      ? { value: $, onChange: $ }
      : { defaultValue: $ })}
    $
  />
)
