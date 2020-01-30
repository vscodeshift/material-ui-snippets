import snip from '../snip'

export const description =
  'Material-UI <Radio> with <FormControlLabel> with labelPlacement'

export const body = snip`
<FormControlLabel value="$#" label="$#" labelPlacement="\${#:start}" control={<Radio $0 />} />
`
