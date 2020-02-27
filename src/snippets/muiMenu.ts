import snip from '../snip'

export const description = 'Material-UI <Menu>'

export const body = snip`
<Menu
  id="$1"
  anchorEl={$2}
  keepMounted
  open={Boolean($2)}
  onClose={$3}
  $4
>
  $0
</Menu>
`
