import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'
import { variants, colors } from './muiButton'

export const description = 'Material-UI <Button> with icon and label'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Button
    variant={string({ choices: variants })}
    color={string({ choices: colors })}
    startIcon={expression()}
    __attributePlaceholder={attribute()}
  >
    <Placeholder type="expression" stop={0} />
  </Mui.Button>
)
