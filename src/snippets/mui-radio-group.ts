import snip from '../snip'

export const description = 'Material-UI <FormControl> with <RadioGroup>'

export const body = snip`
<FormControl component=\${#:"fieldset"}$#>
  <FormLabel component=\${#:"legend"}>$#</FormLabel>
  <RadioGroup aria-label="$#" name="$#" value={$#} onChange={$#}>
    $0
  </RadioGroup>
  <FormHelperText>$#</FormHelperText>
</FormControl>
`
