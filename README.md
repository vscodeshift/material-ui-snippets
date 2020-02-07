# material-ui-snippets

[![CircleCI](https://circleci.com/gh/vscodeshift/material-ui-snippets.svg?style=svg)](https://circleci.com/gh/vscodeshift/material-ui-snippets)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vscodeshift.material-ui-snippets)](https://marketplace.visualstudio.com/items?itemName=vscodeshift.material-ui-snippets)

Snippets for Material-UI

**Note:** To insert these, you have to **Trigger Suggest** (<kbd>⌃</kbd><kbd>Space</kbd> on macOS) and then type in the name; typing the name and pressing <kbd>Tab</kbd> won't work because these aren't true "snippets".
This is because there's no way for snippets to insert imports at the top of the file or vary based upon extension settings;
I had to provide "completions" instead.

These completions work in **JavaScript React** and **TypeScript React** mode. If you use JSX in `.js` files you will need
to click on **JavaScript** in the bottom right corner of VSCode and **Configure File Association for .js...** to be **JavaScript React**.

# Features

- Works in JSX and TSX
- Automatically adds missing imports when a snippet is inserted (as long as it succeeds in parsing the entire file)
- You can configure whether to use controlled or uncontrolled form controls in the extension settings.

# Snippets

<!-- snippets -->

- [`mui-app-bar-menu`: &lt;AppBar&gt; with menu icon](#mui-app-bar-menu-appbar-with-menu-icon)
- [`mui-app-bar`: &lt;AppBar&gt;](#mui-app-bar-appbar)
- [`mui-bottom-navigation-action`: &lt;BottomNavigationAction&gt;](#mui-bottom-navigation-action-bottomnavigationaction)
- [`mui-bottom-navigation`: &lt;BottomNavigation&gt;](#mui-bottom-navigation-bottomnavigation)
- [`mui-button-group-size`: &lt;ButtonGroup&gt; with size](#mui-button-group-size-buttongroup-with-size)
- [`mui-button-group-vertical`: vertical &lt;ButtonGroup&gt;](#mui-button-group-vertical-vertical-buttongroup)
- [`mui-button-group`: &lt;ButtonGroup&gt;](#mui-button-group-buttongroup)
- [`mui-button-size`: &lt;Button&gt; with size](#mui-button-size-button-with-size)
- [`mui-button-text`: text &lt;Button&gt;](#mui-button-text-text-button)
- [`mui-button-with-icon`: &lt;Button&gt; with icon and label](#mui-button-with-icon-button-with-icon-and-label)
- [`mui-button`: &lt;Button&gt;](#mui-button-button)
- [`mui-card-header`: &lt;CardHeader&gt;](#mui-card-header-cardheader)
- [`mui-card-media`: &lt;CardMedia&gt;](#mui-card-media-cardmedia)
- [`mui-checkbox-label-placement`: &lt;Checkbox&gt; with labelPlacement](#mui-checkbox-label-placement-checkbox-with-labelplacement)
- [`mui-checkbox-label`: &lt;Checkbox&gt; with &lt;FormControlLabel&gt;](#mui-checkbox-label-checkbox-with-formcontrollabel)
- [`mui-container`: &lt;Container&gt;](#mui-container-container)
- [`mui-dialog-simple`: &lt;Dialog&gt;](#mui-dialog-simple-dialog)
- [`mui-dialog`: &lt;Dialog&gt;](#mui-dialog-dialog)
- [`mui-drawer-permanent`: permanent &lt;Drawer&gt;](#mui-drawer-permanent-permanent-drawer)
- [`mui-drawer-persistent`: persistent &lt;Drawer&gt;](#mui-drawer-persistent-persistent-drawer)
- [`mui-drawer-temporary`: temporary &lt;Drawer&gt;](#mui-drawer-temporary-temporary-drawer)
- [`mui-end-adornment`: end &lt;InputAdornment&gt;](#mui-end-adornment-end-inputadornment)
- [`mui-expansion-panel-controlled`: controlled &lt;ExpansionPanel&gt;](#mui-expansion-panel-controlled-controlled-expansionpanel)
- [`mui-expansion-panel`: &lt;ExpansionPanel&gt;](#mui-expansion-panel-expansionpanel)
- [`mui-fab-extended`: &lt;Fab variant="extended"&gt;](#mui-fab-extended-fab-variantextended)
- [`mui-fab`: &lt;Fab&gt;](#mui-fab-fab)
- [`mui-form-control-group`: &lt;FormControl&gt; with &lt;FormGroup&gt;](#mui-form-control-group-formcontrol-with-formgroup)
- [`mui-form-control`: &lt;FormControl&gt;](#mui-form-control-formcontrol)
- [`mui-grid-container-center`: &lt;Grid container&gt; with centering](#mui-grid-container-center-grid-container-with-centering)
- [`mui-grid-container-full`: &lt;Grid container&gt; with all props](#mui-grid-container-full-grid-container-with-all-props)
- [`mui-grid-container`: &lt;Grid container&gt;](#mui-grid-container-grid-container)
- [`mui-grid-list-subheader`: &lt;GridList&gt; subheader](#mui-grid-list-subheader-gridlist-subheader)
- [`mui-grid-list-tilebar`: &lt;GridListTileBar&gt;](#mui-grid-list-tilebar-gridlisttilebar)
- [`mui-icon-button`: &lt;IconButton&gt;](#mui-icon-button-iconbutton)
- [`mui-menu-item`: &lt;MenuItem&gt;](#mui-menu-item-menuitem)
- [`mui-menu-popup-state`: &lt;Menu&gt; for material-ui-popup-state](#mui-menu-popup-state-menu-for-material-ui-popup-state)
- [`mui-menu`: &lt;Menu&gt;](#mui-menu-menu)
- [`mui-radio-group`: &lt;FormControl&gt; with &lt;RadioGroup&gt;](#mui-radio-group-formcontrol-with-radiogroup)
- [`mui-radio-label-placement`: &lt;Radio&gt; with &lt;FormControlLabel&gt; with labelPlacement](#mui-radio-label-placement-radio-with-formcontrollabel-with-labelplacement)
- [`mui-radio-label`: &lt;Radio&gt; with &lt;FormControlLabel&gt;](#mui-radio-label-radio-with-formcontrollabel)
- [`mui-select-item`: &lt;MenuItem&gt; inside &lt;Select&gt;](#mui-select-item-menuitem-inside-select)
- [`mui-slider-continuous`: &lt;Slider&gt; with continuous values](#mui-slider-continuous-slider-with-continuous-values)
- [`mui-slider-discrete`: &lt;Slider&gt; with discrete values](#mui-slider-discrete-slider-with-discrete-values)
- [`mui-snackbar-content`: &lt;SnackbarContent&gt;](#mui-snackbar-content-snackbarcontent)
- [`mui-snackbar`: &lt;Snackbar&gt;](#mui-snackbar-snackbar)
- [`mui-start-adornment`: start &lt;InputAdornment&gt;](#mui-start-adornment-start-inputadornment)
- [`mui-step-content`: &lt;Step&gt; with &lt;StepContent&gt;](#mui-step-content-step-with-stepcontent)
- [`mui-step-optional`: optional &lt;Step&gt;](#mui-step-optional-optional-step)
- [`mui-step`: &lt;Step&gt;](#mui-step-step)
- [`mui-stepper`: &lt;Stepper&gt;](#mui-stepper-stepper)
- [`mui-swipeable-views`: &lt;SwipeableViews&gt;](#mui-swipeable-views-swipeableviews)
- [`mui-switch-label-placement`: &lt;Switch&gt; with &lt;FormControlLabel&gt; with labelPlacement](#mui-switch-label-placement-switch-with-formcontrollabel-with-labelplacement)
- [`mui-switch-label`: &lt;Switch&gt; with &lt;FormControlLabel&gt;](#mui-switch-label-switch-with-formcontrollabel)
- [`mui-switch`: &lt;Switch&gt;](#mui-switch-switch)
- [`mui-tab-panel`: &lt;TabPanel&gt;](#mui-tab-panel-tabpanel)
- [`mui-tabs-scrollable`: scrollable &lt;Tabs&gt;](#mui-tabs-scrollable-scrollable-tabs)
- [`mui-tabs`: &lt;Tabs&gt;](#mui-tabs-tabs)
- [`mui-text-field-more`: &lt;TextField&gt; with more props](#mui-text-field-more-textfield-with-more-props)
- [`mui-text-field-select`: &lt;TextField select&gt;](#mui-text-field-select-textfield-select)
- [`mui-text-field-variant`: &lt;TextField&gt; with variant](#mui-text-field-variant-textfield-with-variant)
- [`mui-text-field`: &lt;TextField&gt;](#mui-text-field-textfield)
- [`mui-tooltip`: &lt;Tooltip&gt;](#mui-tooltip-tooltip)
- [`mui-typography`: &lt;Typography&gt;](#mui-typography-typography)

### `mui-app-bar-menu`: &lt;AppBar&gt; with menu icon

```
<AppBar position="${1|fixed,absolute,relative,static,sticky|}" color="${2|primary,default,inherit,secondary,transparent|}">
  <Toolbar$3>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6"$4>
      $0
    </Typography>
  </Toolbar>
</AppBar>
```

### `mui-app-bar`: &lt;AppBar&gt;

```
<AppBar position="${1|fixed,absolute,relative,static,sticky|}" color="${2|primary,default,inherit,secondary,transparent|}">
  <Toolbar$3>
    <Typography variant="h6"$4>
      $0
    </Typography>
  </Toolbar>
</AppBar>
```

### `mui-bottom-navigation-action`: &lt;BottomNavigationAction&gt;

```
<BottomNavigationAction label="$1" value={$2} icon={$3}$0 />
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

### `mui-button-group-size`: &lt;ButtonGroup&gt; with size

```
<ButtonGroup variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" size="${3|small,medium,large|}" aria-label="$4"$5>
  <Button>$6</Button>
  <Button>$7</Button>
  $0
</ButtonGroup>
```

### `mui-button-group-vertical`: vertical &lt;ButtonGroup&gt;

```
<ButtonGroup orientation="vertical" variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" aria-label="$3"$4>
  <Button>$5</Button>
  <Button>$6</Button>
  $0
</ButtonGroup>
```

### `mui-button-group`: &lt;ButtonGroup&gt;

```
<ButtonGroup variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" aria-label="$3"$4>
  <Button>$5</Button>
  <Button>$6</Button>
  $0
</ButtonGroup>
```

### `mui-button-size`: &lt;Button&gt; with size

```
<Button variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" size="${3|small,medium,large|}"$4>
  $0
</Button>
```

### `mui-button-text`: text &lt;Button&gt;

```
<Button color="${1|default,inherit,primary,secondary|}"$2>
  $0
</Button>
```

### `mui-button-with-icon`: &lt;Button&gt; with icon and label

```
<Button
  variant="${1|text,contained,outlined|}"
  color="${2|default,inherit,primary,secondary|}"
  startIcon={$3}
  $4
>
  $0
</Button>
```

### `mui-button`: &lt;Button&gt;

```
<Button variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}"$3>
  $0
</Button>
```

### `mui-card-header`: &lt;CardHeader&gt;

```
<CardHeader${1:
  avatar={
    <Avatar aria-label="$2"$3>
      $4
    </Avatar>
  \}}${5:
  action={
    <IconButton aria-label="$6"$7>
      ${8:<MoreVertIcon />}
    </IconButton>
  \}}${9:
  title="$10"}${11:
  subheader="$12"}
  $13
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
  labelPlacement="${2|end,start,top,bottom|}"
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
  labelPlacement="${2|end,start,top,bottom|}"
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
<Container maxWidth="${1|xs,sm,md,lg,xl|}"$2>
  $0
</Container>
```

### `mui-dialog-simple`: &lt;Dialog&gt;

```
<Dialog open={$1} onClose={$2} aria-labelledby="$3">
  ${4:<DialogTitle id="$3">$5</DialogTitle>}
  $0
</Dialog>
```

### `mui-dialog`: &lt;Dialog&gt;

```
<Dialog open={$1} onClose={$2} aria-labelledby="$3">${4:
  <DialogTitle id="$3">$5</DialogTitle>}${6:
  <DialogContent>
    ${7:<DialogContentText>
      $8
    </DialogContentText>}
  </DialogContent>}${9:
  <DialogActions>
    <Button onClick={$2\} color="${10|default,inherit,primary,secondary|}">
      ${11:Cancel}
    </Button>
  </DialogActions>}
</Dialog>
```

### `mui-drawer-permanent`: permanent &lt;Drawer&gt;

```
<Drawer
  variant="permanent"
  anchor="${1|left,right,top,bottom|}"
  $2
>
  $0
</Drawer>
```

### `mui-drawer-persistent`: persistent &lt;Drawer&gt;

```
<Drawer
  variant="persistent"
  anchor="${1|left,right,top,bottom|}"
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
  anchor="${1|left,right,top,bottom|}"
  open={$2}
  onClose={$3}
  $4
>
  $0
</Drawer>
```

### `mui-end-adornment`: end &lt;InputAdornment&gt;

```
endAdornment={
  <InputAdornment position="end">
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

### `mui-fab-extended`: &lt;Fab variant="extended"&gt;

```
<Fab variant="extended" color=${1|default,inherit,primary,secondary|}$2>
  <Box marginRight={1}>
    <$3Icon />
  </Box>
  $0
</Fab>
```

### `mui-fab`: &lt;Fab&gt;

```
<Fab color="${1|default,inherit,primary,secondary|}" aria-label="$2"$3>
  <$4Icon />
</Fab>
```

### `mui-form-control-group`: &lt;FormControl&gt; with &lt;FormGroup&gt;

```
<FormControl component=${1:"fieldset"}$2>
  <FormLabel component=${3:"legend"}>$4</FormLabel>
  <FormGroup>
    $0
  </FormGroup>
  <FormHelperText>$5</FormHelperText>
</FormControl>
```

### `mui-form-control`: &lt;FormControl&gt;

```
<FormControl$1>
  <FormLabel>$2</FormLabel>
  $0
  <FormHelperText>$3</FormHelperText>
</FormControl>
```

### `mui-grid-container-center`: &lt;Grid container&gt; with centering

```
<Grid
  container
  spacing={${1:1}}${2:
  direction="${3|row,row-reverse,column,column-reverse|}"}
  justify="${4:center}"
  alignItems="${5:center}"
  alignContent="${6:center}"${7:
  wrap="${8|nowrap,wrap,wrap-reverse|}"}
  $9
>
  $0
</Grid>
```

### `mui-grid-container-full`: &lt;Grid container&gt; with all props

```
<Grid
  container${1:
  spacing={${2:1}\}}${3:
  direction="${4|row,row-reverse,column,column-reverse|}"}${5:
  justify="${6|flex-start,center,flex-end,space-between,space-around,space-evenly|}"}${7:
  alignItems="${8|flex-start,center,flex-end,stretch,baseline|}"}${9:
  alignContent="${10|stretch,center,flex-start,flex-end,space-between,space-around|}"}${11:
  wrap="${12|nowrap,wrap,wrap-reverse|}"}
  $13
>
  $0
</Grid>
```

### `mui-grid-container`: &lt;Grid container&gt;

```
<Grid container spacing={${1:1}}$2>
  $0
</Grid>
```

### `mui-grid-list-subheader`: &lt;GridList&gt; subheader

```
<GridListTile cols={${1:2}} style={{ height: 'auto' }}>
  <ListSubheader component="div">$0</ListSubheader>
</GridListTile>
```

### `mui-grid-list-tilebar`: &lt;GridListTileBar&gt;

```
<GridListTileBar${1:
  title="$2"}${3:
  subtitle="$4"}${5:
  actionIcon={
    <IconButton aria-label="$6"$7>
      $0
    </IconButton>
  \}}
/>
```

### `mui-icon-button`: &lt;IconButton&gt;

```
<IconButton aria-label="$1" onClick={$2}$3>
  $0
</IconButton>
```

### `mui-menu-item`: &lt;MenuItem&gt;

```
<MenuItem onClick={$1}$2>$0</MenuItem>
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
<FormControl component=${1:"fieldset"}$2>
  <FormLabel component=${3:"legend"}>$4</FormLabel>
  <RadioGroup aria-label="$5" name="$6" value={$7} onChange={$8}>
    $0
  </RadioGroup>
  <FormHelperText>$9</FormHelperText>
</FormControl>
```

### `mui-radio-label-placement`: &lt;Radio&gt; with &lt;FormControlLabel&gt; with labelPlacement

```
<FormControlLabel value="$1" label="$2" labelPlacement="${3|end,start,top,bottom|}" control={<Radio $0 />} />
```

### `mui-radio-label`: &lt;Radio&gt; with &lt;FormControlLabel&gt;

```
<FormControlLabel value="$1" label="$2" control={<Radio $0 />} />
```

### `mui-select-item`: &lt;MenuItem&gt; inside &lt;Select&gt;

```
<MenuItem value={$1}$2>$0</MenuItem>
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
  message="$5"${6:
  action={
    <IconButton size="small" aria-label="close" color="inherit" onClick={$4\}>
      <CloseIcon fontSize="small" />
    </IconButton>
  \}}
/>
```

### `mui-start-adornment`: start &lt;InputAdornment&gt;

```
startAdornment={
  <InputAdornment position="start">
    $0
  </InputAdornment>
}
```

### `mui-step-content`: &lt;Step&gt; with &lt;StepContent&gt;

```
<Step key={$1} completed={$2}$3>
  <StepLabel>$4</StepLabel>
  <StepContent>
  </StepContent>
</Step>
```

### `mui-step-optional`: optional &lt;Step&gt;

```
<Step key={$1} completed={$2}$3>
  <StepLabel
    optional={<Typography variant="caption">${4:Optional}</Typography>}
  >
    $0
  </StepLabel>
</Step>
```

### `mui-step`: &lt;Step&gt;

```
<Step key={$1} completed={$2}$3>
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
  labelPlacement="${2|end,start,top,bottom|}"
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
  labelPlacement="${2|end,start,top,bottom|}"
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
<TabPanel value={$1} index={$2}${3: dir={theme.direction\}}$4>
  $5
</TabPanel>
```

### `mui-tabs-scrollable`: scrollable &lt;Tabs&gt;

```
<AppBar position="static" color="${1|primary,default,inherit,secondary,transparent|}"$2>
  <Tabs
    value={$3}
    onChange={$4}
    aria-label="$5"
    variant="scrollable"
    scrollButtons="${6:auto}"
    $7
  >
    $0
  </Tabs>
</AppBar>
```

### `mui-tabs`: &lt;Tabs&gt;

```
<AppBar position="static" color="${1|primary,default,inherit,secondary,transparent|}"$2>
  <Tabs value={$3} onChange={$4} aria-label="$5" $6>
    $0
  </Tabs>
</AppBar>
```

### `mui-text-field-more`: &lt;TextField&gt; with more props

#### Controlled

```
<TextField
  id="$1"
  label="$2"${3:
  variant="${4|standard,outlined,filled|}"}${5:
  color="${6|primary,secondary|}"}${7:
  margin="${8|none,dense,normal|}"}${9:
  size="${10|small,medium|}"}
  value={$11}
  onChange={$12}
  $0
/>
```

#### Uncontrolled

```
<TextField
  id="$1"
  label="$2"${3:
  variant="${4|standard,outlined,filled|}"}${5:
  color="${6|primary,secondary|}"}${7:
  margin="${8|none,dense,normal|}"}${9:
  size="${10|small,medium|}"}
  defaultValue={$11}
  $0
/>
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
</TextField>
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
</TextField>
```

### `mui-text-field-variant`: &lt;TextField&gt; with variant

#### Controlled

```
<TextField
  id="$1"
  label="$2"
  variant="${3|standard,outlined,filled|}"
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
  variant="${3|standard,outlined,filled|}"
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
<Tooltip title="$1"$2>
  $TM_SELECTED_TEXT$0
</Tooltip>
```

### `mui-typography`: &lt;Typography&gt;

```
<Typography variant="${1|h1,h2,h3,h4,h5,h6,subtitle1,subtitle2,body1,body2,caption,button,overline,srOnly,inherit|}"${2: color="${3|initial,inherit,primary,secondary,textPrimary,textSecondary,error|}"}$4>$TM_SELECTED_TEXT$0</Typography>
```

<!-- snippetsend -->
