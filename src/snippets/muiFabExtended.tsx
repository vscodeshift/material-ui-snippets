import * as React from 'react'
import { SnippetOptions } from './index'
import { colors } from './muiButton'

export const description = 'Material-UI <Fab variant="extended">'

export const body = ({
  $,
  Components: { Box, Fab, $Icon },
}: SnippetOptions): React.ReactElement<any> => (
  <Fab variant="extended" color={$(colors)} aria-label="$" __oneLineProps $>
    <Box marginRight={1}>
      <$Icon />
    </Box>
    $
  </Fab>
)
