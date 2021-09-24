import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <BottomNavigation>'

export const body = ({
  $,
  Components: { BottomNavigation },
}: SnippetOptions): React.ReactElement<any> => (
  <BottomNavigation value={$} onChange={$} __multiLineChildren $>
    $
  </BottomNavigation>
)
