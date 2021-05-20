import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <BottomNavigation>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.BottomNavigation
    value={expression()}
    onChange={expression()}
    __attributePlaceholder={attribute()}
  >
    <Placeholder type="expression" stop={0} />
  </Mui.BottomNavigation>
)
