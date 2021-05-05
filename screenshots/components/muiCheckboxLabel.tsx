import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export default () => {
  return (
    <>
      <p>
        <FormControlLabel
          label="I agree the Terms"
          control={
            <Checkbox
              value="Yes"
              checked={true}
              onChange={() => {}}
              color="primary"
            />
          }
        />
        <br />
        <br />
        <FormControlLabel
          label="I agree the Terms"
          control={
            <Checkbox
              value="Yes"
              checked={true}
              onChange={() => {}}
              color="secondary"
            />
          }
        />
      </p>
    </>
  )
}
