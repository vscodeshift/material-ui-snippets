import * as React from 'react'
import { SnippetOptions } from './index'

export const alignContents = [
  'stretch',
  'center',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
]

export const alignItems = [
  'flex-start',
  'center',
  'flex-end',
  'stretch',
  'baseline',
]

export const directions = ['row', 'row-reverse', 'column', 'column-reverse']

export const justifies = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
]

export const wraps = ['nowrap', 'wrap', 'wrap-reverse']

export const description = 'Material-UI <Grid container>'

export const body = ({ $, Components: { Grid } }: SnippetOptions) => (
  <Grid container spacing={$} __multiLineChildren $>
    $
  </Grid>
)
