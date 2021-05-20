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
    <Placeholder
      type="expression"
      stop={4}
      default={
        <Mui.DialogTitle id={forPreview ? 'muiDialogTitle' : string(3)}>
          {forPreview ? 'Title' : string(5)}
        </Mui.DialogTitle>
      }
    />
    <Placeholder
      type="expression"
      stop={6}
      default={
        <Mui.DialogContent>
          <Placeholder
            type="expression"
            stop={7}
            default={<Mui.DialogContentText>{string(8)}</Mui.DialogContentText>}
          />
        </Mui.DialogContent>
      }
    />
    <Placeholder
      type="expression"
      stop={9}
      default={
        <Mui.DialogActions>
          <Mui.Button
            onClick={expression(2)}
            color={forPreview ? 'primary' : string(10, { choices: colors })}
          >
            {string(11, { default: 'Cancel' })}
          </Mui.Button>
        </Mui.DialogActions>
      }
    />
  </Mui.Dialog>
)
