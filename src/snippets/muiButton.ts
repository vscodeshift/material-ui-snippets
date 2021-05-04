import snip from '../snip'

export const variants = ['text', 'contained', 'outlined']
export const colors = ['default', 'inherit', 'primary', 'secondary']
export const sizes = ['small', 'medium', 'large']

export const docURL = 'buttons'
export const description = 'Material-UI <Button>'
export const body = snip`
<Button variant="\${#${variants}}" color="\${#${colors}}"$#>
  $0
</Button>
`
