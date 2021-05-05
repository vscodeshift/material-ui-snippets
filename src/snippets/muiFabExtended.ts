import snip from '../snip'
import { colors } from './muiButton'

export const description = 'Material-UI <Fab variant="extended">'

export const body = snip`
<Fab variant="extended" color="\${#${colors}}"$#>
  <Box marginRight={1}>
    <$#Icon />
  </Box>
  $0
</Fab>
`
