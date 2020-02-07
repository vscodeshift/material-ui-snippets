import snip from '../snip'
import { variants, colors, sizes } from './mui-button'

export const description = 'Material-UI <ButtonGroup> with size'
export const body = snip`
<ButtonGroup variant="\${#${variants}}" color="\${#${colors}}" size="\${#${sizes}}" aria-label="$#"$#>
  <Button>$#</Button>
  <Button>$#</Button>
  $0
</ButtonGroup>
`
