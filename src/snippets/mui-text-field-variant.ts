import snip from '../snip'

export const description = 'Material-UI <TextField> with variant'

export const body = snip`
<TextField
  id="$#"
  label="$#"
  variant="\${#:filled}"
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
