export const description = 'Material-UI <Checkbox> with labelPlacement'
export const body = `
<FormControlLabel
  label="$1"
  labelPlacement="\${2:start}"
  control={
    <Checkbox
      value="$3"
      checked={$4}
      onChange={$5}
      color="\${6:primary}"
    />
  }
/>
`
