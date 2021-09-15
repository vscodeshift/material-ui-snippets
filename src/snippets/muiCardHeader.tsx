import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <CardHeader>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.CardHeader
    avatar__optional={
      <Mui.Avatar aria-label={string()} $>
        {expression()}
      </Mui.Avatar>
    }
    action__optional={
      <Mui.IconButton aria-label={string()} $>
        {expression()}
      </Mui.IconButton>
    }
    title__optional={string()}
    subheader__optional={string()}
    $
  />
)
