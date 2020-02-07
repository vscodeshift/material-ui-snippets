import snip from '../snip'

export const description = 'Material-UI <FormControl> with <FormGroup>'

export const body = snip`
<FormControl component=\${#:"fieldset"}$#>
  <FormLabel component=\${#:"legend"}>$#</FormLabel>
  <FormGroup>
    $0
  </FormGroup>
  <FormHelperText>$#</FormHelperText>
</FormControl>
`
