import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <FormControl> with <FormGroup>'

export const body = ({
  Components: { FormControl, FormLabel, FormGroup, FormHelperText },
}: SnippetOptions): React.ReactElement<any> => (
  <FormControl component__raw='${:"fieldset"}' $>
    <FormLabel component__raw='${:"legend"}'>$</FormLabel>
    <FormGroup __multiLineChildren>$0</FormGroup>
    <FormHelperText>$</FormHelperText>
  </FormControl>
)
