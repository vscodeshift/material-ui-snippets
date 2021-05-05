import React from 'react'
import TextField from '@material-ui/core/TextField'

export default () => {
  return (
    <>
      <p>
        <TextField
          label="Small"
          variant="standard"
          color="primary"
          margin="none"
          size="small"
        />
      </p>
      <p>
        <TextField
          label="Medium"
          variant="standard"
          color="primary"
          margin="none"
          size="medium"
        />
      </p>
    </>
  )
}
