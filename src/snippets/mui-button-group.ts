import snip from '../snip'
import { variants, colors } from './mui-button'

export const description = 'Material-UI <ButtonGroup>'
export const body = snip`
<ButtonGroup variant="\${#${variants}}" color="\${#${colors}}" aria-label="$#"$#>
  <Button>$#</Button>
  <Button>$#</Button>
  $0
</ButtonGroup>
`
