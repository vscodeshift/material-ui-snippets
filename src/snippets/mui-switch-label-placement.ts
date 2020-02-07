import snip from '../snip'

import { labelPlacements } from './mui-form-control'

export const description =
  'Material-UI <Switch> with <FormControlLabel> with labelPlacement'

export const body = snip`
<FormControlLabel
  label="$#"
  labelPlacement="\${#${labelPlacements}}"
  control={
    <Switch
      value="$#"
      {{#if formControlMode === "controlled"}}
      checked={$#}
      onChange={$#}
      {{/if}}
      {{#if formControlMode === "uncontrolled"}}
      defaultChecked="$#"
      {{/if}}
      $0
    />
  }
/>
`
