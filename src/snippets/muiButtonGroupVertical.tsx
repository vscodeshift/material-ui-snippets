import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { variants, colors } from './muiButton'

export const description = 'Material-UI vertical <ButtonGroup>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.ButtonGroup
    orientation="vertical"
    variant={string(variants)}
    color={string(colors)}
    aria-label={string()}
    $
    __oneLine
  >
    <Mui.Button>{expression()}</Mui.Button>
    <Mui.Button>{expression()}</Mui.Button>
    {expression()}
  </Mui.ButtonGroup>
)
