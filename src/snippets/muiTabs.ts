import snip from '../snip'
import { colors } from './muiAppBar'

export const description = 'MUI <Tabs>'

export const body = snip`
<AppBar position="static" color="\${#${colors}}"$#>
  <Tabs value={$#} onChange={$#} aria-label="$#" $#>
    $0
  </Tabs>
</AppBar>
`
