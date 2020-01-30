import snip from '../snip'

export const description = 'Material-UI <Snackbar>'

export const body = snip`
<Snackbar
  anchorOrigin={{
    vertical: '$1',
    horizontal: '$2',
  }}
  open={$3}
  onClose={$4}
  message="$5"
  action={
    <IconButton size="small" aria-label="close" color="inherit" onClick={$4}>
      <CloseIcon fontSize="small" />
    </IconButton>
  }
/>
`
