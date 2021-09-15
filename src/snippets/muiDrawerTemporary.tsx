import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { anchors } from './muiDrawerPermanent'

export const description = 'Material-UI temporary <Drawer>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Drawer
    variant="temporary"
    anchor={string(anchors)}
    open={expression()}
    onClose={expression()}
    $
  >
    {expression()}
  </Mui.Drawer>
)
