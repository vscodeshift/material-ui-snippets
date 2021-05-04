import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default () => {
  return (
    <>
      <p>
        Primary
        <br />
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6">Primary</Typography>
          </Toolbar>
        </AppBar>
      </p>
      <p>
        Secondary <br />
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6">Secondary</Typography>
          </Toolbar>
        </AppBar>
      </p>
    </>
  )
}
