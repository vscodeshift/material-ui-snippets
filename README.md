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

<!-- snippetsend -->
