import * as React from 'react'
import { colors } from './muiButton'
import Placeholder from '../Placeholder'
import importedComponent from '../importedComponent'

const Dialog = importedComponent('Dialog')
const DialogTitle = importedComponent('DialogTitle')
const DialogContent = importedComponent('DialogContent')
const DialogContentText = importedComponent('DialogContentText')
const DialogActions = importedComponent('DialogActions')
const Button = importedComponent('Button')

export const description = 'Material-UI <Dialog>'

export const body = ({ forPreview }: { forPreview?: boolean }) => (
  <Dialog
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
        <DialogTitle
          id={<Placeholder type="string" index={3} preview="muiDialogTitle" />}
        >
          <Placeholder type="string" index={5} preview="Title" />
        </DialogTitle>
      }
    />
    <Placeholder
      type="expression"
      index={6}
      default={
        <DialogContent>
          <Placeholder
            type="expression"
            index={7}
            default={
              <DialogContentText>
                <Placeholder type="string" index={8} />
              </DialogContentText>
            }
          />
        </DialogContent>
      }
    />
    <Placeholder
      type="expression"
      index={9}
      default={
        <DialogActions>
          <Button
            onClick={<Placeholder type="expression" index={2} />}
            color={
              <Placeholder type="string" choices={colors} preview="primary" />
            }
          >
            <Placeholder type="string" index={11} default="Cancel" />
          </Button>
        </DialogActions>
      }
    />
  </Dialog>
)
