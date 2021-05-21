import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <CardHeader>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.CardHeader
    avatar={expression.optional(
      <Mui.Avatar aria-label={string()} __placeholder>
        <Placeholder type="expression" />
      </Mui.Avatar>
    )}
    action={expression.optional(
      <Mui.IconButton aria-label={string()} __placeholder>
        <Placeholder type="expression" default={<Mui.MoreVertIcon />} />
      </Mui.IconButton>
    )}
    title={string.optional()}
    subheader={string.optional()}
    __placeholder
  />
)
