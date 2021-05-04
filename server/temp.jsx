
import React from 'react'
import ReactDOM from 'react-dom'
import {AppBar,Toolbar,Typography} from '@material-ui/core'

ReactDOM.render(
  <>
  <AppBar position="fixed" color="primary">
  <Toolbar>
    <Typography variant="h6">
      Text
    </Typography>
  </Toolbar>
</AppBar>
  </>,
  document.getElementById('root')
)
