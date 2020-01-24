export const description = 'Material-UI <FormControl> with <RadioGroup>'

export const body = `
<FormControl component=\${1:"fieldset"} $2>
  <FormLabel component=\${3:"legend"}>$4</FormLabel>
  <RadioGroup aria-label=\${5:""} name=\${6:""} value={$7} onChange={$8}>
    $0
  </RadioGroup>
  <FormHelperText>$9</FormHelperText>
</FormControl>
`
