import React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import DeleteIcon from '@material-ui/icons/Delete'

export default () => {
  return (
    <>
      <TextField
        label="End Adornment"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <DeleteIcon />
            </InputAdornment>
          ),
        }}
      />
    </>
  )
}
