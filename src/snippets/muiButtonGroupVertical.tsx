import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { variants, colors } from './muiButton'

export const description = 'Material-UI vertical <ButtonGroup>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.ButtonGroup
    orientation="vertical"
    variant={string({ choices: variants })}
    color={string({ choices: colors })}
    aria-label={string()}
    __attributePlaceholder={attribute()}
    __oneLine
  >
    <Mui.Button>
      <Placeholder type="expression" />
    </Mui.Button>
    <Mui.Button>
      <Placeholder type="expression" />
    </Mui.Button>
    <Placeholder type="expression" stop={0} />
  </Mui.ButtonGroup>
)
