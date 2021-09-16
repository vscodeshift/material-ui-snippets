import * as React from 'react'
import { SnippetOptions } from './index'
import { labelPlacements } from './muiFormControl'

export const description = 'Material-UI <Checkbox> with <FormControlLabel>'

export const body = ({
  formControlMode,
  $,
  Components: { FormControlLabel, Checkbox },
}: SnippetOptions) => (
  <FormControlLabel
    label="$"
    labelPlacement={$(labelPlacements)}
    control={
      <Checkbox
        __multiLine
        value="$"
        {...(formControlMode === 'controlled'
          ? { checked: $, onChange: $ }
          : { defaultChecked: $ })}
        color={$('primary')}
      />
    }
  />
)
