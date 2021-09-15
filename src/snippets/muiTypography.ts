import snip from '../snip'

export const aligns = ['inherit', 'left', 'center', 'right', 'justify']

export const colors = [
  'initial',
  'inherit',
  'primary',
  'secondary',
  'textPrimary',
  'textSecondary',
  'error',
]

export const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline',
  'srOnly',
  'inherit',
]

export const description = 'MUI <Typography>'

export const body = snip`
<Typography variant="\${#${variants}}"\${#: color="\${#${colors}}"}$#>$TM_SELECTED_TEXT$0</Typography>
`
