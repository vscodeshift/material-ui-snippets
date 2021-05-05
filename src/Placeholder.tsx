import * as React from 'react'

export type PlaceholderProps =
  | {
      type: 'string'
      index?: number
      default?: string
      preview?: string
      choices?: string[]
      optional?: boolean
    }
  | {
      type: 'attribute' | 'expression'
      index?: number
      default?: any
      preview?: any
      choices?: any[]
      optional?: boolean
    }

export default function Placeholder<T>(
  props: PlaceholderProps
): React.ReactElement {
  return <div />
}
