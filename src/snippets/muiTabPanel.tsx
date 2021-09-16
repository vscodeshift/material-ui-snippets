import * as React from 'react'
import { SnippetOptions } from './index'

export const description = 'Material-UI <TabPanel>'

export const body = ({ $, Components: { TabPanel } }: SnippetOptions) => (
  <TabPanel
    value={$}
    index={$}
    dir__optional__raw="{theme.direction}"
    $
    __multiLineChildren
  >
    $
  </TabPanel>
)
