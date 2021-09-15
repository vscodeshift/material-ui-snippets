import snip from '../snip'

export const description = 'MUI <Switch>'

export const body = snip`
<Switch
  value="$#"
  {{#if formControlMode === "controlled"}}
  checked={$#}
  onChange={$#}
  {{/if}}
  {{#if formControlMode === "uncontrolled"}}
  defaultChecked="$#"
  {{/if}}
  inputProps={{ 'aria-label': '$#' }}
  $0
/>
`
