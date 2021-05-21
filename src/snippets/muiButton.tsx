import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const variants = ['text', 'contained', 'outlined']
export const colors = ['default', 'inherit', 'primary', 'secondary']
export const sizes = ['small', 'medium', 'large']

export const description = 'Material-UI <Button>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Button variant={string(variants)} color={string(colors)} __placeholder>
    {expression(0)}
  </Mui.Button>
)
