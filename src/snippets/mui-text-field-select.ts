import snip from '../snip'

export const description = 'Material-UI <TextField select>'

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
</TextFIeld>
`
