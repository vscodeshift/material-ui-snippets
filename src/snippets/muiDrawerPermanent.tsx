import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const anchors = ['left', 'right', 'top', 'bottom']

export const description = 'Material-UI permanent <Drawer>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Drawer variant="permanent" anchor={string(anchors)} __placeholder>
    {expression(0)}
  </Mui.Drawer>
)
