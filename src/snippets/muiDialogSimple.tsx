import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Dialog>'

export const body = ({
  forPreview,
  $,
  Components: { Dialog },
}: SnippetOptions): React.ReactElement<any> => (
  <Dialog
    {...(forPreview && {
      disablePortal: true,

      style: {
        position: 'initial',
      },
    })}
    open={forPreview ? true : $}
    onClose={$}
    aria-labelledby={forPreview ? 'muiDialogTitle' : '$'}
    __multiLineChildren
  >
    $
  </Dialog>
)
