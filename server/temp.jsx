
import React from 'react'
import ReactDOM from 'react-dom'
import {Avatar,CardHeader} from '@material-ui/core'
import {MoreVert} from '@material-ui/icons'

ReactDOM.render(
  <>
  <CardHeader
  avatar={
    <Avatar aria-label="Text">
      Text
    </Avatar>
  }
  action={
    <IconButton aria-label="Text">
      <MoreVertIcon />}
    </IconButton>
  }
  title="Text0"}${11:
  subheader="Text2"}
  Text3
/>
  </>,
  document.getElementById('root')
)
