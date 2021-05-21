import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { variants, colors } from './muiButton'

export const description = 'Material-UI vertical <ButtonGroup>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.ButtonGroup
    orientation="vertical"
    variant={string(variants)}
    color={string(colors)}
    aria-label={string()}
    __placeholder
    __oneLine
  >
    <Mui.Button>{expression()}</Mui.Button>
    <Mui.Button>{expression()}</Mui.Button>
    {expression(0)}
  </Mui.ButtonGroup>
)
