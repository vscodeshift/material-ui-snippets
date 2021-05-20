import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <BottomNavigationAction>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.BottomNavigationAction
    label={string()}
    value={expression()}
    icon={expression()}
    __attributePlaceholder={attribute()}
  />
)
