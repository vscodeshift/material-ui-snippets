import snip from '../snip'

export const description = 'Material-UI <Grid container> with centering'

export const body = snip`
<Grid
  container
  spacing={\${#:1}}
  direction="\${#:row}"
  justify="\${#:center}"
  alignItems="\${#:center}"
  alignContent="\${#:center}"
  wrap="\${#:wrap}"
  $#
>
  $0
</Grid>
`
