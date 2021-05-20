import snip from '../snip'
import { anchors } from './muiDrawerPermanent'

export const description = 'Material-UI temporary <Drawer>'

export const body = snip`
<Drawer
  variant="temporary"
  anchor="\${#${anchors}}"
  open={$#}
  onClose={$#} 
  $#
>
  $0
</Drawer>
`
