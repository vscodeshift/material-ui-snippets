import snip from '../snip'
import { variants, colors } from './muiButton'

export const description = 'Material-UI vertical <ButtonGroup>'
export const body = snip`
<ButtonGroup orientation="vertical" variant="\${#${variants}}" color="\${#${colors}}" aria-label="$#"$#>
  <Button>$#</Button>
  <Button>$#</Button>
  $0
</ButtonGroup>
`
