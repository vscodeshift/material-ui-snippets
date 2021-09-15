import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { variants, colors, sizes } from './muiButton'

export const description = 'Material-UI <Button> with size'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Button
    variant={string(variants)}
    color={string(colors)}
    size={string(sizes)}
    $
  >
    {expression()}
  </Mui.Button>
)
