export const description = 'Material-UI <FormControl> with <FormGroup>'

export const body = `
<FormControl component=\${1:"fieldset"} $2>
  <FormLabel component=\${3:"legend"}>$4</FormLabel>
  <FormGroup>
    $0
  </FormGroup>
  <FormHelperText>$5</FormHelperText>
</FormControl>
`
