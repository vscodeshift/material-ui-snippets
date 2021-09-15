import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { variants, colors } from './muiButton'

export const description = 'Material-UI <Button> with icon and label'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Button
    variant={string(variants)}
    color={string(colors)}
    startIcon={expression()}
    $
  >
    {expression()}
  </Mui.Button>
)
