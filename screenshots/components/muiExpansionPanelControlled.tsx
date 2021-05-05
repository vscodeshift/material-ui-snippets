import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'

export default () => {
  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography>Expand</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>Click me</ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  )
}
