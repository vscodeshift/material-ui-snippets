import snip from '../snip'

export const description =
  'Material-UI <Switch> with <FormControlLabel> with labelPlacement'

export const body = snip`
<FormControlLabel
  label="$#"
  labelPlacement="\${#:start}"
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
