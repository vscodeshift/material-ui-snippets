import * as React from 'react'
import { SnippetOptions } from './index'
import { anchors } from './muiDrawerPermanent'

export const description = 'Material-UI temporary <Drawer>'

export const body = ({
  $,

  Components: { Drawer },
}: SnippetOptions): React.ReactElement<any> => (
  <Drawer variant="temporary" anchor={$(anchors)} open={$} onClose={$} $>
    $
  </Drawer>
)
