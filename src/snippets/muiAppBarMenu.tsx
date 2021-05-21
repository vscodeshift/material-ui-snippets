import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { positions, colors } from './muiAppBar'

export const description = 'Material-UI <AppBar> with menu icon'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.AppBar
    position={forPreview ? 'relative' : string(positions)}
    color={string(colors)}
  >
    <Mui.Toolbar __placeholder>
      <Mui.IconButton edge="start" color="inherit" aria-label="menu">
        <Mui.MenuIcon />
      </Mui.IconButton>
      <Mui.Typography variant="h6" __placeholder>
        {forPreview ? 'Title' : expression(0)}
      </Mui.Typography>
    </Mui.Toolbar>
  </Mui.AppBar>
)
