import snip from '../snip'

export const description = 'MUI <Slider> with continuous values'

export const body = snip`
<Slider
  {{#if formControlMode === "controlled"}}
  value={$#}
  onChange={$#}
  {{/if}}
  {{#if formControlMode === "uncontrolled"}}
  defaultValue={$#}
  {{/if}}
  aria-labelledby="$#"
  min={$#:0}
  max={$#:100}
  $0
/>
`
