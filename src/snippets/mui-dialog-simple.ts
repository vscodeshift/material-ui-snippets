import snip from '../snip'

export const description = 'Material-UI <Dialog>'

export const body = snip`
<Dialog open={$1} onClose={$2} aria-labelledby="$3">
  <DialogTitle id="$3">$4</DialogTitle>
  $0
</Dialog>
`
