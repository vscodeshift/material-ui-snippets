import snip from '../snip'

export const description = 'Material-UI <Button> with icon and label'
export const body = snip`
<Button
  variant="\${#:contained}"
  color="\${#:primary}"
  startIcon={$#}
  $#
>
  $0
</Button>
`
