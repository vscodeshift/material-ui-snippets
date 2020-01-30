# material-ui-snippets

[![CircleCI](https://circleci.com/gh/vscodeshift/material-ui-snippets.svg?style=svg)](https://circleci.com/gh/vscodeshift/material-ui-snippets)
[![Coverage Status](https://codecov.io/gh/vscodeshift/material-ui-snippets/branch/master/graph/badge.svg)](https://codecov.io/gh/vscodeshift/material-ui-snippets)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vscodeshift.material-ui-snippets)

Snippets for Material-UI

# Features

- Works in JSX and TSX
- You can configure whether to use controlled or uncontrolled form controls in the extension settings.

# Snippets

<!-- snippets -->

### `mui-app-bar-menu`: &lt;AppBar&gt; with menu icon

```
<AppBar position="${1:static}">
  <Toolbar $2>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" $3>
      $0
    </Typography>
  </Toolbar>
</AppBar>
```

### `mui-app-bar`: &lt;AppBar&gt;

```
<AppBar position="${1:static}">
  <Toolbar $2>
    <Typography variant="h6" $3>
      $0
    </Typography>
  </Toolbar>
</AppBar>
```

### `mui-bottom-navigation-action`: &lt;BottomNavigationAction&gt;

```
<BottomNavigationAction label="$1" value={$2} icon={$3} $0 />
```

### `mui-bottom-navigation`: &lt;BottomNavigation&gt;

```
<BottomNavigation
  value={$1}
  onChange={$2}
  $3
>
  $0
<BottomNavigation>
```

### `mui-button-group-vertical`: vertical &lt;ButtonGroup&gt;

```
<ButtonGroup orientation="vertical" variant="${1:outlined}" color="${2:primary}" aria-label="$3" $4>
  <Button>$5</Button>
  <Button>$6</Button>
  $0
</ButtonGroup>
```

### `mui-button-group`: &lt;ButtonGroup&gt;

```
<ButtonGroup variant="${1:outlined}" color="${2:primary}" aria-label="$3" $4>
  <Button>$5</Button>
  <Button>$6</Button>
  $0
</ButtonGroup>
```

### `mui-button-text`: text &lt;Button&gt;

```
<Button color="${1:primary}" $2>
  $0
</Button>
```

### `mui-button-with-icon`: &lt;Button&gt; with icon and label

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

### `mui-button`: &lt;Button&gt;

```
<Button variant="${1:contained}" color="${2:primary}" $3>
  $0
</Button>
```

### `mui-card-header`: &lt;CardHeader&gt;

```
<CardHeader
  avatar={
    <Avatar aria-label="$1" $2>
      $3
    </Avatar>
  }
  action={
    <IconButton aria-label="$4" $5>
      ${6:<MoreVertIcon />}
    </IconButton>
  }
  title="$7"
  subheader="$8"
  $9
/>
```

### `mui-card-media`: &lt;CardMedia&gt;

```
<CardMedia
  title="$1"
  image=$2
/>
```

### `mui-checkbox-label-placement`: &lt;Checkbox&gt; with labelPlacement

#### Controlled

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

#### Uncontrolled

```
<FormControlLabel
  label="$1"
  labelPlacement="${2:start}"
  control={
    <Checkbox
      value="$3"
      defaultChecked={$4}
      color="${5:primary}"
    />
  }
/>
```

### `mui-checkbox-label`: &lt;Checkbox&gt; with &lt;FormControlLabel&gt;

#### Controlled

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

#### Uncontrolled

```
<FormControlLabel
  label="$1"
  control={
    <Checkbox
      value="$2"
      defaultChecked={$3}
      color="${4:primary}"
    />
  }
/>
```

### `mui-container`: &lt;Container&gt;

```
<Container maxWidth="${1:sm}">
  $0
</Container>
```

### `mui-dialog-simple`: &lt;Dialog&gt;

```
<Dialog open={$1} onClose={$2} aria-labelledby="$3">
  <DialogTitle id="$3">$4</DialogTitle>
  $0
</Dialog>
```

### `mui-dialog`: &lt;Dialog&gt;

```
<Dialog open={$1} onClose={$2} aria-labelledby="$3">
  <DialogTitle id="$3">$4</DialogTitle>
  <DialogContent>
    <DialogContentText>
      $5
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={$2} color="primary">
      Cancel
    </Button>
  </DialogActions>
</Dialog>
```

### `mui-drawer-permanent`: permanent &lt;Drawer&gt;

```
<Drawer
  variant="permanent"
  anchor="${1:left}"
  $2
>
  $0
</Drawer>
```

### `mui-drawer-persistent`: persistent &lt;Drawer&gt;

```
<Drawer
  variant="persistent"
  anchor="${1:left}"
  open={$2}
  $3
>
  $0
</Drawer>
```

### `mui-drawer-temporary`: temporary &lt;Drawer&gt;

```
<Drawer
  variant="temporary"
  anchor="${1:left}"
  open={$2}
  onClose={$3}
  $4
>
  $0
</Drawer>
```

### `mui-end-adornment`: start &lt;InputAdornment&gt;

```
startAdornment={
  <InputAdornment position="start">
    $0
  </InputAdornment>
}
```

### `mui-expansion-panel-controlled`: controlled &lt;ExpansionPanel&gt;

```
<ExpansionPanel expanded={$1} onChange={$2}>
  <ExpansionPanelSummary
    expandIcon={<ExpandMoreIcon />}
    aria-label="${3:Expand}"
    aria-controls="$4-content"
    id="$5-header"
  >
    <Typography $6>$7</Typography>
  </ExpansionPanelSummary>
  <ExpansionPanelDetails>
    $0
  </ExpansionPanelDetails>
</ExpansionPanel>
```

### `mui-expansion-panel`: &lt;ExpansionPanel&gt;

```
<ExpansionPanel>
  <ExpansionPanelSummary
    expandIcon={<ExpandMoreIcon />}
    aria-label="${1:Expand}"
    aria-controls="$2-content"
    id="$2-header"
  >
    <Typography $3>$4</Typography>
  </ExpansionPanelSummary>
  <ExpansionPanelDetails>
    $0
  </ExpansionPanelDetails>
</ExpansionPanel>
```

### `mui-form-control-group`: &lt;FormControl&gt; with &lt;FormGroup&gt;

```
<FormControl component=${1:"fieldset"} $2>
  <FormLabel component=${3:"legend"}>$4</FormLabel>
  <FormGroup>
    $0
  </FormGroup>
  <FormHelperText>$5</FormHelperText>
</FormControl>
```

### `mui-form-control`: &lt;FormControl&gt;

```
<FormControl $1>
  <FormLabel>$2</FormLabel>
  $0
  <FormHelperText>$3</FormHelperText>
</FormControl>
```

### `mui-grid-container-center`: &lt;Grid container&gt; with centering

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

### `mui-grid-container-full`: &lt;Grid container&gt; with all props

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

### `mui-grid-container`: &lt;Grid container&gt;

```
<Grid container spacing={${1:1}} $2>
  $0
</Grid>
```

### `mui-grid-list-subheader`: GridList subheader

```
<GridListTile cols={${1:2}} style={{ height: 'auto' }}>
  <ListSubheader component="div">$0</ListSubheader>
</GridListTile>
```

### `mui-grid-list-tilebar`: &lt;GridListTileBar&gt;

```
<GridListTileBar
  title="$1"
  subtitle="$2"
  actionIcon={
    <IconButton aria-label="$3" $4>
      $0
    </IconButton>
  }
/>
```

### `mui-icon-button`: &lt;IconButton&gt;

```
<IconButton
  aria=label="$1"
  onClick={$2}
  $3
>
  $0
</IconButton>
```

### `mui-menu-item`: &lt;MenuItem&gt;

```
<MenuItem onClick={$1} $2>$0</MenuItem>
```

### `mui-menu-popup-state`: &lt;Menu&gt; for material-ui-popup-state

```
<Menu
  id="$1"
  keepMounted
  {...bindMenu(${2:popupState})}
  $3
>
  $0
</Menu>
```

### `mui-menu`: &lt;Menu&gt;

```
<Menu
  id="$1"
  anchorEl={$2}
  keepMounted
  open={Boolean($2)}
  onClose={$3}
  $4
>
  $0
</Menu>
```

### `mui-radio-group`: &lt;FormControl&gt; with &lt;RadioGroup&gt;

```
<FormControl component=${1:"fieldset"} $2>
  <FormLabel component=${3:"legend"}>$4</FormLabel>
  <RadioGroup aria-label="$5" name="$6" value={$7} onChange={$8}>
    $0
  </RadioGroup>
  <FormHelperText>$9</FormHelperText>
</FormControl>
```

### `mui-radio-label-placement`: &lt;Radio&gt; with &lt;FormControlLabel&gt; with labelPlacement

```
<FormControlLabel value="$1" label="$2" labelPlacement="${3:start}" control={<Radio $0 />} />
```

### `mui-radio-label`: &lt;Radio&gt; with &lt;FormControlLabel&gt;

```
<FormControlLabel value="$1" label="$2" control={<Radio $0 />} />
```

### `mui-select-item`: &lt;MenuItem&gt; inside &lt;Select&gt;

```
<MenuItem value={$1} $2>$0</MenuItem>
```

### `mui-slider-continuous`: &lt;Slider&gt; with continuous values

#### Controlled

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

#### Uncontrolled

```
<Slider
  defaultValue={$1}
  aria-labelledby="$2"
  min={$3:0}
  max={$4:100}
  $0
/>
```

### `mui-slider-discrete`: &lt;Slider&gt; with discrete values

#### Controlled

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

#### Uncontrolled

```
<Slider
  defaultValue={$1}
  aria-labelledby="$2"
  step={$3:1}
  marks
  min={$4:0}
  max={$5:100}
  $0
/>
```

### `mui-snackbar-content`: &lt;SnackbarContent&gt;

```
<SnackbarContent
  message="$1"
  action={$2}
/>
```

### `mui-snackbar`: &lt;Snackbar&gt;

```
<Snackbar
  anchorOrigin={{
    vertical: '$1',
    horizontal: '$2',
  }}
  open={$3}
  onClose={$4}
  message="$5"
  action={
    <IconButton size="small" aria-label="close" color="inherit" onClick={$4}>
      <CloseIcon fontSize="small" />
    </IconButton>
  }
/>
```

### `mui-start-adornment`: end &lt;InputAdornment&gt;

```
endAdornment={
  <InputAdornment position="end">
    $0
  </InputAdornment>
}
```

### `mui-step-content`: &lt;Step&gt; with &lt;StepContent&gt;

```
<Step key={$1} completed={$2} $3>
  <StepLabel>$4</StepLabel>
  <StepContent>
  </StepContent>
</Step>
```

### `mui-step-optional`: optional &lt;Step&gt;

```
<Step key={$1} completed={$2} $3>
  <StepLabel
    optional={<Typography variant="caption">${4:Optional}</Typography>}
  >
    $0
  </StepLabel>
</Step>
```

### `mui-step`: &lt;Step&gt;

```
<Step key={$1} completed={$2} $3>
  <StepLabel>$0</StepLabel>
</Step>
```

### `mui-stepper`: &lt;Stepper&gt;

```
<Stepper activeStep={$1}>
  $0
</Stepper>
```

### `mui-swipeable-views`: &lt;SwipeableViews&gt;

```
<SwipeableViews
  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
  index={$1}
  onChangeIndex={$2}
  $3
>
  $0
</SwipeableViews>
```

### `mui-switch-label-placement`: &lt;Switch&gt; with &lt;FormControlLabel&gt; with labelPlacement

#### Controlled

```
<FormControlLabel
  label="$1"
  labelPlacement="${2:start}"
  control={
    <Switch
      value="$3"
      checked={$4}
      onChange={$5}
      $0
    />
  }
/>
```

#### Uncontrolled

```
<FormControlLabel
  label="$1"
  labelPlacement="${2:start}"
  control={
    <Switch
      value="$3"
      defaultChecked="$4"
      $0
    />
  }
/>
```

### `mui-switch-label`: &lt;Switch&gt; with &lt;FormControlLabel&gt;

#### Controlled

```
<FormControlLabel
  label="$1"
  control={
    <Switch
      value="$2"
      checked={$3}
      onChange={$4}
      $0
    />
  }
/>
```

#### Uncontrolled

```
<FormControlLabel
  label="$1"
  control={
    <Switch
      value="$2"
      defaultChecked="$3"
      $0
    />
  }
/>
```

### `mui-switch`: &lt;Switch&gt;

#### Controlled

```
<Switch
  value="$1"
  checked={$2}
  onChange={$3}
  inputProps={{ 'aria-label': '$4' }}
  $0
/>
```

#### Uncontrolled

```
<Switch
  value="$1"
  defaultChecked="$2"
  inputProps={{ 'aria-label': '$3' }}
  $0
/>
```

### `mui-tab-panel`: &lt;TabPanel&gt;

```
<TabPanel value={$1} index={$2} dir={theme.direction} $3>
  $4
</TabPanel>
```

### `mui-tabs-scrollable`: scrollable &lt;Tabs&gt;

```
<AppBar position="static" color="${1:primary}">
  <Tabs
    value={$2}
    onChange={$3}
    aria-label="$4"
    variant="scrollable"
    scrollButtons="${5:auto}"
    $6
  >
    $0
  </Tabs>
</AppBar>
```

### `mui-tabs`: &lt;Tabs&gt;

```
<AppBar position="static" color="${1:primary}">
  <Tabs value={$2} onChange={$3} aria-label="$4" $5>
    $0
  </Tabs>
</AppBar>
```

### `mui-text-field-select`: &lt;TextField select&gt;

#### Controlled

```
<TextField
  id="$1"
  label="$2"
  select
  value={$3}
  onChange={$4}
  $5
>
  $0
</TextFIeld>
```

#### Uncontrolled

```
<TextField
  id="$1"
  label="$2"
  select
  defaultValue={$3}
  $4
>
  $0
</TextFIeld>
```

### `mui-text-field-variant`: &lt;TextField&gt; with variant

#### Controlled

```
<TextField
  id="$1"
  label="$2"
  variant="${3:filled}"
  value={$4}
  onChange={$5}
  $0
/>
```

#### Uncontrolled

```
<TextField
  id="$1"
  label="$2"
  variant="${3:filled}"
  defaultValue={$4}
  $0
/>
```

### `mui-text-field`: &lt;TextField&gt;

#### Controlled

```
<TextField
  id="$1"
  label="$2"
  value={$3}
  onChange={$4}
  $0
/>
```

#### Uncontrolled

```
<TextField
  id="$1"
  label="$2"
  defaultValue={$3}
  $0
/>
```

### `mui-tooltip`: &lt;Tooltip&gt;

```
<Tooltip title="$1">
  $0
</Tooltip>
```

<!-- snippetsend -->
