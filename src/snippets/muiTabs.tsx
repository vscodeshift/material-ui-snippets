import * as React from 'react'
import { SnippetOptions } from './index'
import { colors } from './muiAppBar'

export const description = 'Material-UI <Tabs>'

export const body = ({ $, Components: { AppBar, Tabs } }: SnippetOptions) => (
  <AppBar position="static" color={$(colors)} $ __oneLineProps>
    <Tabs value={$} onChange={$} aria-label="$" $ __multiLineChildren>
      $
    </Tabs>
  </AppBar>
)
