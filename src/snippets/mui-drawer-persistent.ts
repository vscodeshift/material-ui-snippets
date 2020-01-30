import snip from '../snip'

export const description = 'Material-UI persistent <Drawer>'

export const body = snip`
<Drawer
  variant="persistent"
  anchor="\${#:left}"
  open={$#}
  $#
>
  $0
</Drawer>
`
