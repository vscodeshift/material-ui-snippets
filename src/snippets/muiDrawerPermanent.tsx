import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const anchors = ['left', 'right', 'top', 'bottom']

export const description = 'Material-UI permanent <Drawer>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Drawer variant="permanent" anchor={string(anchors)} $>
    {expression()}
  </Mui.Drawer>
)
