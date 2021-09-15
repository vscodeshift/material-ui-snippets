import snip from '../snip'
import { labelPlacements } from './muiFormControl'

export const description = 'MUI <Checkbox> with labelPlacement'
export const body = snip`
<FormControlLabel
  label="$#"
  labelPlacement="\${#${labelPlacements}}"
  control={
    <Checkbox
      value="$#"
      {{#if formControlMode === "controlled"}}
      checked={$#}
      onChange={$#}
      {{/if}}
      {{#if formControlMode === "uncontrolled"}}
      defaultChecked={$#}
      {{/if}}
      color="\${#:primary}"
    />
  }
/>
`
