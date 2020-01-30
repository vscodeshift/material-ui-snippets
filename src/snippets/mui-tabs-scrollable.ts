import snip from '../snip'

export const description = 'Material-UI scrollable <Tabs>'

export const body = snip`
<AppBar position="static" color="\${#:primary}">
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
