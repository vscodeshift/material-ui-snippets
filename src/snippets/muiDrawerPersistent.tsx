import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { anchors } from './muiDrawerPermanent'

export const description = 'Material-UI persistent <Drawer>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Drawer
    variant="persistent"
    anchor={string(anchors)}
    open={expression()}
    $
  >
    {expression()}
  </Mui.Drawer>
)
