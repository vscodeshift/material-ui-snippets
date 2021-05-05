import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default () => {
  return (
    <>
      {/* <Dialog open={true} aria-labelledby=""> */}
      <DialogTitle id=""> Use Google's location service?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="default">Agree</Button>
        <Button color="default">Disagree</Button>
      </DialogActions>
      {/* </Dialog> */}
    </>
  )
}
