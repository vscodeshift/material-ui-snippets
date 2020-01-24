export const description = 'Material-UI <Slider> with continuous values'

export const body = `
<Slider
  value={$1}
  onChange={$2}
  aria-labelledby=\${3:""}
  min={$4:0}
  max={$5:100}
  $0
/>
`
