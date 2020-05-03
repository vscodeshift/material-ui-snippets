import snip from '../snip'

export const description = 'Material-UI <Autocomplete>'
export const body = snip`
const options = ['one', 'two', 'three', 'four', 'five'];
const [value, setValue] = useState(options[0]);

<Autocomplete
freeSolo
options={options.map(option => option)}
renderInput={params => (
  <TextField
    {...params}
    margin="normal"
    size="small"
    variant="outlined" //
  />
)}
value={value}
/>
`
