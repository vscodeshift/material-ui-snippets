import snip from '../snip'
import { positions, colors } from './muiAppBar'

export const description = 'Material-UI <AppBar> with menu icon'

export const body = snip`
<AppBar position="\${#${positions}}" color="\${#${colors}}">
  <Toolbar$#>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6"$#>
      $0
    </Typography> 
  </Toolbar>
</AppBar>
`
