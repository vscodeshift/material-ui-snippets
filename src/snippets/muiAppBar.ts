import snip from '../snip'

export const colors = [
  'primary',
  'default',
  'inherit',
  'secondary',
  'transparent',
]

export const positions = ['fixed', 'absolute', 'relative', 'static', 'sticky']

export const description = 'Material-UI <AppBar>'

export const body = snip`
<AppBar position="\${#${positions}}" color="\${#${colors}}">
  <Toolbar$#>
    <Typography variant="h6"$#>
      $0
    </Typography> 
  </Toolbar>
</AppBar>
`
