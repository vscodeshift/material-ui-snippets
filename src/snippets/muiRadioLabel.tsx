import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Radio> with <FormControlLabel>'

export const body = ({
  Components: { FormControlLabel, Radio },
}: SnippetOptions): React.ReactElement<any> => (
  <FormControlLabel value="$" label="$" control={<Radio $ />} />
)
