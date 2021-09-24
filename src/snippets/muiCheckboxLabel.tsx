import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Checkbox> with <FormControlLabel>'

export const body = ({
  formControlMode,
  $,
  Components: { FormControlLabel, Checkbox },
}: SnippetOptions): React.ReactElement<any> => (
  <FormControlLabel
    label="$"
    control={
      <Checkbox
        __multiLine
        value="$"
        {...(formControlMode === 'controlled'
          ? {
              checked: $,
              onChange: $,
            }
          : {
              defaultChecked: $,
            })}
        color={$('primary')}
      />
    }
  />
)
