import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <Container>'

export const maxWidths = ['xs', 'sm', 'md', 'lg', 'xl']

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Container maxWidth={string({ choices: maxWidths })} __placeholder>
    <Placeholder type="expression" stop={0} />
  </Mui.Container>
)
