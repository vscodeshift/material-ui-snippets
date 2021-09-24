import * as React from 'react'
import { SnippetOptions } from './index'
import { directions, wraps } from './muiGridContainer'

export const description = 'Material-UI <Grid container> with centering'

export const body = ({
  $,

  Components: { Grid },
}: SnippetOptions): React.ReactElement<any> => (
  <Grid
    container
    spacing={$(1)}
    direction__optional={$(directions)}
    justify={$('center')}
    alignItems={$('center')}
    alignContent={$('center')}
    wrap__optional={$(wraps)}
    $
  >
    $
  </Grid>
)
