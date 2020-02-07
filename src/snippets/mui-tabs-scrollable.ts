import snip from '../snip'

import { colors } from './mui-app-bar'

export const description = 'Material-UI scrollable <Tabs>'

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
