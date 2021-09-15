import snip from '../snip'

import { colors } from './muiAppBar'

export const description = 'MUI scrollable <Tabs>'

export const body = snip`
<AppBar position="static" color="\${#${colors}}"$#>
  <Tabs
    value={$#}
    onChange={$#}
    aria-label="$#"
    variant="scrollable"
    scrollButtons="\${#:auto}"
    $#
  >
    $0
  </Tabs>
</AppBar>
`
