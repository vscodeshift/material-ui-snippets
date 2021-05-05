import * as React from 'react'

export default function importedComponent(
  displayName: string
): React.ComponentType<any> & { imports: string } {
  const path = `@material-ui/core/${displayName}`
  const result = (props: any) =>
    React.createElement(require(path).default, props)
  result.displayName = displayName
  result.imports = path
  return result
}
