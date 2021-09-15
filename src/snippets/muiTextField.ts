import snip from '../snip'

export const colors = ['primary', 'secondary']
export const variants = ['standard', 'outlined', 'filled']
export const margins = ['none', 'dense', 'normal']
export const sizes = ['small', 'medium']

export const description = 'MUI <TextField>'

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
