# material-ui-snippets

[![CircleCI](https://circleci.com/gh/vscodeshift/material-ui-snippets.svg?style=svg)](https://circleci.com/gh/vscodeshift/material-ui-snippets)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vscodeshift.material-ui-snippets)](https://marketplace.visualstudio.com/items?itemName=vscodeshift.material-ui-snippets)

Snippets for Material-UI

**Note:** To insert these, you have to **Trigger Suggest** (<kbd>⌃</kbd><kbd>Space</kbd> on macOS) and then type in the name; or you can
enable the **Editor: Tab Completion** setting, then type the name of the
snippet and press <kbd>Tab</kbd>.

These snippets work in **JavaScript React** and **TypeScript React** mode. If you use JSX in `.js` files you will need
to click on **JavaScript** in the bottom right corner of VSCode and **Configure File Association for .js...** to be **JavaScript React**.

# Where did my snippets go?

I just convered all snippet names from kebab-case to camelCase. I released this in a new major version (3.0), but I'm
worried VSCode will automatically upgrade anyway and confuse some people...if so sorry for the thrash, the camelCase
names make it possible to use tab completion so I hope it makes them easier for you to use.

# Features

- Works in JSX and TSX
- Automatically adds missing imports when a snippet is inserted (as long as it succeeds in parsing the entire file)
- You can configure whether to use controlled or uncontrolled form controls in the extension settings.

# Settings

## Form Control Mode

- controlled - inserts `value` and `onChange` properties
- uncontrolled - inserts `defaultValue` property

## Import Paths

- auto - uses top level if other top level imports are found, second level otherwise
- top level - `import { Button } from '@material-ui/core'`
- second level - `import Button from '@material-ui/core/Button'`

# Snippets

<!-- snippets -->

- [`muiAppBar`: &lt;AppBar&gt;](#muiappbar-appbar)
- [`muiAppBarMenu`: &lt;AppBar&gt; with menu icon](#muiappbarmenu-appbar-with-menu-icon)
- [`muiBottomNavigation`: &lt;BottomNavigation&gt;](#muibottomnavigation-bottomnavigation)
- [`muiBottomNavigationAction`: &lt;BottomNavigationAction&gt;](#muibottomnavigationaction-bottomnavigationaction)
- [`muiButton`: &lt;Button&gt;](#muibutton-button)
- [`muiButtonGroup`: &lt;ButtonGroup&gt;](#muibuttongroup-buttongroup)
- [`muiButtonGroupSize`: &lt;ButtonGroup&gt; with size](#muibuttongroupsize-buttongroup-with-size)
- [`muiButtonGroupVertical`: vertical &lt;ButtonGroup&gt;](#muibuttongroupvertical-vertical-buttongroup)
- [`muiButtonSize`: &lt;Button&gt; with size](#muibuttonsize-button-with-size)
- [`muiButtonText`: text &lt;Button&gt;](#muibuttontext-text-button)
- [`muiButtonWithIcon`: &lt;Button&gt; with icon and label](#muibuttonwithicon-button-with-icon-and-label)
- [`muiCardHeader`: &lt;CardHeader&gt;](#muicardheader-cardheader)
- [`muiCardMedia`: &lt;CardMedia&gt;](#muicardmedia-cardmedia)
- [`muiCheckboxLabel`: &lt;Checkbox&gt; with &lt;FormControlLabel&gt;](#muicheckboxlabel-checkbox-with-formcontrollabel)
- [`muiCheckboxLabelPlacement`: &lt;Checkbox&gt; with labelPlacement](#muicheckboxlabelplacement-checkbox-with-labelplacement)
- [`muiContainer`: &lt;Container&gt;](#muicontainer-container)
- [`muiDialog`: &lt;Dialog&gt;](#muidialog-dialog)
- [`muiDialogSimple`: &lt;Dialog&gt;](#muidialogsimple-dialog)
- [`muiDrawerPermanent`: permanent &lt;Drawer&gt;](#muidrawerpermanent-permanent-drawer)
- [`muiDrawerPersistent`: persistent &lt;Drawer&gt;](#muidrawerpersistent-persistent-drawer)
- [`muiDrawerTemporary`: temporary &lt;Drawer&gt;](#muidrawertemporary-temporary-drawer)
- [`muiEndAdornment`: end &lt;InputAdornment&gt;](#muiendadornment-end-inputadornment)
- [`muiExpansionPanel`: &lt;ExpansionPanel&gt;](#muiexpansionpanel-expansionpanel)
- [`muiExpansionPanelControlled`: controlled &lt;ExpansionPanel&gt;](#muiexpansionpanelcontrolled-controlled-expansionpanel)
- [`muiFab`: &lt;Fab&gt;](#muifab-fab)
- [`muiFabExtended`: &lt;Fab variant="extended"&gt;](#muifabextended-fab-variantextended)
- [`muiFormControl`: &lt;FormControl&gt;](#muiformcontrol-formcontrol)
- [`muiFormControlGroup`: &lt;FormControl&gt; with &lt;FormGroup&gt;](#muiformcontrolgroup-formcontrol-with-formgroup)
- [`muiGridContainer`: &lt;Grid container&gt;](#muigridcontainer-grid-container)
- [`muiGridContainerCenter`: &lt;Grid container&gt; with centering](#muigridcontainercenter-grid-container-with-centering)
- [`muiGridContainerFull`: &lt;Grid container&gt; with all props](#muigridcontainerfull-grid-container-with-all-props)
- [`muiGridListSubheader`: &lt;GridList&gt; subheader](#muigridlistsubheader-gridlist-subheader)
- [`muiGridListTilebar`: &lt;GridListTileBar&gt;](#muigridlisttilebar-gridlisttilebar)
- [`muiIconButton`: &lt;IconButton&gt;](#muiiconbutton-iconbutton)
- [`muiMenu`: &lt;Menu&gt;](#muimenu-menu)
- [`muiMenuItem`: &lt;MenuItem&gt;](#muimenuitem-menuitem)
- [`muiMenuPopupState`: &lt;Menu&gt; for material-ui-popup-state](#muimenupopupstate-menu-for-material-ui-popup-state)
- [`muiRadioGroup`: &lt;FormControl&gt; with &lt;RadioGroup&gt;](#muiradiogroup-formcontrol-with-radiogroup)
- [`muiRadioLabel`: &lt;Radio&gt; with &lt;FormControlLabel&gt;](#muiradiolabel-radio-with-formcontrollabel)
- [`muiRadioLabelPlacement`: &lt;Radio&gt; with &lt;FormControlLabel&gt; with labelPlacement](#muiradiolabelplacement-radio-with-formcontrollabel-with-labelplacement)
- [`muiSelectItem`: &lt;MenuItem&gt; inside &lt;Select&gt;](#muiselectitem-menuitem-inside-select)
- [`muiSliderContinuous`: &lt;Slider&gt; with continuous values](#muislidercontinuous-slider-with-continuous-values)
- [`muiSliderDiscrete`: &lt;Slider&gt; with discrete values](#muisliderdiscrete-slider-with-discrete-values)
- [`muiSnackbar`: &lt;Snackbar&gt;](#muisnackbar-snackbar)
- [`muiSnackbarContent`: &lt;SnackbarContent&gt;](#muisnackbarcontent-snackbarcontent)
- [`muiStartAdornment`: start &lt;InputAdornment&gt;](#muistartadornment-start-inputadornment)
- [`muiStep`: &lt;Step&gt;](#muistep-step)
- [`muiStepContent`: &lt;Step&gt; with &lt;StepContent&gt;](#muistepcontent-step-with-stepcontent)
- [`muiStepOptional`: optional &lt;Step&gt;](#muistepoptional-optional-step)
- [`muiStepper`: &lt;Stepper&gt;](#muistepper-stepper)
- [`muiSwipeableViews`: &lt;SwipeableViews&gt;](#muiswipeableviews-swipeableviews)
- [`muiSwitch`: &lt;Switch&gt;](#muiswitch-switch)
- [`muiSwitchLabel`: &lt;Switch&gt; with &lt;FormControlLabel&gt;](#muiswitchlabel-switch-with-formcontrollabel)
- [`muiSwitchLabelPlacement`: &lt;Switch&gt; with &lt;FormControlLabel&gt; with labelPlacement](#muiswitchlabelplacement-switch-with-formcontrollabel-with-labelplacement)
- [`muiTabPanel`: &lt;TabPanel&gt;](#muitabpanel-tabpanel)
- [`muiTabs`: &lt;Tabs&gt;](#muitabs-tabs)
- [`muiTabsScrollable`: scrollable &lt;Tabs&gt;](#muitabsscrollable-scrollable-tabs)
- [`muiTextField`: &lt;TextField&gt;](#muitextfield-textfield)
- [`muiTextFieldMore`: &lt;TextField&gt; with more props](#muitextfieldmore-textfield-with-more-props)
- [`muiTextFieldSelect`: &lt;TextField select&gt;](#muitextfieldselect-textfield-select)
- [`muiTextFieldVariant`: &lt;TextField&gt; with variant](#muitextfieldvariant-textfield-with-variant)
- [`muiTooltip`: &lt;Tooltip&gt;](#muitooltip-tooltip)
- [`muiTypography`: &lt;Typography&gt;](#muitypography-typography)

### `muiAppBar`: &lt;AppBar&gt;

```
<AppBar position="${1|fixed,absolute,relative,static,sticky|}" color="${2|primary,default,inherit,secondary,transparent|}">
  <Toolbar$3>
    <Typography variant="h6"$4>
      $0
    </Typography>
  </Toolbar>
</AppBar>
```

### `muiAppBarMenu`: &lt;AppBar&gt; with menu icon

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

### `muiBottomNavigation`: &lt;BottomNavigation&gt;

```
<BottomNavigation
  value={$1}
  onChange={$2}
  $3
>
  $0
<BottomNavigation>
```

### `muiBottomNavigationAction`: &lt;BottomNavigationAction&gt;

```
<BottomNavigationAction label="$1" value={$2} icon={$3}$0 />
```

### `muiButton`: &lt;Button&gt;

```
<Button variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}"$3>
  $0
</Button>
```

### `muiButtonGroup`: &lt;ButtonGroup&gt;

```
<ButtonGroup variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" aria-label="$3"$4>
  <Button>$5</Button>
  <Button>$6</Button>
  $0
</ButtonGroup>
```

### `muiButtonGroupSize`: &lt;ButtonGroup&gt; with size

```
<ButtonGroup variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" size="${3|small,medium,large|}" aria-label="$4"$5>
  <Button>$6</Button>
  <Button>$7</Button>
  $0
</ButtonGroup>
```

### `muiButtonGroupVertical`: vertical &lt;ButtonGroup&gt;

```
<ButtonGroup orientation="vertical" variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" aria-label="$3"$4>
  <Button>$5</Button>
  <Button>$6</Button>
  $0
</ButtonGroup>
```

### `muiButtonSize`: &lt;Button&gt; with size

```
<Button variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" size="${3|small,medium,large|}"$4>
  $0
</Button>
```

### `muiButtonText`: text &lt;Button&gt;

```
<Button color="${1|default,inherit,primary,secondary|}"$2>
  $0
</Button>
```

### `muiButtonWithIcon`: &lt;Button&gt; with icon and label

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

### `muiCardHeader`: &lt;CardHeader&gt;

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

### `muiCardMedia`: &lt;CardMedia&gt;

```
<CardMedia
  title="$1"
  image=$2
/>
```

### `muiCheckboxLabel`: &lt;Checkbox&gt; with &lt;FormControlLabel&gt;

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

### `muiCheckboxLabelPlacement`: &lt;Checkbox&gt; with labelPlacement

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

### `muiContainer`: &lt;Container&gt;

```
<Container maxWidth="${1|xs,sm,md,lg,xl|}"$2>
  $0
</Container>
```

### `muiDialog`: &lt;Dialog&gt;

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

### `muiDialogSimple`: &lt;Dialog&gt;

```
<Dialog open={$1} onClose={$2} aria-labelledby="$3">
  ${4:<DialogTitle id="$3">$5</DialogTitle>}
  $0
</Dialog>
```

### `muiDrawerPermanent`: permanent &lt;Drawer&gt;

```
<Drawer
  variant="permanent"
  anchor="${1|left,right,top,bottom|}"
  $2
>
  $0
</Drawer>
```

### `muiDrawerPersistent`: persistent &lt;Drawer&gt;

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

### `muiDrawerTemporary`: temporary &lt;Drawer&gt;

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

### `muiEndAdornment`: end &lt;InputAdornment&gt;

```
endAdornment={
  <InputAdornment position="end">
    $0
  </InputAdornment>
}
```

### `muiExpansionPanel`: &lt;ExpansionPanel&gt;

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

### `muiExpansionPanelControlled`: controlled &lt;ExpansionPanel&gt;

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

### `muiFab`: &lt;Fab&gt;

```
<Fab color="${1|default,inherit,primary,secondary|}" aria-label="$2"$3>
  <$4Icon />
</Fab>
```

### `muiFabExtended`: &lt;Fab variant="extended"&gt;

```
<Fab variant="extended" color=${1|default,inherit,primary,secondary|}$2>
  <Box marginRight={1}>
    <$3Icon />
  </Box>
  $0
</Fab>
```

### `muiFormControl`: &lt;FormControl&gt;

```
<FormControl$1>
  <FormLabel>$2</FormLabel>
  $0
  <FormHelperText>$3</FormHelperText>
</FormControl>
```

### `muiFormControlGroup`: &lt;FormControl&gt; with &lt;FormGroup&gt;

```
<FormControl component=${1:"fieldset"}$2>
  <FormLabel component=${3:"legend"}>$4</FormLabel>
  <FormGroup>
    $0
  </FormGroup>
  <FormHelperText>$5</FormHelperText>
</FormControl>
```

### `muiGridContainer`: &lt;Grid container&gt;

```
<Grid container spacing={${1:1}}$2>
  $0
</Grid>
```

### `muiGridContainerCenter`: &lt;Grid container&gt; with centering

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

### `muiGridContainerFull`: &lt;Grid container&gt; with all props

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

### `muiGridListSubheader`: &lt;GridList&gt; subheader

```
<GridListTile cols={${1:2}} style={{ height: 'auto' }}>
  <ListSubheader component="div">$0</ListSubheader>
</GridListTile>
```

### `muiGridListTilebar`: &lt;GridListTileBar&gt;

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

### `muiIconButton`: &lt;IconButton&gt;

```
<IconButton aria-label="$1" onClick={$2}$3>
  $0
</IconButton>
```

### `muiMenu`: &lt;Menu&gt;

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

### `muiMenuItem`: &lt;MenuItem&gt;

```
<MenuItem onClick={$1}$2>$0</MenuItem>
```

### `muiMenuPopupState`: &lt;Menu&gt; for material-ui-popup-state

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

### `muiRadioGroup`: &lt;FormControl&gt; with &lt;RadioGroup&gt;

```
<FormControl component=${1:"fieldset"}$2>
  <FormLabel component=${3:"legend"}>$4</FormLabel>
  <RadioGroup aria-label="$5" name="$6" value={$7} onChange={$8}>
    $0
  </RadioGroup>
  <FormHelperText>$9</FormHelperText>
</FormControl>
```

### `muiRadioLabel`: &lt;Radio&gt; with &lt;FormControlLabel&gt;

```
<FormControlLabel value="$1" label="$2" control={<Radio $0 />} />
```

### `muiRadioLabelPlacement`: &lt;Radio&gt; with &lt;FormControlLabel&gt; with labelPlacement

```
<FormControlLabel value="$1" label="$2" labelPlacement="${3|end,start,top,bottom|}" control={<Radio $0 />} />
```

### `muiSelectItem`: &lt;MenuItem&gt; inside &lt;Select&gt;

```
<MenuItem value={$1}$2>$0</MenuItem>
```

### `muiSliderContinuous`: &lt;Slider&gt; with continuous values

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

### `muiSliderDiscrete`: &lt;Slider&gt; with discrete values

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

### `muiSnackbar`: &lt;Snackbar&gt;

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

### `muiSnackbarContent`: &lt;SnackbarContent&gt;

```
<SnackbarContent
  message="$1"
  action={$2}
/>
```

### `muiStartAdornment`: start &lt;InputAdornment&gt;

```
startAdornment={
  <InputAdornment position="start">
    $0
  </InputAdornment>
}
```

### `muiStep`: &lt;Step&gt;

```
<Step key={$1} completed={$2}$3>
  <StepLabel>$0</StepLabel>
</Step>
```

### `muiStepContent`: &lt;Step&gt; with &lt;StepContent&gt;

```
<Step key={$1} completed={$2}$3>
  <StepLabel>$4</StepLabel>
  <StepContent>
  </StepContent>
</Step>
```

### `muiStepOptional`: optional &lt;Step&gt;

```
<Step key={$1} completed={$2}$3>
  <StepLabel
    optional={<Typography variant="caption">${4:Optional}</Typography>}
  >
    $0
  </StepLabel>
</Step>
```

### `muiStepper`: &lt;Stepper&gt;

```
<Stepper activeStep={$1}>
  $0
</Stepper>
```

### `muiSwipeableViews`: &lt;SwipeableViews&gt;

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

### `muiSwitch`: &lt;Switch&gt;

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

### `muiSwitchLabel`: &lt;Switch&gt; with &lt;FormControlLabel&gt;

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

### `muiSwitchLabelPlacement`: &lt;Switch&gt; with &lt;FormControlLabel&gt; with labelPlacement

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

### `muiTabPanel`: &lt;TabPanel&gt;

```
<TabPanel value={$1} index={$2}${3: dir={theme.direction\}}$4>
  $5
</TabPanel>
```

### `muiTabs`: &lt;Tabs&gt;

```
<AppBar position="static" color="${1|primary,default,inherit,secondary,transparent|}"$2>
  <Tabs value={$3} onChange={$4} aria-label="$5" $6>
    $0
  </Tabs>
</AppBar>
```

### `muiTabsScrollable`: scrollable &lt;Tabs&gt;

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

### `muiTextField`: &lt;TextField&gt;

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

### `muiTextFieldMore`: &lt;TextField&gt; with more props

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

### `muiTextFieldSelect`: &lt;TextField select&gt;

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

### `muiTextFieldVariant`: &lt;TextField&gt; with variant

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

### `muiTooltip`: &lt;Tooltip&gt;

```
<Tooltip title="$1"$2>
  $TM_SELECTED_TEXT$0
</Tooltip>
```

### `muiTypography`: &lt;Typography&gt;

```
<Typography variant="${1|h1,h2,h3,h4,h5,h6,subtitle1,subtitle2,body1,body2,caption,button,overline,srOnly,inherit|}"${2: color="${3|initial,inherit,primary,secondary,textPrimary,textSecondary,error|}"}$4>$TM_SELECTED_TEXT$0</Typography>
```

<!-- snippetsend -->
