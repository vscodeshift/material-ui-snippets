import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <BottomNavigationAction>'

export const body = ({
  Components: { BottomNavigationAction },
  $,
}: SnippetOptions): React.ReactElement<any> => (
  <BottomNavigationAction label="$" value={$} icon={$} $ />
)
