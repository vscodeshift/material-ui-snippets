import snip from '../snip'

export const description = 'Material-UI <Checkbox> with <FormControlLabel>'
export const body = snip`
<FormControlLabel
  label="$#"
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
