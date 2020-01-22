export const prefix = 'mui-radio-button-group'
export const description = 'Material-UI <RadioGroup>'
export const body = `
<FormControl component="fieldset">
  <FormLabel component="legend">$1</FormLabel>
  <RadioGroup aria-label="$1" name="$2" value={$3} onChange={$4}>
    <FormControlLabel
      control={<Radio color="\${5:primary}" />}
      labelPlacement="\${6:end}"
      value="$7"
      label="$8"
    />
    <FormControlLabel
      control={<Radio color="\${5:primary}" />}
      labelPlacement="\${6:end}"
      value="$9"
      label="$10"
    />
    $0
  </RadioGroup>
</FormControl>
`
