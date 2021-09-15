import snip from '../snip'

import { labelPlacements } from './muiFormControl'

export const description =
  'MUI <Switch> with <FormControlLabel> with labelPlacement'

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
