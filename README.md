# Snippets for MUI

![demo](/docs/snippet.gif?raw=true)

[![CircleCI](https://circleci.com/gh/vscodeshift/material-ui-snippets.svg?style=svg)](https://circleci.com/gh/vscodeshift/material-ui-snippets)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vscodeshift.material-ui-snippets)](https://marketplace.visualstudio.com/items?itemName=vscodeshift.material-ui-snippets)

**Note:** There are two ways to insert these:

- **Trigger Suggest** (<kbd>⌃</kbd><kbd>Space</kbd> on macOS) and then type in the name; or you can
  enable the **Editor: Tab Completion** setting, then type the name of the
  snippet and press <kbd>Tab</kbd>.
- Execute the corresponding **editor commands** like `MUI: insert <Button>` (or even better, make keybindings for them!).

**Performance Warning:** Currently, the suggestions can cause performance issues due to VSCode API limitations.
After the API is improved in an upcoming release I can fix these performance issues. Until then, the workaround
is to either disable adding automatic imports for snippets (**Settings &gt; Extensions &gt; MUI Snippets &gt; Add Completion Imports**)
or use the commands to insert snippets instead of suggestions.

# Beta version

These are the docs for the beta version that supports the MUI v5 release candidate. For v4, see https://github.com/vscodeshift/material-ui-snippets.

# Features

- Works in JS/X and TSX
- Automatically adds missing imports when a snippet is inserted (as long as it succeeds in parsing the entire file)
- You can configure whether to use controlled or uncontrolled form controls in the extension settings.

# Settings

## Form Control Mode

- controlled - inserts `value` and `onChange` properties
- uncontrolled - inserts `defaultValue` property

## Import Paths

- auto - uses top level if other top level imports are found, second level otherwise
- top level - `import { Button } from '@mui/material'`
- second level - `import Button from '@mui/material/Button'`

# Snippets

<!-- snippets -->

- [`muiAppBar`: MUI &lt;AppBar&gt;](#muiappbar-mui-appbar)
- [`muiAppBarMenu`: MUI &lt;AppBar&gt; with menu icon](#muiappbarmenu-mui-appbar-with-menu-icon)
- [`muiBottomNavigation`: MUI &lt;BottomNavigation&gt;](#muibottomnavigation-mui-bottomnavigation)
- [`muiBottomNavigationAction`: MUI &lt;BottomNavigationAction&gt;](#muibottomnavigationaction-mui-bottomnavigationaction)
- [`muiButton`: MUI &lt;Button&gt;](#muibutton-mui-button)
- [`muiButtonGroup`: MUI &lt;ButtonGroup&gt;](#muibuttongroup-mui-buttongroup)
- [`muiButtonGroupSize`: MUI &lt;ButtonGroup&gt; with size](#muibuttongroupsize-mui-buttongroup-with-size)
- [`muiButtonGroupVertical`: MUI vertical &lt;ButtonGroup&gt;](#muibuttongroupvertical-mui-vertical-buttongroup)
- [`muiButtonSize`: MUI &lt;Button&gt; with size](#muibuttonsize-mui-button-with-size)
- [`muiButtonText`: MUI text &lt;Button&gt;](#muibuttontext-mui-text-button)
- [`muiButtonWithIcon`: MUI &lt;Button&gt; with icon and label](#muibuttonwithicon-mui-button-with-icon-and-label)
- [`muiCardHeader`: MUI &lt;CardHeader&gt;](#muicardheader-mui-cardheader)
- [`muiCardMedia`: MUI &lt;CardMedia&gt;](#muicardmedia-mui-cardmedia)
- [`muiCheckboxLabel`: MUI &lt;Checkbox&gt; with &lt;FormControlLabel&gt;](#muicheckboxlabel-mui-checkbox-with-formcontrollabel)
- [`muiCheckboxLabelPlacement`: MUI &lt;Checkbox&gt; with labelPlacement](#muicheckboxlabelplacement-mui-checkbox-with-labelplacement)
- [`muiContainer`: MUI &lt;Container&gt;](#muicontainer-mui-container)
- [`muiDialog`: MUI &lt;Dialog&gt;](#muidialog-mui-dialog)
- [`muiDialogSimple`: MUI &lt;Dialog&gt;](#muidialogsimple-mui-dialog)
- [`muiDrawerPermanent`: MUI permanent &lt;Drawer&gt;](#muidrawerpermanent-mui-permanent-drawer)
- [`muiDrawerPersistent`: MUI persistent &lt;Drawer&gt;](#muidrawerpersistent-mui-persistent-drawer)
- [`muiDrawerTemporary`: MUI temporary &lt;Drawer&gt;](#muidrawertemporary-mui-temporary-drawer)
- [`muiEndAdornment`: MUI end &lt;InputAdornment&gt;](#muiendadornment-mui-end-inputadornment)
- [`muiExpansionPanel`: MUI &lt;ExpansionPanel&gt;](#muiexpansionpanel-mui-expansionpanel)
- [`muiExpansionPanelControlled`: MUI controlled &lt;ExpansionPanel&gt;](#muiexpansionpanelcontrolled-mui-controlled-expansionpanel)
- [`muiFab`: MUI &lt;Fab&gt;](#muifab-mui-fab)
- [`muiFabExtended`: MUI &lt;Fab variant="extended"&gt;](#muifabextended-mui-fab-variantextended)
- [`muiFormControl`: MUI &lt;FormControl&gt;](#muiformcontrol-mui-formcontrol)
- [`muiFormControlGroup`: MUI &lt;FormControl&gt; with &lt;FormGroup&gt;](#muiformcontrolgroup-mui-formcontrol-with-formgroup)
- [`muiGridContainer`: MUI &lt;Grid container&gt;](#muigridcontainer-mui-grid-container)
- [`muiGridContainerCenter`: MUI &lt;Grid container&gt; with centering](#muigridcontainercenter-mui-grid-container-with-centering)
- [`muiGridContainerFull`: MUI &lt;Grid container&gt; with all props](#muigridcontainerfull-mui-grid-container-with-all-props)
- [`muiGridListSubheader`: MUI &lt;GridList&gt; subheader](#muigridlistsubheader-mui-gridlist-subheader)
- [`muiGridListTilebar`: MUI &lt;GridListTileBar&gt;](#muigridlisttilebar-mui-gridlisttilebar)
- [`muiIconButton`: MUI &lt;IconButton&gt;](#muiiconbutton-mui-iconbutton)
- [`muiMenu`: MUI &lt;Menu&gt;](#muimenu-mui-menu)
- [`muiMenuItem`: MUI &lt;MenuItem&gt;](#muimenuitem-mui-menuitem)
- [`muiMenuPopupState`: MUI &lt;Menu&gt; for material-ui-popup-state](#muimenupopupstate-mui-menu-for-material-ui-popup-state)
- [`muiRadioGroup`: MUI &lt;FormControl&gt; with &lt;RadioGroup&gt;](#muiradiogroup-mui-formcontrol-with-radiogroup)
- [`muiRadioLabel`: MUI &lt;Radio&gt; with &lt;FormControlLabel&gt;](#muiradiolabel-mui-radio-with-formcontrollabel)
- [`muiRadioLabelPlacement`: MUI &lt;Radio&gt; with &lt;FormControlLabel&gt; with labelPlacement](#muiradiolabelplacement-mui-radio-with-formcontrollabel-with-labelplacement)
- [`muiSelectItem`: MUI &lt;MenuItem&gt; inside &lt;Select&gt;](#muiselectitem-mui-menuitem-inside-select)
- [`muiSliderContinuous`: MUI &lt;Slider&gt; with continuous values](#muislidercontinuous-mui-slider-with-continuous-values)
- [`muiSliderDiscrete`: MUI &lt;Slider&gt; with discrete values](#muisliderdiscrete-mui-slider-with-discrete-values)
- [`muiSnackbar`: MUI &lt;Snackbar&gt;](#muisnackbar-mui-snackbar)
- [`muiSnackbarContent`: MUI &lt;SnackbarContent&gt;](#muisnackbarcontent-mui-snackbarcontent)
- [`muiStartAdornment`: MUI start &lt;InputAdornment&gt;](#muistartadornment-mui-start-inputadornment)
- [`muiStep`: MUI &lt;Step&gt;](#muistep-mui-step)
- [`muiStepContent`: MUI &lt;Step&gt; with &lt;StepContent&gt;](#muistepcontent-mui-step-with-stepcontent)
- [`muiStepOptional`: MUI optional &lt;Step&gt;](#muistepoptional-mui-optional-step)
- [`muiStepper`: MUI &lt;Stepper&gt;](#muistepper-mui-stepper)
- [`muiSwipeableViews`: MUI &lt;SwipeableViews&gt;](#muiswipeableviews-mui-swipeableviews)
- [`muiSwitch`: MUI &lt;Switch&gt;](#muiswitch-mui-switch)
- [`muiSwitchLabel`: MUI &lt;Switch&gt; with &lt;FormControlLabel&gt;](#muiswitchlabel-mui-switch-with-formcontrollabel)
- [`muiSwitchLabelPlacement`: MUI &lt;Switch&gt; with &lt;FormControlLabel&gt; with labelPlacement](#muiswitchlabelplacement-mui-switch-with-formcontrollabel-with-labelplacement)
- [`muiTabPanel`: MUI &lt;TabPanel&gt;](#muitabpanel-mui-tabpanel)
- [`muiTabs`: MUI &lt;Tabs&gt;](#muitabs-mui-tabs)
- [`muiTabsScrollable`: MUI scrollable &lt;Tabs&gt;](#muitabsscrollable-mui-scrollable-tabs)
- [`muiTextField`: MUI &lt;TextField&gt;](#muitextfield-mui-textfield)
- [`muiTextFieldMore`: MUI &lt;TextField&gt; with more props](#muitextfieldmore-mui-textfield-with-more-props)
- [`muiTextFieldSelect`: MUI &lt;TextField select&gt;](#muitextfieldselect-mui-textfield-select)
- [`muiTextFieldVariant`: MUI &lt;TextField&gt; with variant](#muitextfieldvariant-mui-textfield-with-variant)
- [`muiTooltip`: MUI &lt;Tooltip&gt;](#muitooltip-mui-tooltip)
- [`muiTypography`: MUI &lt;Typography&gt;](#muitypography-mui-typography)

### `muiAppBar`: MUI &lt;AppBar&gt;

```
<AppBar position="${1|fixed,absolute,relative,static,sticky|}" color="${2|primary,default,inherit,secondary,transparent|}">
  <Toolbar$3>
    <Typography variant="h6"$4>
      $0
    </Typography>
  </Toolbar>
</AppBar>
```

### `muiAppBarMenu`: MUI &lt;AppBar&gt; with menu icon

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

### `muiBottomNavigation`: MUI &lt;BottomNavigation&gt;

```
<BottomNavigation
  value={$1}
  onChange={$2}
  $3
>
  $0
<BottomNavigation>
```

### `muiBottomNavigationAction`: MUI &lt;BottomNavigationAction&gt;

```
<BottomNavigationAction label="$1" value={$2} icon={$3}$0 />
```

### `muiButton`: MUI &lt;Button&gt;

```
<Button variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}"$3>
  $0
</Button>
```

### `muiButtonGroup`: MUI &lt;ButtonGroup&gt;

```
<ButtonGroup variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" aria-label="$3"$4>
  <Button>$5</Button>
  <Button>$6</Button>
  $0
</ButtonGroup>
```

### `muiButtonGroupSize`: MUI &lt;ButtonGroup&gt; with size

```
<ButtonGroup variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" size="${3|small,medium,large|}" aria-label="$4"$5>
  <Button>$6</Button>
  <Button>$7</Button>
  $0
</ButtonGroup>
```

### `muiButtonGroupVertical`: MUI vertical &lt;ButtonGroup&gt;

```
<ButtonGroup orientation="vertical" variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" aria-label="$3"$4>
  <Button>$5</Button>
  <Button>$6</Button>
  $0
</ButtonGroup>
```

### `muiButtonSize`: MUI &lt;Button&gt; with size

```
<Button variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" size="${3|small,medium,large|}"$4>
  $0
</Button>
```

### `muiButtonText`: MUI text &lt;Button&gt;

```
<Button color="${1|default,inherit,primary,secondary|}"$2>
  $0
</Button>
```

### `muiButtonWithIcon`: MUI &lt;Button&gt; with icon and label

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

### `muiCardHeader`: MUI &lt;CardHeader&gt;

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

### `muiCardMedia`: MUI &lt;CardMedia&gt;

```
<CardMedia
  title="$1"
  image=$2
/>
```

### `muiCheckboxLabel`: MUI &lt;Checkbox&gt; with &lt;FormControlLabel&gt;

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

### `muiCheckboxLabelPlacement`: MUI &lt;Checkbox&gt; with labelPlacement

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

### `muiContainer`: MUI &lt;Container&gt;

```
<Container maxWidth="${1|xs,sm,md,lg,xl|}"$2>
  $0
</Container>
```

### `muiDialog`: MUI &lt;Dialog&gt;

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

### `muiDialogSimple`: MUI &lt;Dialog&gt;

```
<Dialog open={$1} onClose={$2} aria-labelledby="$3">
  ${4:<DialogTitle id="$3">$5</DialogTitle>}
  $0
</Dialog>
```

### `muiDrawerPermanent`: MUI permanent &lt;Drawer&gt;

```
<Drawer
  variant="permanent"
  anchor="${1|left,right,top,bottom|}"
  $2
>
  $0
</Drawer>
```

### `muiDrawerPersistent`: MUI persistent &lt;Drawer&gt;

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

### `muiDrawerTemporary`: MUI temporary &lt;Drawer&gt;

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

### `muiEndAdornment`: MUI end &lt;InputAdornment&gt;

```
endAdornment={
  <InputAdornment position="end">
    $0
  </InputAdornment>
}
```

### `muiExpansionPanel`: MUI &lt;ExpansionPanel&gt;

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

### `muiExpansionPanelControlled`: MUI controlled &lt;ExpansionPanel&gt;

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

### `muiFab`: MUI &lt;Fab&gt;

```
<Fab color="${1|default,inherit,primary,secondary|}" aria-label="$2"$3>
  <$4Icon />
</Fab>
```

### `muiFabExtended`: MUI &lt;Fab variant="extended"&gt;

```
<Fab variant="extended" color=${1|default,inherit,primary,secondary|}$2>
  <Box marginRight={1}>
    <$3Icon />
  </Box>
  $0
</Fab>
```

### `muiFormControl`: MUI &lt;FormControl&gt;

```
<FormControl$1>
  <FormLabel>$2</FormLabel>
  $0
  <FormHelperText>$3</FormHelperText>
</FormControl>
```

### `muiFormControlGroup`: MUI &lt;FormControl&gt; with &lt;FormGroup&gt;

```
<FormControl component=${1:"fieldset"}$2>
  <FormLabel component=${3:"legend"}>$4</FormLabel>
  <FormGroup>
    $0
  </FormGroup>
  <FormHelperText>$5</FormHelperText>
</FormControl>
```

### `muiGridContainer`: MUI &lt;Grid container&gt;

```
<Grid container spacing={${1:1}}$2>
  $0
</Grid>
```

### `muiGridContainerCenter`: MUI &lt;Grid container&gt; with centering

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

### `muiGridContainerFull`: MUI &lt;Grid container&gt; with all props

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

### `muiGridListSubheader`: MUI &lt;GridList&gt; subheader

```
<GridListTile cols={${1:2}} style={{ height: 'auto' }}>
  <ListSubheader component="div">$0</ListSubheader>
</GridListTile>
```

### `muiGridListTilebar`: MUI &lt;GridListTileBar&gt;

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

### `muiIconButton`: MUI &lt;IconButton&gt;

```
<IconButton aria-label="$1" onClick={$2}$3>
  $0
</IconButton>
```

### `muiMenu`: MUI &lt;Menu&gt;

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

### `muiMenuItem`: MUI &lt;MenuItem&gt;

```
<MenuItem onClick={$1}$2>$0</MenuItem>
```

### `muiMenuPopupState`: MUI &lt;Menu&gt; for material-ui-popup-state

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

### `muiRadioGroup`: MUI &lt;FormControl&gt; with &lt;RadioGroup&gt;

```
<FormControl component=${1:"fieldset"}$2>
  <FormLabel component=${3:"legend"}>$4</FormLabel>
  <RadioGroup aria-label="$5" name="$6" value={$7} onChange={$8}>
    $0
  </RadioGroup>
  <FormHelperText>$9</FormHelperText>
</FormControl>
```

### `muiRadioLabel`: MUI &lt;Radio&gt; with &lt;FormControlLabel&gt;

```
<FormControlLabel value="$1" label="$2" control={<Radio $0 />} />
```

### `muiRadioLabelPlacement`: MUI &lt;Radio&gt; with &lt;FormControlLabel&gt; with labelPlacement

```
<FormControlLabel value="$1" label="$2" labelPlacement="${3|end,start,top,bottom|}" control={<Radio $0 />} />
```

### `muiSelectItem`: MUI &lt;MenuItem&gt; inside &lt;Select&gt;

```
<MenuItem value={$1}$2>$0</MenuItem>
```

### `muiSliderContinuous`: MUI &lt;Slider&gt; with continuous values

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

### `muiSliderDiscrete`: MUI &lt;Slider&gt; with discrete values

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

### `muiSnackbar`: MUI &lt;Snackbar&gt;

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

### `muiSnackbarContent`: MUI &lt;SnackbarContent&gt;

```
<SnackbarContent
  message="$1"
  action={$2}
/>
```

### `muiStartAdornment`: MUI start &lt;InputAdornment&gt;

```
startAdornment={
  <InputAdornment position="start">
    $0
  </InputAdornment>
}
```

### `muiStep`: MUI &lt;Step&gt;

```
<Step key={$1} completed={$2}$3>
  <StepLabel>$0</StepLabel>
</Step>
```

### `muiStepContent`: MUI &lt;Step&gt; with &lt;StepContent&gt;

```
<Step key={$1} completed={$2}$3>
  <StepLabel>$4</StepLabel>
  <StepContent>
  </StepContent>
</Step>
```

### `muiStepOptional`: MUI optional &lt;Step&gt;

```
<Step key={$1} completed={$2}$3>
  <StepLabel
    optional={<Typography variant="caption">${4:Optional}</Typography>}
  >
    $0
  </StepLabel>
</Step>
```

### `muiStepper`: MUI &lt;Stepper&gt;

```
<Stepper activeStep={$1}>
  $0
</Stepper>
```

### `muiSwipeableViews`: MUI &lt;SwipeableViews&gt;

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

### `muiSwitch`: MUI &lt;Switch&gt;

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

### `muiSwitchLabel`: MUI &lt;Switch&gt; with &lt;FormControlLabel&gt;

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

### `muiSwitchLabelPlacement`: MUI &lt;Switch&gt; with &lt;FormControlLabel&gt; with labelPlacement

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

### `muiTabPanel`: MUI &lt;TabPanel&gt;

```
<TabPanel value={$1} index={$2}${3: dir={theme.direction\}}$4>
  $5
</TabPanel>
```

### `muiTabs`: MUI &lt;Tabs&gt;

```
<AppBar position="static" color="${1|primary,default,inherit,secondary,transparent|}"$2>
  <Tabs value={$3} onChange={$4} aria-label="$5" $6>
    $0
  </Tabs>
</AppBar>
```

### `muiTabsScrollable`: MUI scrollable &lt;Tabs&gt;

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

### `muiTextField`: MUI &lt;TextField&gt;

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

### `muiTextFieldMore`: MUI &lt;TextField&gt; with more props

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

### `muiTextFieldSelect`: MUI &lt;TextField select&gt;

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

### `muiTextFieldVariant`: MUI &lt;TextField&gt; with variant

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

### `muiTooltip`: MUI &lt;Tooltip&gt;

```
<Tooltip title="$1"$2>
  $TM_SELECTED_TEXT$0
</Tooltip>
```

### `muiTypography`: MUI &lt;Typography&gt;

```
<Typography variant="${1|h1,h2,h3,h4,h5,h6,subtitle1,subtitle2,body1,body2,caption,button,overline,srOnly,inherit|}"${2: color="${3|initial,inherit,primary,secondary,textPrimary,textSecondary,error|}"}$4>$TM_SELECTED_TEXT$0</Typography>
```

<!-- snippetsend -->
