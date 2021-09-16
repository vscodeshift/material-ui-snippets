import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Switch> with <FormControlLabel>'

export const body = ({
  formControlMode,
  $,
  Components: { FormControlLabel, Switch },
}: SnippetOptions) => (
  <FormControlLabel
    label="$"
    control={
      <Switch
        value="$"
        {...(formControlMode === 'controlled'
          ? { checked: $, onChange: $ }
          : { defaultChecked: $ })}
        __multiLine
        $
      />
    }
  />
)
