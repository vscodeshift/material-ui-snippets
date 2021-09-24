import * as React from 'react'
import { SnippetOptions } from './index'

export const colors = [
  'primary',
  'default',
  'inherit',
  'secondary',
  'transparent',
]

export const positions = ['fixed', 'absolute', 'relative', 'static', 'sticky']

export const description = 'Material-UI <AppBar>'

export const body = ({
  forPreview,
  $,
  Components: { AppBar, Toolbar, Typography },
}: SnippetOptions): React.ReactElement<any> => (
  <AppBar
    position={forPreview ? 'relative' : $(positions)}
    color={$(colors)}
    __oneLineProps
  >
    <Toolbar __multiLineChildren $>
      <Typography variant="h6" __multiLineChildren $>
        {forPreview ? 'Title' : '$'}
      </Typography>
    </Toolbar>
  </AppBar>
)
