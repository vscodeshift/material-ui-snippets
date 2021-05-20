import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { positions, colors } from './muiAppBar'

export const description = 'Material-UI <AppBar> with menu icon'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.AppBar
    position={forPreview ? 'relative' : string({ choices: positions })}
    color={string({ choices: colors })}
  >
    <Mui.Toolbar __attributePlaceholder={attribute()}>
      <Mui.IconButton edge="start" color="inherit" aria-label="menu">
        <Mui.MenuIcon />
      </Mui.IconButton>
      <Mui.Typography variant="h6" __attributePlaceholder={attribute()}>
        {forPreview ? 'Title' : <Placeholder type="expression" stop={0} />}
      </Mui.Typography>
    </Mui.Toolbar>
  </Mui.AppBar>
)
