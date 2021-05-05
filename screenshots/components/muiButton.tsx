import React from 'react'
import Button from '@material-ui/core/Button'

export default () => {
  return (
    <>
      <p>
        <Button variant="contained" color="primary">
          Contained
        </Button>
      </p>
      <p>
        <Button variant="outlined" color="primary">
          Outlined
        </Button>
      </p>
      <p>
        <Button variant="text" color="primary">
          Text
        </Button>
      </p>
    </>
  )
}
