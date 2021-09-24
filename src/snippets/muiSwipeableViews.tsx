import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <SwipeableViews>'

export const body = ({
  $,

  Components: { SwipeableViews },
}: SnippetOptions): React.ReactElement<any> => (
  <SwipeableViews
    axis__raw="{theme.direction === 'rtl' ? 'x-reverse' : 'x'}"
    index={$}
    onChangeIndex={$}
    $
  >
    $0
  </SwipeableViews>
)
