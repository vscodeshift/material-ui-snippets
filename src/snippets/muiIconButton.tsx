import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <IconButton>'

export const body = ({ $, Components: { IconButton } }: SnippetOptions) => (
  <IconButton aria-label="$" onClick={$} __multiLineChildren $>
    $
  </IconButton>
)
