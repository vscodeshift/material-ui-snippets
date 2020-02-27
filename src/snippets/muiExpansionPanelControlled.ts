import snip from '../snip'

export const description = 'Material-UI controlled <ExpansionPanel>'

export const body = snip`
<ExpansionPanel expanded={$1} onChange={$2}>
  <ExpansionPanelSummary
    expandIcon={<ExpandMoreIcon />}
    aria-label="\${3:Expand}"
    aria-controls="$4-content"
    id="$5-header"
  >
    <Typography $6>$7</Typography>
  </ExpansionPanelSummary>
  <ExpansionPanelDetails>
    $0
  </ExpansionPanelDetails>
</ExpansionPanel>
`
