export const description =
  'Material-UI <Switch> with <FormControlLabel> with labelPlacement'

export const body = `
<FormControlLabel
  label="$1"
  labelPlacement="\${2:start}"
  control={
    <Switch
      checked={$3}
      onChange={$4}
      value="$5"
      $0
    />
  }
/>
`
