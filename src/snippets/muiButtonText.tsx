import * as React from 'react'
import { SnippetOptions } from './index'
import { colors } from './muiButton'

export const description = 'Material-UI text <Button>'

export const body = ({ $, Components: { Button } }: SnippetOptions) => (
  <Button color={$(colors)} $>
    $
  </Button>
)
