import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

export default () => {
  return (
    <>
      <ButtonGroup
        orientation="vertical"
        variant="contained"
        color="primary"
        aria-label=""
      >
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    </>
  )
}
