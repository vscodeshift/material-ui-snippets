import snip from '../snip'

export const description = 'MUI <Dialog>'

export const body = snip`
<Dialog open={$1} onClose={$2} aria-labelledby="$3">
  \${4:<DialogTitle id="$3">$5</DialogTitle>}
  $0
</Dialog>
`
