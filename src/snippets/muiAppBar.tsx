import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const colors = [
  'primary',
  'default',
  'inherit',
  'secondary',
  'transparent',
]

export const positions = ['fixed', 'absolute', 'relative', 'static', 'sticky']

export const description = 'Material-UI <AppBar>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.AppBar
    position={forPreview ? 'relative' : string(positions)}
    color={string(colors)}
  >
    <Mui.Toolbar __placeholder>
      <Mui.Typography variant="h6" __placeholder>
        {forPreview ? 'Title' : expression(0)}
      </Mui.Typography>
    </Mui.Toolbar>
  </Mui.AppBar>
)
