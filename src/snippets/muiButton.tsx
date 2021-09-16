import * as React from 'react'
import { SnippetOptions } from './index'

export const variants = ['text', 'contained', 'outlined']
export const colors = ['default', 'inherit', 'primary', 'secondary']
export const sizes = ['small', 'medium', 'large']

export const description = 'Material-UI <Button>'

export const body = ({ $, Components: { Button } }: SnippetOptions) => (
  <Button variant={$(variants)} color={$(colors)} __oneLineProps $>
    $
  </Button>
)
