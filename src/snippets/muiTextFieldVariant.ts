import snip from '../snip'
import { variants } from './muiTextField'

export const description = 'Material-UI <TextField> with variant'

export const body = snip`
<TextField
  id="$#"
  label="$#"
  variant="\${#${variants}}"
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
