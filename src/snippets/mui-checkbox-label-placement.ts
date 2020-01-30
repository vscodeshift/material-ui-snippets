import snip from '../snip'

export const description = 'Material-UI <Checkbox> with labelPlacement'
export const body = snip`
<FormControlLabel
  label="$#"
  labelPlacement="\${#:start}"
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
