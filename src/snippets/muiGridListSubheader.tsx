import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <GridList> subheader'

export const body = ({
  $,
  Components: { GridListTile, ListSubheader },
}: SnippetOptions) => (
  <GridListTile cols={$(2)} style={{ height: 'auto' }}>
    <ListSubheader component="div">$</ListSubheader>
  </GridListTile>
)
