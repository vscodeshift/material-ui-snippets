import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <SnackbarContent>'

export const body = ({
  $,
  Components: { SnackbarContent },
}: SnippetOptions): React.ReactElement<any> => (
  <SnackbarContent message="$" action={$} />
)
