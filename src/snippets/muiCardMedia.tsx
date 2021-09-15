import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <CardMedia>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.CardMedia title={string()} image={string()} />
)
