import snip from '../snip'

export const description = 'Material-UI <AppBar>'

export const body = snip`
<AppBar position="\${#:static}">
  <Toolbar $#>
    <Typography variant="h6" $#>
      $0
    </Typography> 
  </Toolbar>
</AppBar>
`
