import snip from '../snip'
import { anchors } from './muiDrawerPermanent'

export const description = 'MUI persistent <Drawer>'

export const body = snip`
<Drawer
  variant="persistent"
  anchor="\${#${anchors}}"
  open={$#}
  $#
>
  $0
</Drawer>
`
