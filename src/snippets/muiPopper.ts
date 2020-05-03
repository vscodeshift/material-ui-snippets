import snip from '../snip'

export const description = 'Material-UI <Popper>'
export const body = snip`
const [anchorEl, setAnchorEl] = useState(null);
const handleClick = event => setAnchorEl(anchorEl ? null : event.currentTarget);
const open = Boolean(anchorEl);

<Popper open={open} anchorEl={anchorEl} transition>
  {({ TransitionProps }) => (
    <Fade {...TransitionProps} timeout={350}>
      <Box>$0</Box>
    </Fade>
  )}
</Popper>
`
