import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Typography>'

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline',
  'srOnly',
  'inherit',
]

const colors = [
  'initial',
  'inherit',
  'primary',
  'secondary',
  'textPrimary',
  'textSecondary',
  'error',
]

export const body = ({
  $,

  Components: { Typography },
}: SnippetOptions): React.ReactElement<any> => (
  <Typography variant={$(variants)} color__optional={$(colors)} __oneLine $>
    $TM_SELECTED_TEXT$0
  </Typography>
)
