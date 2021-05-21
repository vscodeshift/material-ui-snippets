# Snippets for Material-UI

![demo](/docs/snippet.gif?raw=true)

[![CircleCI](https://circleci.com/gh/vscodeshift/material-ui-snippets.svg?style=svg)](https://circleci.com/gh/vscodeshift/material-ui-snippets)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vscodeshift.material-ui-snippets)](https://marketplace.visualstudio.com/items?itemName=vscodeshift.material-ui-snippets)

**Note:** There are two ways to insert these:

- **Trigger Suggest** (<kbd>⌃</kbd><kbd>Space</kbd> on macOS) and then type in the name; or you can
  enable the **Editor: Tab Completion** setting, then type the name of the
  snippet and press <kbd>Tab</kbd>.
- Execute the corresponding **editor commands** like `Material-UI: insert <Button>` (or even better, make keybindings for them!).

**Performance Warning:** Currently, the suggestions can cause performance issues due to VSCode API limitations.
After the API is improved in an upcoming release I can fix these performance issues. Until then, the workaround
is to either disable adding automatic imports for snippets (**Settings &gt; Extensions &gt; Material-UI Snippets &gt; Add Completion Imports**)
or use the commands to insert snippets instead of suggestions.

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
- [`muiContainer`: &lt;Container&gt;](#muicontainer-container)
- [`muiDialog`: &lt;Dialog&gt;](#muidialog-dialog)
- [`muiDialogSimple`: &lt;Dialog&gt;](#muidialogsimple-dialog)
- [`muiDrawerPermanent`: permanent &lt;Drawer&gt;](#muidrawerpermanent-permanent-drawer)
- [`muiDrawerPersistent`: persistent &lt;Drawer&gt;](#muidrawerpersistent-persistent-drawer)
- [`muiDrawerTemporary`: temporary &lt;Drawer&gt;](#muidrawertemporary-temporary-drawer)

### `muiAppBar`: &lt;AppBar&gt;

```
<AppBar
  position="${1|fixed,absolute,relative,static,sticky|}"
  color="${2|primary,default,inherit,secondary,transparent|}"
>
  <Toolbar $3>
    <Typography variant="h6" $4>
      $0
    </Typography>
  </Toolbar>
</AppBar>
```

### `muiAppBarMenu`: &lt;AppBar&gt; with menu icon

```
<AppBar
  position="${1|fixed,absolute,relative,static,sticky|}"
  color="${2|primary,default,inherit,secondary,transparent|}"
>
  <Toolbar $3>
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" $4>
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
</BottomNavigation>
```

### `muiBottomNavigationAction`: &lt;BottomNavigationAction&gt;

```
<BottomNavigationAction
  label="$1"
  value={$2}
  icon={$3}
  $4
/>
```

### `muiButton`: &lt;Button&gt;

```
<Button
  variant="${1|text,contained,outlined|}"
  color="${2|default,inherit,primary,secondary|}"
  $3
>
  $0
</Button>
```

### `muiButtonGroup`: &lt;ButtonGroup&gt;

```
<ButtonGroup variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" aria-label="$3" $4>
  <Button>
    $5
  </Button>
  <Button>
    $6
  </Button>
  $0
</ButtonGroup>
```

### `muiButtonGroupSize`: &lt;ButtonGroup&gt; with size

```
<ButtonGroup variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" size="${3|small,medium,large|}" aria-label="$4" $5>
  <Button>
    $6
  </Button>
  <Button>
    $7
  </Button>
  $0
</ButtonGroup>
```

### `muiButtonGroupVertical`: vertical &lt;ButtonGroup&gt;

```
<ButtonGroup orientation="vertical" variant="${1|text,contained,outlined|}" color="${2|default,inherit,primary,secondary|}" aria-label="$3" $4>
  <Button>
    $5
  </Button>
  <Button>
    $6
  </Button>
  $0
</ButtonGroup>
```

### `muiButtonSize`: &lt;Button&gt; with size

```
<Button
  variant="${1|text,contained,outlined|}"
  color="${2|default,inherit,primary,secondary|}"
  size="${3|small,medium,large|}"
  $4
>
  $0
</Button>
```

### `muiButtonText`: text &lt;Button&gt;

```
<Button
  color="${1|default,inherit,primary,secondary|}"
  $2
>
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
    <Avatar
      aria-label="$2"
      $3
    >
      $4
    </Avatar>
  }}${5:
  action={
    <IconButton
      aria-label="$6"
      $7
    >${8:
      <MoreVertIcon />}
    </IconButton>
  }}${9:
  title="$10"}${11:
  subheader="$12"}
  $13
/>
```

### `muiCardMedia`: &lt;CardMedia&gt;

```
<CardMedia
  title="$1"
  image="$2"
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

### `muiContainer`: &lt;Container&gt;

```
<Container
  maxWidth="${1|xs,sm,md,lg,xl|}"
  $2
>
  $0
</Container>
```

### `muiDialog`: &lt;Dialog&gt;

```
<Dialog open={$1} onClose={$2} aria-labelledby="$3">${4:
  <DialogTitle
    id="$3"
  >
    $5
  </DialogTitle>}${6:
  <DialogContent>${7:
    <DialogContentText>
      $8
    </DialogContentText>}
  </DialogContent>}${9:
  <DialogActions>
    <Button
      onClick={$2}
      color="${10|default,inherit,primary,secondary|}"
    >${11:
      Cancel}
    </Button>
  </DialogActions>}
</Dialog>
```

### `muiDialogSimple`: &lt;Dialog&gt;

```
<Dialog open={$1} onClose={$2} aria-labelledby="$3">$0</Dialog>
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

<!-- snippetsend -->
