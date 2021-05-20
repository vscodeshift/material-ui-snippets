import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <CardMedia>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.CardMedia title={string()} image={string()} />
)
