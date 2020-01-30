export const description = 'Material-UI <Switch> with <FormControlLabel>'

export const body = `
<FormControlLabel
  label="$1"
  control={
    <Switch
      checked={$2}
      onChange={$3}
      value="$4"
      $0
    />
  }
/>
`
