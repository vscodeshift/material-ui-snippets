import * as React from 'react'
import { SnippetOptions } from './index'

import {
  directions,
  justifies,
  alignItems,
  alignContents,
  wraps,
} from './muiGridContainer'

export const description = 'Material-UI <Grid container> with all props'

export const body = ({
  $,

  Components: { Grid },
}: SnippetOptions): React.ReactElement<any> => (
  <Grid
    container
    spacing__optional={$(1)}
    direction__optional={$(directions)}
    justify__optional={$(justifies)}
    alignItems__optional={$(alignItems)}
    alignContent__optional={$(alignContents)}
    wrap__optional={$(wraps)}
    $
  >
    $
  </Grid>
)
