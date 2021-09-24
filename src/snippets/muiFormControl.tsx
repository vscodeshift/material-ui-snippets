import * as React from 'react'
import { SnippetOptions } from './index'

export const labelPlacements = ['end', 'start', 'top', 'bottom']

export const description = 'Material-UI <FormControl>'

export const body = ({
  Components: { FormControl, FormLabel, FormHelperText },
}: SnippetOptions): React.ReactElement<any> => (
  <FormControl $>
    <FormLabel>$</FormLabel>$0<FormHelperText>$</FormHelperText>
  </FormControl>
)
