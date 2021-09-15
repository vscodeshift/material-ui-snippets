import * as React from 'react'
import { string, expression } from '../Placeholder'
import { SnippetOptions } from '../createSnippet'

export const description = 'Material-UI <Checkbox> with <FormControlLabel>'

export const body = ({ forPreview, formControlMode, Mui }: SnippetOptions) => (
  <Mui.FormControlLabel
    label={string()}
    control={
      <Mui.Checkbox
        value={string()}
        {...(formControlMode === 'controlled'
          ? { checked: expression(), onChange: expression() }
          : { defaultChecked: expression() })}
        color={string('primary')}
      />
    }
  />
)
