import { SnippetOptions } from '.'

export const description = 'Material-UI <Switch>'

export const body = ({ formControlMode }: SnippetOptions): string => `
<Switch
  checked={$1}
  ${
    formControlMode === 'controlled'
      ? `onChange={$2}
  value="$3"`
      : `defaultValue="$2"`
  }
  inputProps={{ 'aria-label': '$4' }}
  $0
/>
`
