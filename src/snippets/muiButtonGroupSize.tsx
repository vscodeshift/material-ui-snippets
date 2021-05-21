import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { variants, colors, sizes } from './muiButton'

export const description = 'Material-UI <ButtonGroup> with size'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.ButtonGroup
    variant={string({ choices: variants })}
    color={string({ choices: colors })}
    size={string({ choices: sizes })}
    aria-label={string()}
    __placeholder
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
