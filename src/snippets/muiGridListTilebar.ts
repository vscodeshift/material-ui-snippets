import snip from '../snip'

export const description = 'MUI <GridListTileBar>'

export const body = snip`
<GridListTileBar\${#:
  title="$#"}\${#:
  subtitle="$#"}\${#:
  actionIcon={
    <IconButton aria-label="$#"$#>
      $0
    </IconButton>
  \\}}
/>
`
