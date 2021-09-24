import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Tooltip>'

export const body = ({
  Components: { Tooltip },
}: SnippetOptions): React.ReactElement<any> => (
  <Tooltip title="$" $ __multiLineChildren>
    {}$TM_SELECTED_TEXT$0
  </Tooltip>
)
