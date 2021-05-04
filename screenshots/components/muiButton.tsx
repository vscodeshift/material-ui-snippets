import React from 'react'
import Button from '@material-ui/core/Button'

export default () => {
  return (
    <>
      <p>
        Contained
        <br />
        <Button variant="contained" color="primary">
          Contained
        </Button>
      </p>
      <p>
        Outlined
        <br />
        <Button variant="outlined" color="primary">
          Outlined
        </Button>
      </p>
      <p>
        Text
        <br />
        <Button variant="text" color="primary">
          Text
        </Button>
      </p>
    </>
  )
}
