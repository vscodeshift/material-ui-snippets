import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Menu>'

export const body = ({
  $,
  Components: { Menu },
}: SnippetOptions): React.ReactNode => {
  const $anchorEl = $.anchorEl()
  return (
    <Menu
      id="$"
      anchorEl={$anchorEl}
      keepMounted
      // TODO
      open__raw="{Boolean(${anchorEl})}"
      onClose={$}
      $
    >
      $
    </Menu>
  )
}
