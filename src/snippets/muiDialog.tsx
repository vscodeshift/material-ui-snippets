import * as React from 'react'
import { colors } from './muiButton'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <Dialog>'

export const body = ({ forPreview, Mui }: SnippetOptions) => {
  const titleId = string()
  return (
    <Mui.Dialog
      {...(forPreview && {
        disablePortal: true,
        style: { position: 'initial' },
      })}
      open={forPreview ? true : expression()}
      onClose={expression()}
      aria-labelledby={forPreview ? 'muiDialogTitle' : titleId}
      __oneLine
    >
      <Mui.DialogTitle __optional id={forPreview ? 'muiDialogTitle' : titleId}>
        {forPreview ? 'Title' : string()}
      </Mui.DialogTitle>
      <Mui.DialogContent __optional>
        <Mui.DialogContentText __optional>{string()}</Mui.DialogContentText>
      </Mui.DialogContent>
      <Mui.DialogActions __optional>
        <Mui.Button
          onClick={expression()}
          color={forPreview ? 'primary' : string(colors)}
        >
          {string('Cancel')}
        </Mui.Button>
      </Mui.DialogActions>
    </Mui.Dialog>
  )
}
