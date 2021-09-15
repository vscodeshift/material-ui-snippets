import snip from '../snip'
import { variants, colors, margins, sizes } from './muiTextField'

export const description = 'MUI <TextField> with more props'

export const body = snip`
<TextField
  id="$#"
  label="$#"\${#:
  variant="\${#${variants}}"}\${#:
  color="\${#${colors}}"}\${#:
  margin="\${#${margins}}"}\${#:
  size="\${#${sizes}}"}
  {{#if formControlMode === "controlled"}}
  value={$#}
  onChange={$#}
  {{/if}}
  {{#if formControlMode === "uncontrolled"}}
  defaultValue={$#}
  {{/if}}
  $0
/>
`
