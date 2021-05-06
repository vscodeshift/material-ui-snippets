import * as React from 'react'
import { colors } from './muiButton'
import Placeholder from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <Dialog>'

export const body = ({ forPreview, Mui }: SnippetOptions) => (
  <Mui.Dialog
    {...(forPreview && { disablePortal: true })}
    open={<Placeholder type="expression" index={1} preview={true} />}
    onClose={<Placeholder type="expression" index={2} />}
    aria-labelledby={
      <Placeholder type="string" index={3} preview="muiDialogTitle" />
    }
    __oneLine
  >
    <Placeholder
      type="expression"
      index={4}
      default={
        <Mui.DialogTitle
          id={<Placeholder type="string" index={3} preview="muiDialogTitle" />}
        >
          <Placeholder type="string" index={5} preview="Title" />
        </Mui.DialogTitle>
      }
    />
    <Placeholder
      type="expression"
      index={6}
      default={
        <Mui.DialogContent>
          <Placeholder
            type="expression"
            index={7}
            default={
              <Mui.DialogContentText>
                <Placeholder type="string" index={8} />
              </Mui.DialogContentText>
            }
          />
        </Mui.DialogContent>
      }
    />
    <Placeholder
      type="expression"
      index={9}
      default={
        <Mui.DialogActions>
          <Mui.Button
            onClick={<Placeholder type="expression" index={2} />}
            color={
              <Placeholder type="string" choices={colors} preview="primary" />
            }
          >
            <Placeholder type="string" index={11} default="Cancel" />
          </Mui.Button>
        </Mui.DialogActions>
      }
    />
  </Mui.Dialog>
)
