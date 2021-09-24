import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Container>'

export const maxWidths = ['xs', 'sm', 'md', 'lg', 'xl']

export const body = ({
  $,

  Components: { Container },
}: SnippetOptions): React.ReactElement<any> => (
  <Container maxWidth={$(maxWidths)} __multiLineChildren $>
    $
  </Container>
)
