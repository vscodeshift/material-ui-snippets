import * as React from 'react'
import { SnippetOptions } from './index'
import { positions, colors } from './muiAppBar'

export const description = 'Material-UI <AppBar> with menu icon'

export const body = ({
  forPreview,
  $,
  Components: { AppBar, Toolbar, IconButton, Typography },
  Icons: { Menu },
}: SnippetOptions) => (
  <AppBar
    position={forPreview ? 'relative' : $(positions)}
    color={$(colors)}
    __oneLineProps
  >
    <Toolbar $>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <Menu />
      </IconButton>
      <Typography variant="h6" __multiLineChildren $>
        {forPreview ? 'Title' : '$'}
      </Typography>
    </Toolbar>
  </AppBar>
)
