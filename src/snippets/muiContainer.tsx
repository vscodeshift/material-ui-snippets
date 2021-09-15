import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <Container>'

export const maxWidths = ['xs', 'sm', 'md', 'lg', 'xl']

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Container maxWidth={string(maxWidths)} $>
    {expression()}
  </Mui.Container>
)
