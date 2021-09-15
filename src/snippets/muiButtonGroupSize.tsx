import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { variants, colors, sizes } from './muiButton'

export const description = 'Material-UI <ButtonGroup> with size'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.ButtonGroup
    variant={string(variants)}
    color={string(colors)}
    size={string(sizes)}
    aria-label={string()}
    $
    __oneLine
  >
    <Mui.Button>{expression()}</Mui.Button>
    <Mui.Button>{expression()}</Mui.Button>
    {expression()}
  </Mui.ButtonGroup>
)
