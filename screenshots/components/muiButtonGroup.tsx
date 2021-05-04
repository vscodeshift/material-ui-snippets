import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

export default () => {
  return (
    <>
      <p>
        Contained
        <br />
        <ButtonGroup variant="contained" color="primary" aria-label="">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      </p>
      <p>
        Text
        <br />
        <ButtonGroup variant="text" color="primary" aria-label="">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      </p>
      <p>
        Outlined
        <br />
        <ButtonGroup variant="outlined" color="primary" aria-label="">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      </p>
    </>
  )
}
