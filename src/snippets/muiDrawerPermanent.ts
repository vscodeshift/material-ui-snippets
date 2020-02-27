import snip from '../snip'

export const anchors = ['left', 'right', 'top', 'bottom']

export const description = 'Material-UI permanent <Drawer>'

export const body = snip`
<Drawer
  variant="permanent"
  anchor="\${#${anchors}}"
  $#
>
  $0
</Drawer>
`
