import * as React from 'react'
import { colors } from './muiButton'
import { SnippetOptions } from './index'

export const description = 'Material-UI <Dialog>'

export const body = ({
  forPreview,
  $,
  Components: {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
  },
}: SnippetOptions): React.ReactElement<any> => {
  const titleId = forPreview ? 'muiDialogTitle' : $()
  return (
    <Dialog
      {...(forPreview && {
        disablePortal: true,

        style: {
          position: 'initial',
        },
      })}
      open={forPreview ? true : $}
      onClose={$}
      aria-labelledby={titleId}
      __oneLineProps
    >
      <DialogTitle __optional __multiLineChildren id={titleId}>
        {forPreview ? 'Title' : '$'}
      </DialogTitle>
      <DialogContent __multiLineChildren __optional>
        <DialogContentText __multiLineChildren __optional>
          $
        </DialogContentText>
      </DialogContent>
      <DialogActions __optional>
        <Button
          onClick={$}
          color={forPreview ? 'primary' : $(colors)}
          __multiLineChildren
        >
          {$('Cancel')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
