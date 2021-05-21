import * as React from 'react'

type StringPlaceholderProps = {
  type: 'string'
  stop?: 0
  default?: string
  choices?: string[]
  optional?: boolean
}
type AnyPlaceholderProps<T> = {
  type: 'attribute' | 'expression'
  stop?: 0
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

function stringOptional(_default?: string): React.ReactElement
function stringOptional(choices: string[]): React.ReactElement
function stringOptional(stop: 0): React.ReactElement
function stringOptional(arg0?: 0 | string | string[]): React.ReactElement {
  return (
    <Placeholder
      {...(Array.isArray(arg0)
        ? { choices: arg0 }
        : arg0 === 0
        ? { stop: 0 }
        : arg0
        ? { default: arg0 }
        : null)}
      type="string"
      optional
    />
  )
}

export function string(_default?: string): React.ReactElement
export function string(choices: string[]): React.ReactElement
export function string(stop: 0): React.ReactElement
export function string(arg0?: 0 | string | string[]): React.ReactElement {
  return (
    <Placeholder
      {...(Array.isArray(arg0)
        ? { choices: arg0 }
        : arg0 === 0
        ? { stop: 0 }
        : arg0
        ? { default: arg0 }
        : null)}
      type="string"
    />
  )
}
string.optional = stringOptional

export function attribute(): React.ReactElement {
  return <Placeholder type="attribute" />
}

function expressionOptional<T>(_default?: T): React.ReactElement
function expressionOptional<T>(choices: T[]): React.ReactElement
function expressionOptional<T>(stop: 0): React.ReactElement
function expressionOptional<T>(arg0?: 0 | T | T[]): React.ReactElement {
  return (
    <Placeholder
      {...(Array.isArray(arg0)
        ? { choices: arg0 }
        : arg0 === 0
        ? { stop: 0 }
        : arg0
        ? { default: arg0 }
        : null)}
      type="expression"
      optional
    />
  )
}

export function expression<T>(_default?: T): React.ReactElement
export function expression<T>(choices: T[]): React.ReactElement
export function expression<T>(stop: 0): React.ReactElement
export function expression<T>(arg0?: 0 | T | T[]): React.ReactElement {
  return (
    <Placeholder
      {...(Array.isArray(arg0)
        ? { choices: arg0 }
        : arg0 === 0
        ? { stop: 0 }
        : arg0
        ? { default: arg0 }
        : null)}
      type="expression"
    />
  )
}
expression.optional = expressionOptional
