import * as React from 'react'
import { SnippetOptions } from './index'

import { labelPlacements } from './muiFormControl'

export const description =
  'Material-UI <Switch> with <FormControlLabel> with labelPlacement'

export const body = ({
  formControlMode,
  $,
  Components: { FormControlLabel, Switch },
}: SnippetOptions): React.ReactElement<any> => (
  <FormControlLabel
    label="$"
    labelPlacement={$(labelPlacements)}
    control={
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
        __multiLine
        $
      />
    }
  />
)
