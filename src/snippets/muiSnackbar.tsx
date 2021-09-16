import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Snackbar>'

export const body = ({
  $,
  Components: { Snackbar, IconButton },
  Icons: { Close },
}: SnippetOptions) => {
  const $onClose = $()
  return (
    <Snackbar
      anchorOrigin={{
        vertical: '$',
        horizontal: '$',
      }}
      open={$}
      onClose={$onClose}
      message="$"
      action__optional={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={$onClose}
        >
          <Close fontSize="small" />
        </IconButton>
      }
    />
  )
}
