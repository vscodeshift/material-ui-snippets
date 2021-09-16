import * as React from 'react'
import { SnippetOptions } from './index'
import {
  directions,
  wraps,
  alignItems,
  alignContents,
  justifies,
} from './muiGridContainer'

export const description = 'Material-UI <Grid container> with centering'

export const body = ({ $, Components: { Grid } }: SnippetOptions) => (
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
