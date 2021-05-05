import React from 'react'
import Fab from '@material-ui/core/Fab'
import SaveIcon from '@material-ui/icons/Save'

export default () => {
  return (
    <>
      <p>
        <Fab color="primary" aria-label="">
          <SaveIcon />
        </Fab>
      </p>
      <p>
        <Fab color="secondary" aria-label="">
          <SaveIcon />
        </Fab>
      </p>
      <p>
        <Fab color="default" aria-label="">
          <SaveIcon />
        </Fab>
      </p>
    </>
  )
}
