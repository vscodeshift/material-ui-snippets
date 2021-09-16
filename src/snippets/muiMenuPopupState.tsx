import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Menu> for material-ui-popup-state'

export const body = ({ $, Components: { Menu } }: SnippetOptions) => (
  <Menu id="$" keepMounted __raw="{...bindMenu(${:popupState})}" __multiLine $>
    $
  </Menu>
)
