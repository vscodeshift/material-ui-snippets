import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { variants, colors, sizes } from './muiButton'

export const description = 'Material-UI <Button> with size'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Button
    variant={string({ choices: variants })}
    color={string({ choices: colors })}
    size={string({ choices: sizes })}
    __placeholder
  >
    <Placeholder type="expression" stop={0} />
  </Mui.Button>
)
