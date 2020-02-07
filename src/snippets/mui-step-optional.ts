import snip from '../snip'

export const description = 'Material-UI optional <Step>'

export const body = snip`
<Step key={$#} completed={$#}$#>
  <StepLabel
    optional={<Typography variant="caption">\${#:Optional}</Typography>}
  >
    $0
  </StepLabel>
</Step>
`
