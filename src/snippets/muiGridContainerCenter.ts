import snip from '../snip'

import { directions, wraps } from './muiGridContainer'

export const description = 'Material-UI <Grid container> with centering'

export const body = snip`
<Grid
  container
  spacing={\${#:1}}\${#:
  direction="\${#${directions}}"}
  justify="\${#:center}"
  alignItems="\${#:center}"
  alignContent="\${#:center}"\${#:
  wrap="\${#${wraps}}"}
  $#
>
  $0
</Grid>
`
