import snip from '../snip'

export const description = 'Material-UI <Grid container> with all props'

export const body = snip`
<Grid
  container
  spacing={\${#:1}}
  direction="\${#:row}"
  justify="\${#:flex-start}"
  alignItems="\${#:stretch}"
  alignContent="\${#:stretch}"
  wrap="\${#:wrap}"
  $#
>
  $0
</Grid>
`
