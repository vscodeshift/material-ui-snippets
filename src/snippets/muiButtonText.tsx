import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { colors } from './muiButton'

export const description = 'Material-UI text <Button>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Button color={string(colors)} __placeholder>
    <Placeholder type="expression" stop={0} />
  </Mui.Button>
)
