import * as React from 'react'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <CardHeader>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.CardHeader
    avatar={expression({
      optional: true,
      default: (
        <Mui.Avatar aria-label={string()} __attributePlaceholder={attribute()}>
          <Placeholder type="expression" />
        </Mui.Avatar>
      ),
    })}
    action={expression({
      optional: true,
      default: (
        <Mui.IconButton
          aria-label={string()}
          __attributePlaceholder={attribute()}
        >
          <Placeholder type="expression" default={<Mui.MoreVertIcon />} />
        </Mui.IconButton>
      ),
    })}
    title={string({ optional: true })}
    subheader={string({ optional: true })}
    __attributePlaceholder={attribute()}
  />
)
