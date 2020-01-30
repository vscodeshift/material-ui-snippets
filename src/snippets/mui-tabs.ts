import snip from '../snip'

export const description = 'Material-UI <Tabs>'

export const body = snip`
<AppBar position="static" color="\${#:primary}">
  <Tabs value={$#} onChange={$#} aria-label="$#" $#>
    $0
  </Tabs>
</AppBar>
`
