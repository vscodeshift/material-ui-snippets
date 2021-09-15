import * as React from 'react'

type StringPlaceholderProps = {
  type: 'string'
  default?: string
  choices?: string[]
}
type AnyPlaceholderProps<T> = {
  type: 'attribute' | 'expression'
  default?: T
  choices?: T[]
}

export type PlaceholderProps = StringPlaceholderProps | AnyPlaceholderProps<any>

export default function Placeholder<T>({
  choices,
  default: _default = choices?.[0],
}: StringPlaceholderProps | AnyPlaceholderProps<T>): React.ReactElement | null {
  return React.isValidElement(_default) ? _default : <>{_default}</> ?? null
}

export function string(_default?: string): React.ReactElement
export function string(choices: string[]): React.ReactElement
export function string(arg0?: string | string[]): React.ReactElement {
  return (
    <Placeholder
      {...(Array.isArray(arg0)
        ? { choices: arg0 }
        : arg0
        ? { default: arg0 }
        : null)}
      type="string"
    />
  )
}

export function expression<T>(_default?: T): React.ReactElement
export function expression<T>(choices: T[]): React.ReactElement
export function expression<T>(arg0?: T | T[]): React.ReactElement {
  return (
    <Placeholder
      {...(Array.isArray(arg0)
        ? { choices: arg0 }
        : arg0
        ? { default: arg0 }
        : null)}
      type="expression"
    />
  )
}
