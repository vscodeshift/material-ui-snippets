import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <BottomNavigationAction>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.BottomNavigationAction
    label={string()}
    value={expression()}
    icon={expression()}
    $
  />
)
