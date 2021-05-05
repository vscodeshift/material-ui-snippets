import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export default () => {
  return (
    <>
      <p>
        <FormControlLabel
          label="I am at end"
          labelPlacement="end"
          control={<Checkbox value="yep" checked={false} color="primary" />}
        />
      </p>
      <p>
        <FormControlLabel
          label="I am at bottom"
          labelPlacement="bottom"
          control={<Checkbox value="yep" checked={false} color="primary" />}
        />
      </p>
      <p>
        <FormControlLabel
          label="I am at start"
          labelPlacement="start"
          control={<Checkbox value="yep" checked={false} color="primary" />}
        />
      </p>
      <p>
        <FormControlLabel
          label="I am at top"
          labelPlacement="top"
          control={<Checkbox value="yep" checked={false} color="primary" />}
        />
      </p>
    </>
  )
}
