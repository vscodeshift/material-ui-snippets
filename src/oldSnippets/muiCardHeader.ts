import snip from '../snip'

export const description = 'Material-UI <CardHeader>'

export const body = snip`
<CardHeader\${#:
  avatar={
    <Avatar aria-label="$#"$#>
      $#
    </Avatar>
  \\}}\${#:
  action={
    <IconButton aria-label="$#"$#>
      \${#:<MoreVertIcon />}
    </IconButton>
  \\}}\${#:
  title="$#"}\${#:
  subheader="$#"}
  $#
/>
`
