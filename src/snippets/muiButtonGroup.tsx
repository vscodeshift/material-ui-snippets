import * as React from 'react'
import { SnippetOptions } from './index'
import { variants, colors } from './muiButton'

export const description = 'Material-UI <ButtonGroup>'

export const body = ({
  Components: { ButtonGroup, Button },
  $,
}: SnippetOptions): React.ReactElement<any> => (
  <ButtonGroup
    variant={$(variants)}
    color={$(colors)}
    aria-label="$"
    $
    __oneLineProps
  >
    <Button>$</Button>
    <Button>$</Button>
    {'$'}
  </ButtonGroup>
)
