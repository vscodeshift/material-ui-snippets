import * as React from 'react'

type StringPlaceholderProps = {
  type: 'string'
  stop?: number
  default?: string
  choices?: string[]
  optional?: boolean
}
type AnyPlaceholderProps<T> = {
  type: 'attribute' | 'expression'
  stop?: number
  default?: T
  choices?: T[]
  optional?: boolean
}

export type PlaceholderProps = StringPlaceholderProps | AnyPlaceholderProps<any>

export default function Placeholder<T>({
  choices,
  default: _default = choices?.[0],
}: StringPlaceholderProps | AnyPlaceholderProps<T>): React.ReactElement | null {
  return React.isValidElement(_default) ? _default : <>{_default}</> ?? null
}

export function string(
  stop: number,
  options?: Omit<StringPlaceholderProps, 'type'>
): React.ReactElement
export function string(
  options?: Omit<StringPlaceholderProps, 'type'>
): React.ReactElement
export function string(
  arg0?: number | Omit<StringPlaceholderProps, 'type'>,
  arg1?: Omit<StringPlaceholderProps, 'type'>
): React.ReactElement {
  if (typeof arg0 === 'number') return string({ ...arg1, stop: arg0 })
  return <Placeholder {...arg0} type="string" />
}

export function attribute<T>(
  stop: number,
  options?: Omit<AnyPlaceholderProps<T>, 'type'>
): React.ReactElement
export function attribute<T>(
  options?: Omit<AnyPlaceholderProps<T>, 'type'>
): React.ReactElement
export function attribute<T>(
  arg0?: number | Omit<AnyPlaceholderProps<T>, 'type'>,
  arg1?: Omit<AnyPlaceholderProps<T>, 'type'>
): React.ReactElement {
  if (typeof arg0 === 'number') return attribute({ ...arg1, stop: arg0 })
  return <Placeholder {...arg0} type="attribute" />
}

export function expression<T>(
  stop: number,
  options?: Omit<AnyPlaceholderProps<T>, 'type'>
): React.ReactElement
export function expression<T>(
  options?: Omit<AnyPlaceholderProps<T>, 'type'>
): React.ReactElement
export function expression<T>(
  arg0?: number | Omit<AnyPlaceholderProps<T>, 'type'>,
  arg1?: Omit<AnyPlaceholderProps<T>, 'type'>
): React.ReactElement {
  if (typeof arg0 === 'number') return expression({ ...arg1, stop: arg0 })
  return <Placeholder {...arg0} type="expression" />
}

export function child(
  stop: number,
  _default: React.ReactElement
): React.ReactElement {
  return <Placeholder type="expression" stop={stop} default={_default} />
}
