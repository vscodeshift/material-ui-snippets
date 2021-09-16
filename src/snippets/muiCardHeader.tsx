import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <CardHeader>'

export const body = ({
  $,
  Components: { CardHeader, Avatar, IconButton },
}: SnippetOptions) => (
  <CardHeader
    avatar__optional={
      <Avatar aria-label="$" __multiLineChildren $>
        $
      </Avatar>
    }
    action__optional={
      <IconButton aria-label="$" __multiLineChildren $>
        $
      </IconButton>
    }
    title__optional="$"
    subheader__optional="$"
    $
  />
)
