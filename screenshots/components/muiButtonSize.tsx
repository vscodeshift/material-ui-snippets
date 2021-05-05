import React from 'react'
import Button from '@material-ui/core/Button'

export default () => {
  return (
    <>
      <p>
        <Button variant="contained" color="primary" size="small">
          Small Button
        </Button>
      </p>
      <p>
        <Button variant="contained" color="primary" size="medium">
          Medium Button
        </Button>
      </p>
      <p>
        <Button variant="contained" color="primary" size="large">
          Large Button
        </Button>
      </p>
    </>
  )
}
