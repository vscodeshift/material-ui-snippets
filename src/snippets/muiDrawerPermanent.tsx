import * as React from 'react'
import { SnippetOptions } from './index'

export const anchors = ['left', 'right', 'top', 'bottom']

export const description = 'Material-UI permanent <Drawer>'

export const body = ({ $, Components: { Drawer } }: SnippetOptions) => (
  <Drawer variant="permanent" anchor={$(anchors)} $>
    $
  </Drawer>
)
