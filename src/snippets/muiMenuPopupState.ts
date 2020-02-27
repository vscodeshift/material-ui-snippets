import snip from '../snip'

export const description = 'Material-UI <Menu> for material-ui-popup-state'

export const body = snip`
<Menu
  id="$#"
  keepMounted
  {...bindMenu(\${#:popupState})}
  $#
>
  $0
</Menu>
`
