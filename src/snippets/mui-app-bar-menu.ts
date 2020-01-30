import snip from '../snip'

export const description = 'Material-UI <AppBar> with menu icon'

export const body = snip`
<AppBar position="\${#:static}">
  <Toolbar $#>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" $#>
      $0
    </Typography> 
  </Toolbar>
</AppBar>
`
