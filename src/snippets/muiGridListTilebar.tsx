import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <GridListTileBar>'

export const body = ({
  $,
  Components: { GridListTileBar, IconButton },
}: SnippetOptions) => (
  <GridListTileBar
    title__optional="$"
    subtitle__optional="$"
    actionIcon__optional={
      <IconButton aria-label="$" __multiLineChildren $>
        $
      </IconButton>
    }
  />
)
