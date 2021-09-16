import * as React from 'react'
import { SnippetOptions } from './index'
import { variants, colors, sizes } from './muiButton'

export const description = 'Material-UI <ButtonGroup> with size'

export const body = ({
  $,
  Components: { ButtonGroup, Button },
}: SnippetOptions) => (
  <ButtonGroup
    variant={$(variants)}
    color={$(colors)}
    size={$(sizes)}
    aria-label="$"
    $
    __oneLineProps
  >
    <Button>$</Button>
    <Button>$</Button>
    {'$'}
  </ButtonGroup>
)
