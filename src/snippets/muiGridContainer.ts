import snip from '../snip'

export const alignContents = [
  'stretch',
  'center',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
]

export const alignItems = [
  'flex-start',
  'center',
  'flex-end',
  'stretch',
  'baseline',
]

export const directions = ['row', 'row-reverse', 'column', 'column-reverse']

export const justifies = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
]

export const wraps = ['nowrap', 'wrap', 'wrap-reverse']

export const description = 'MUI <Grid container>'

export const body = snip`
<Grid container spacing={\${#:1}}$#>
  $0
</Grid>
`
