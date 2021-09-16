import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <FormControl> with <RadioGroup>'

export const body = ({
  $,
  Components: { FormControl, FormLabel, RadioGroup, FormHelperText },
}: SnippetOptions) => (
  <FormControl component__raw='${:"fieldset"}' $>
    <FormLabel component__raw='${:"legend"}'>$</FormLabel>
    <RadioGroup aria-label="$" name="$" value={$} onChange={$}>
      $0
    </RadioGroup>
    <FormHelperText>$</FormHelperText>
  </FormControl>
)
