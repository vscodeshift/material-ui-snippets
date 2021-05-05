import React from 'react'
import TextField from '@material-ui/core/TextField'

export default () => {
  return (
    <>
      <p>
        <TextField label="Standard" variant="standard" />
      </p>
      <p>
        <TextField label="Outlined" variant="outlined" />
      </p>
      <p>
        <TextField label="Filled" variant="filled" />
      </p>
    </>
  )
}
