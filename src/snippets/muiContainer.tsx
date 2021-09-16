import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Container>'

export const maxWidths = ['xs', 'sm', 'md', 'lg', 'xl']

export const body = ({ $, Components: { Container } }: SnippetOptions) => (
  <Container maxWidth={$(maxWidths)} __multiLineChildren $>
    $
  </Container>
)
