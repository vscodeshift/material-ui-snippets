import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { colors } from './muiButton'

export const description = 'Material-UI text <Button>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Button color={string(colors)} $>
    {expression()}
  </Mui.Button>
)
