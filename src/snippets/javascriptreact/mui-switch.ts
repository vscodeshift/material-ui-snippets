export const description = 'Material-UI <Switch>'

export const body = `
<Switch
  checked={$1}
  onChange={$2}
  value="$3"
  inputProps={{ 'aria-label': '$4' }}
  $0
/>
`
