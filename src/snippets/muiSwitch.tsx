import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Switch>'

export const body = ({
  formControlMode,
  $,
  Components: { Switch },
}: SnippetOptions): React.ReactElement<any> => (
  <Switch
    value="$"
    {...(formControlMode === 'controlled'
      ? {
          checked: $,
          onChange: $,
        }
      : {
          defaultChecked: $,
        })}
    inputProps={{
      'aria-label': '$',
    }}
    $
  />
)
