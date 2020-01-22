export const prefix = 'mui-checkbox-label'
export const description = 'Material-UI <Checkbox> with label'
export const body = `
<FormControlLabel
  label="$1"
  control={
    <Checkbox
      value="$2"
      checked={$3}
      onChange={$4}
      color="\${5:primary}"
    />
  }
/>
`
