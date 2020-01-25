# material-ui-snippets

[![CircleCI](https://circleci.com/gh/vscodeshift/material-ui-snippets.svg?style=svg)](https://circleci.com/gh/vscodeshift/material-ui-snippets)
[![Coverage Status](https://codecov.io/gh/vscodeshift/material-ui-snippets/branch/master/graph/badge.svg)](https://codecov.io/gh/vscodeshift/material-ui-snippets)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vscodeshift.material-ui-snippets)

snippets for Material-UI

# Snippets

<!-- snippets -->

## javascriptreact

### `muiButtonGroupVertical`: Material-UI vertical &lt;ButtonGroup&gt;

```
<ButtonGroup orientation="vertical" variant="${1:outlined}" color="${2:primary}" aria-label="$3" $4>
  <Button>$5</Button>
  <Button>$6</Button>
  $0
</ButtonGroup>
```

### `muiButtonGroup`: Material-UI &lt;ButtonGroup&gt;

```
<ButtonGroup variant="${1:outlined}" color="${2:primary}" aria-label="$3" $4>
  <Button>$5</Button>
  <Button>$6</Button>
  $0
</ButtonGroup>
```

### `muiButtonText`: Material-UI text &lt;Button&gt;

```
<Button color="${1:primary}" $2>
  $0
</Button>
```

### `muiButtonWithIcon`: Material-UI &lt;Button&gt; with icon and label

```
<Button
  variant="${1:contained}"
  color="${2:primary}"
  startIcon={$3}
  $4
>
  $0
</Button>
```

### `muiButton`: Material-UI &lt;Button&gt;

```
<Button variant="${1:contained}" color="${2:primary}" $3>
  $0
</Button>
```

### `muiCheckboxLabelPlacement`: Material-UI &lt;Checkbox&gt; with labelPlacement

```
<FormControlLabel
  label="$1"
  labelPlacement="${2:start}"
  control={
    <Checkbox
      value="$3"
      checked={$4}
      onChange={$5}
      color="${6:primary}"
    />
  }
/>
```

### `muiCheckboxLabel`: Material-UI &lt;Checkbox&gt; with &lt;FormControlLabel&gt;

```
<FormControlLabel
  label="$1"
  control={
    <Checkbox
      value="$2"
      checked={$3}
      onChange={$4}
      color="${5:primary}"
    />
  }
/>
```

### `muiContainer`: Material-UI &lt;Container&gt;

```
<Container maxWidth="${1:sm}">
  $0
</Container>
```

### `muiFormControlGroup`: Material-UI &lt;FormControl&gt; with &lt;FormGroup&gt;

```
<FormControl component=${1:"fieldset"} $2>
  <FormLabel component=${3:"legend"}>$4</FormLabel>
  <FormGroup>
    $0
  </FormGroup>
  <FormHelperText>$5</FormHelperText>
</FormControl>
```

### `muiFormControl`: Material-UI &lt;FormControl&gt;

```
<FormControl $1>
  <FormLabel>$2</FormLabel>
  $0
  <FormHelperText>$3</FormHelperText>
</FormControl>
```

### `muiGridContainerCenter`: Material-UI &lt;Grid container&gt; with centering

```
<Grid
  container
  spacing={${1:1}}
  direction="${2:row}"
  justify="${3:center}"
  alignItems="${4:center}"
  alignContent="${5:center}"
  wrap="${6:wrap}"
  $7
>
  $0
</Grid>
```

### `muiGridContainerFull`: Material-UI &lt;Grid container&gt; with all props

```
<Grid
  container
  spacing={${1:1}}
  direction="${2:row}"
  justify="${3:flex-start}"
  alignItems="${4:stretch}"
  alignContent="${5:stretch}"
  wrap="${6:wrap}"
  $7
>
  $0
</Grid>
```

### `muiGridContainer`: Material-UI &lt;Grid container&gt;

```
<Grid container spacing={${1:1}} $2>
  $0
</Grid>
```

### `muiGridListSubheader`: Material-UI GridList subheader

```
<GridListTile cols={${1:2}} style={{ height: 'auto' }}>
  <ListSubheader component="div">$0</ListSubheader>
</GridListTile>
```

### `muiGridListTilebar`: Material-UI &lt;GridListTileBar&gt;

```
<GridListTileBar
  title=${1:""}
  subtitle=${2:""}
  actionIcon={
    <IconButton aria-label="$3" $4>
      $0
    </IconButton>
  }
/>
```

### `muiRadioGroup`: Material-UI &lt;FormControl&gt; with &lt;RadioGroup&gt;

```
<FormControl component=${1:"fieldset"} $2>
  <FormLabel component=${3:"legend"}>$4</FormLabel>
  <RadioGroup aria-label="$5" name="$6" value={$7} onChange={$8}>
    $0
  </RadioGroup>
  <FormHelperText>$9</FormHelperText>
</FormControl>
```

### `muiRadioLabelPlacement`: Material-UI &lt;Radio&gt; with &lt;FormControlLabel&gt; with labelPlacement

```
<FormControlLabel value="$1" label="$2" labelPlacement="${3:start}" control={<Radio $0 />} />
```

### `muiRadioLabel`: Material-UI &lt;Radio&gt; with &lt;FormControlLabel&gt;

```
<FormControlLabel value="$1" label="$2" control={<Radio $0 />} />
```

### `muiSelectItem`: Material-UI &lt;MenuItem&gt; inside &lt;Select&gt;

```
<MenuItem value={$1} $2>$0</MenuItem>
```

### `muiSliderContinuous`: Material-UI &lt;Slider&gt; with continuous values

```
<Slider
  value={$1}
  onChange={$2}
  aria-labelledby="$3"
  min={$4:0}
  max={$5:100}
  $0
/>
```

### `muiSliderDiscrete`: Material-UI &lt;Slider&gt; with discrete values

```
<Slider
  value={$1}
  onChange={$2}
  aria-labelledby="$3"
  step={$4:1}
  marks
  min={$5:0}
  max={$6:100}
  $0
/>
```

### `muiSwitchLabelPlacement`: Material-UI &lt;Switch&gt; with &lt;FormControlLabel&gt; with labelPlacement

```
<FormControlLabel
  label="$1"
  labelPlacement="${2:start}"
  control={
    <Switch
      checked={$3}
      onChange={$4}
      value="$5"
      $0
    />
  }
/>
```

### `muiSwitchLabel`: Material-UI &lt;Switch&gt; with &lt;FormControlLabel&gt;

```
<FormControlLabel
  label="$1"
  control={
    <Switch
      checked={$2}
      onChange={$3}
      value="$4"
      $0
    />
  }
/>
```

### `muiSwitch`: Material-UI &lt;Switch&gt;

```
<Switch
  checked={$1}
  onChange={$2}
  value="$3"
  inputProps={{ 'aria-label': '$4' }}
  $0
/>
```

<!-- snippetsend -->
