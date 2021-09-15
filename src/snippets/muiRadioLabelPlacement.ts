import snip from '../snip'
import { labelPlacements } from './muiFormControl'

export const description =
  'MUI <Radio> with <FormControlLabel> with labelPlacement'

export const body = snip`
<FormControlLabel value="$#" label="$#" labelPlacement="\${#${labelPlacements}}" control={<Radio $0 />} />
`
