import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { positions, colors } from './muiAppBar'

export const description = 'Material-UI <AppBar> with menu icon'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.AppBar
    position={forPreview ? 'relative' : string(positions)}
    color={string(colors)}
  >
    <Mui.Toolbar $>
      <Mui.IconButton edge="start" color="inherit" aria-label="menu">
        <Mui.MenuIcon />
      </Mui.IconButton>
      <Mui.Typography variant="h6" $>
        {forPreview ? 'Title' : expression()}
      </Mui.Typography>
    </Mui.Toolbar>
  </Mui.AppBar>
)
