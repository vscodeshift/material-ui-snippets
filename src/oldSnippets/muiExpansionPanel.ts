import snip from '../snip'

export const description = 'Material-UI <ExpansionPanel>'

export const body = snip`
<ExpansionPanel>
  <ExpansionPanelSummary
    expandIcon={<ExpandMoreIcon />}
    aria-label="\${1:Expand}"
    aria-controls="$2-content"
    id="$2-header"
  >
    <Typography $3>$4</Typography>
  </ExpansionPanelSummary>
  <ExpansionPanelDetails>
    $0
  </ExpansionPanelDetails>
</ExpansionPanel>
`
