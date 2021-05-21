import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { anchors } from './muiDrawerPermanent'

export const description = 'Material-UI persistent <Drawer>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Drawer
    variant="persistent"
    anchor={string({ choices: anchors })}
    open={expression()}
    __placeholder
  >
    <Placeholder type="expression" stop={0} />
  </Mui.Drawer>
)
