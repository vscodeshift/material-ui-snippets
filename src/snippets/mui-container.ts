import snip from '../snip'

export const description = 'Material-UI <Container>'

export const maxWidths = ['xs', 'sm', 'md', 'lg', 'xl']

export const body = snip`
<Container maxWidth="\${#${maxWidths}}"$#>
  $0
</Container>
`
