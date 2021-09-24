import * as React from 'react'
import { SnippetOptions } from './index'
import { colors } from './muiButton'

export const description = 'Material-UI <Fab>'

export const body = ({
  $,

  Components: { Fab, $Icon },
}: SnippetOptions): React.ReactElement<any> => (
  <Fab color={$(colors)} aria-label="$" $>
    <$Icon />
  </Fab>
)
