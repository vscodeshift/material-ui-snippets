import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'

export default () => {
  return (
    <>
      <CardHeader
        avatar={<Avatar aria-label="">Me</Avatar>}
        action={
          <IconButton aria-label="">
            <MoreVertIcon />
          </IconButton>
        }
        title="My Card"
        subheader="I am using Material UI"
      />
    </>
  )
}
