import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <MenuItem>'

export const body = ({ $, Components: { MenuItem } }: SnippetOptions) => (
  <MenuItem onClick={$} $>
    $
  </MenuItem>
)
