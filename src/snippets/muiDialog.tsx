import * as React from 'react'
import { colors } from './muiButton'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <Dialog>'

export const body = ({ forPreview, Mui }: SnippetOptions) => {
  const titleId = forPreview ? 'muiDialogTitle' : string()
  return (
    <Mui.Dialog
      {...(forPreview && {
        disablePortal: true,
        style: { position: 'initial' },
      })}
      open={forPreview ? true : expression()}
      onClose={expression()}
      aria-labelledby={titleId}
      __oneLine
    >
      <Mui.DialogTitle __optional id={titleId}>
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
