import snip from '../snip'

export const description = 'Material-UI <SwipeableViews>'

export const body = snip`
<SwipeableViews
  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
  index={$#}
  onChangeIndex={$#}
  $#
>
  $0
</SwipeableViews>
`
