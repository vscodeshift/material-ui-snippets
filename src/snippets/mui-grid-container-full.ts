import snip from '../snip'
import {
  directions,
  justifies,
  alignItems,
  alignContents,
  wraps,
} from './mui-grid-container'

export const description = 'Material-UI <Grid container> with all props'

export const body = snip`
<Grid
  container\${#:
  spacing={\${#:1}\\}}\${#:
  direction="\${#${directions}}"}\${#:
  justify="\${#${justifies}}"}\${#:
  alignItems="\${#${alignItems}}"}\${#:
  alignContent="\${#${alignContents}}"}\${#:
  wrap="\${#${wraps}}"}
  $#
>
  $0
</Grid>
`
