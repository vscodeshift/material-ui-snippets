import snip from '../snip'

export const description = 'Material-UI <Switch> with <FormControlLabel>'

export const body = snip`
<FormControlLabel
  label="$#"
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
