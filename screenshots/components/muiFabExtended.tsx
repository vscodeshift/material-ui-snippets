import React from 'react'
import Box from '@material-ui/core/Box'
import Fab from '@material-ui/core/Fab'
import SaveIcon from '@material-ui/icons/Save'

export default () => {
  return (
    <>
      <p>
        <Fab variant="extended" color="default">
          <Box marginRight={1}>
            <SaveIcon />
          </Box>
          Save
        </Fab>
      </p>
      <p>
        <Fab variant="extended" color="primary">
          <Box marginRight={1}>
            <SaveIcon />
          </Box>
          Save
        </Fab>
      </p>
      <p>
        <Fab variant="extended" color="secondary">
          <Box marginRight={1}>
            <SaveIcon />
          </Box>
          Save
        </Fab>
      </p>
    </>
  )
}
