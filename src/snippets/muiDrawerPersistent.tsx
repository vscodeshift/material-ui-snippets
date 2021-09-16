import * as React from 'react'
import { anchors } from './muiDrawerPermanent'
import { SnippetOptions } from './index'

export const description = 'Material-UI persistent <Drawer>'

export const body = ({ $, Components: { Drawer } }: SnippetOptions) => (
  <Drawer variant="persistent" anchor={$(anchors)} open={$} $>
    $
  </Drawer>
)
