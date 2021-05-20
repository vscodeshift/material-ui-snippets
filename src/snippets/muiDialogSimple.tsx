import * as React from 'react'
import { colors } from './muiButton'
import Placeholder, { string, expression, attribute } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <Dialog>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Dialog
    {...(forPreview && { disablePortal: true, style: { position: 'initial' } })}
    open={forPreview ? true : expression(1)}
    onClose={expression(2)}
    aria-labelledby={forPreview ? 'muiDialogTitle' : string(3)}
    __oneLine
  >
    <Placeholder type="expression" stop={0} />
  </Mui.Dialog>
)
