export const description = 'Material-UI <Slider> with discrete values'

export const body = `
<Slider
  value={$1}
  onChange={$2}
  aria-labelledby="\${3}"
  step={$4:1}
  marks
  min={$5:0}
  max={$6:100}
  $0
/>
`
