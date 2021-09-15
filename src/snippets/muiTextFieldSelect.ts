import snip from '../snip'

export const description = 'MUI <TextField select>'

export const body = snip`
<TextField
  id="$#"
  label="$#"
  select
  {{#if formControlMode === "controlled"}}
  value={$#}
  onChange={$#}
  {{/if}}
  {{#if formControlMode === "uncontrolled"}}
  defaultValue={$#}
  {{/if}}
  $#
>
  $0
</TextField>
`
