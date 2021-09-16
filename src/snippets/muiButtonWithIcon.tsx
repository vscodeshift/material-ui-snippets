import * as React from 'react'
import { SnippetOptions } from './index'
import { variants, colors } from './muiButton'

export const description = 'Material-UI <Button> with icon and label'

export const body = ({ $, Components: { Button } }: SnippetOptions) => (
  <Button variant={$(variants)} color={$(colors)} startIcon={$} $>
    $
  </Button>
)
