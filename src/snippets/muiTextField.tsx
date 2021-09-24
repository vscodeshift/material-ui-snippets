import * as React from 'react'
import { SnippetOptions } from './index'

export const colors = ['primary', 'secondary']
export const variants = ['standard', 'outlined', 'filled']
export const margins = ['none', 'dense', 'normal']
export const sizes = ['small', 'medium']

export const description = 'Material-UI <TextField>'

export const body = ({
  formControlMode,
  $,
  Components: { TextField },
}: SnippetOptions): React.ReactElement<any> => (
  <TextField
    id="$"
    label="$"
    {...(formControlMode === 'controlled'
      ? {
          value: $,
          onChange: $,
        }
      : {
          defaultValue: $,
        })}
    __multiLine
    $
  />
)
