import snip from '../snip'
import { variants, colors } from './muiButton'

export const description = 'MUI <ButtonGroup>'
export const body = snip`
<ButtonGroup variant="\${#${variants}}" color="\${#${colors}}" aria-label="$#"$#>
  <Button>$#</Button>
  <Button>$#</Button>
  $0
</ButtonGroup>
`
