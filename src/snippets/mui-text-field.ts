import snip from '../snip'

export const description = 'Material-UI <TextField>'

export const body = snip`
<TextField
  id="$#"
  label="$#"
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
