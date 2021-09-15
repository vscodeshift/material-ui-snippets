import * as React from 'react'
import { expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <BottomNavigation>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.BottomNavigation value={expression()} onChange={expression()} $>
    {expression()}
  </Mui.BottomNavigation>
)
