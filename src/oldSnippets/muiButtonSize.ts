import snip from '../snip'
import { variants, colors, sizes } from './muiButton'

export const description = 'Material-UI <Button> with size'
export const body = snip`
<Button variant="\${#${variants}}" color="\${#${colors}}" size="\${#${sizes}}"$#>
  $0
</Button>
`
