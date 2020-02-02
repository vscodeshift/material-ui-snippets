# snippets-extension-skeleton

[![CircleCI](https://circleci.com/gh/vscodeshift/snippets-extension-skeleton.svg?style=svg)](https://circleci.com/gh/vscodeshift/snippets-extension-skeleton)
[![Coverage Status](https://codecov.io/gh/vscodeshift/snippets-extension-skeleton/branch/master/graph/badge.svg)](https://codecov.io/gh/vscodeshift/snippets-extension-skeleton)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vscodeshift.snippets-extension-skeleton)](https://marketplace.visualstudio.com/items?itemName=vscodeshift.snippets-extension-skeleton)

skeleton for a VSCode extension that provides snippets

# How to use this skeleton

Instead of typing up the snippets JSON file manually (because it sucks),
you define each snippet in a file in `src/snippets/<language>/<key>.ts`.

The build scripts will then compile these files into the JSON that VSCode
understands and add the `contributes.snippets` entry to `package.json`.

For [example](./src/snippets/javascript/example.ts):

```ts
// optional, defaults to filename without extension
export const prefix = 'example'

export const description = 'An example snippet'

// The build tools will strip off the leading and trailing newlines so that you
// don't have to indent anything.
export const body = `
export default function $1() {
  $0
}
`
```

Output:

```
{
  "example": {
    "prefix": "example",
    "description": "An example snippet",
    "body": [
      "export default function $1() {",
      "  $0",
      "}"
    ]
  }
}
```

# Snippets

<!-- snippets -->

## javascript

### `example`: An example snippet

```
export default function $1() {
  $0
}
```

<!-- snippetsend -->
