import * as React from 'react'
import { variants, colors, margins, sizes } from './muiTextField'
import Placeholder from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <TextField> with more props'

export const body = ({ formControlMode, Mui }: SnippetOptions) => (
  <Mui.TextField
    id={<Placeholder type="string" />}
    label={<Placeholder type="string" preview="Label" />}
    variant={<Placeholder type="string" choices={variants} optional />}
    color={<Placeholder type="string" choices={colors} optional />}
    margins={<Placeholder type="string" choices={margins} optional />}
    size={<Placeholder type="string" choices={sizes} optional />}
    {...(formControlMode === 'controlled'
      ? {
          value: <Placeholder type="expression" preview="value" />,
          onChange: <Placeholder type="expression" />,
        }
      : { defaultValue: <Placeholder type="expression" preview="value" /> })}
    __attributePlaceholder={<Placeholder type="attribute" index={0} />}
  />
)
