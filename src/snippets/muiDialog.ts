import snip from '../snip'

import { colors } from './muiButton'

export const description = 'MUI <Dialog>'

export const body = snip`
<Dialog open={$1} onClose={$2} aria-labelledby="$3">\${4:
  <DialogTitle id="$3">$5</DialogTitle>}\${6:
  <DialogContent>
    \${7:<DialogContentText>
      $8
    </DialogContentText>}
  </DialogContent>}\${9:
  <DialogActions>
    <Button onClick={$2\\} color="\${10${colors}}">
      \${11:Cancel}
    </Button>
  </DialogActions>}
</Dialog>
`
