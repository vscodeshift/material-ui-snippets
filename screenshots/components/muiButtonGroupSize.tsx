import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

export default () => {
  return (
    <>
      <p>
        <ButtonGroup
          variant="contained"
          color="primary"
          size="small"
          aria-label=""
        >
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      </p>
      <p>
        <ButtonGroup
          variant="contained"
          color="primary"
          size="medium"
          aria-label=""
        >
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      </p>
      <p>
        <ButtonGroup
          variant="contained"
          color="primary"
          size="large"
          aria-label=""
        >
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      </p>
    </>
  )
}
