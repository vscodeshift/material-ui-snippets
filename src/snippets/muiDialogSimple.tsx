import * as React from 'react'
import { colors } from './muiButton'
import Placeholder, { string, expression, attribute } from '../Placeholder'
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
    {expression(0)}
  </Mui.Dialog>
)
