import snip from '../snip'

export const description = 'Material-UI temporary <Drawer>'

export const body = snip`
<Drawer
  variant="temporary"
  anchor="\${#:left}"
  open={$#}
  onClose={$#} 
  $#
>
  $0
</Drawer>
`
