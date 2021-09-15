import snip from '../snip'

export const description = 'MUI optional <Step>'

export const body = snip`
<Step key={$#} completed={$#}$#>
  <StepLabel
    optional={<Typography variant="caption">\${#:Optional}</Typography>}
  >
    $0
  </StepLabel>
</Step>
`
