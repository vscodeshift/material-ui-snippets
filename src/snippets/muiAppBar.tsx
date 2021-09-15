import * as React from 'react'
import { string, expression } from '../Placeholder'
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
    <Mui.Toolbar $>
      <Mui.Typography variant="h6" $>
        {forPreview ? 'Title' : expression()}
      </Mui.Typography>
    </Mui.Toolbar>
  </Mui.AppBar>
)
