import * as React from 'react'
import { SnippetOptions } from './index'

import { labelPlacements } from './muiFormControl'

export const description =
  'Material-UI <Radio> with <FormControlLabel> with labelPlacement'

export const body = ({
  $,
  Components: { FormControlLabel, Radio },
}: SnippetOptions) => (
  <FormControlLabel
    value="$"
    label="$"
    labelPlacement={$(labelPlacements)}
    control={<Radio $ />}
  />
)
