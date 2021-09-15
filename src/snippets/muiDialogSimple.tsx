import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <Dialog>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Dialog
    {...(forPreview && { disablePortal: true, style: { position: 'initial' } })}
    open={forPreview ? true : expression()}
    onClose={expression()}
    aria-labelledby={forPreview ? 'muiDialogTitle' : string()}
    __oneLine
  >
    {expression()}
  </Mui.Dialog>
)
