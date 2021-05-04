import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

export default () => {
  return (
    <>
      <BottomNavigation value={0}>
        <BottomNavigationAction label="My Action 1" value={0} />
        <BottomNavigationAction label="My Action 2" value={0} />
      </BottomNavigation>
    </>
  )
}
