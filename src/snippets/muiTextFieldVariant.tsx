import * as React from 'react'
import { SnippetOptions } from './index'
import { variants } from './muiTextField'

export const description = 'Material-UI <TextField> with variant'

export const body = ({
  formControlMode,
  $,
  Components: { TextField },
}: SnippetOptions) => (
  <TextField
    id="$"
    label="$"
    variant={$(variants)}
    {...(formControlMode === 'controlled'
      ? { value: $, onChange: $ }
      : { defaultValue: $ })}
    $
  />
)
