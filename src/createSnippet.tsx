import * as React from 'react'
import Placeholder, { PlaceholderProps } from './Placeholder'

export default function createSnippet(
  snippet: React.ReactElement,
  { placeholderIndex = [1] }: { placeholderIndex?: [number] } = {}
): string {
  function i(index?: number) {
    return index ?? placeholderIndex[0]++
  }
  const childOptions = { placeholderIndex }
  if (snippet.type === Placeholder) {
  }
  const name =
    typeof snippet.type === 'string'
      ? snippet.type
      : (snippet.type as any).displayName ?? snippet.type.name
  const {
    children,
    __attributePlaceholder,
    __oneLine,
    ...props
  } = snippet.props

  const parts = [`<${name}`]
  const propSeparator = __oneLine ? ' ' : '\n  '
  for (const [key, value] of Object.entries(props)) {
    if (value instanceof Object && React.isValidElement(value)) {
      if (value.type === Placeholder) {
        const {
          type,
          index,
          default: _default,
          choices,
          optional,
        } = value.props as PlaceholderProps
        if (optional) parts.push(`\${${i(index)}:`)
        parts.push(propSeparator)
        const open = type === 'string' ? '"' : '{'
        const close = type === 'string' ? '"' : '}'
        const formatValue =
          type === 'string'
            ? (value: any) => String(value)
            : (value: any) => JSON.stringify(value)
        parts.push(
          choices
            ? `${key}=${open}\${${i(index)}|${choices
                .map(formatValue)
                .join(',')}|}${close}`
            : `${key}=${open}${
                _default
                  ? `\${${i(index)}:${formatValue(_default)}}`
                  : `\$${i(index)}`
              }${close}`
        )
        if (optional) parts.push('}')
      } else {
        parts.push(
          `${propSeparator}${key}={${createSnippet(value, childOptions)}}`
        )
      }
    } else {
      parts.push(`${propSeparator}${key}=${JSON.stringify(value)}`)
    }
  }

  if (children) {
    parts.push(`${__oneLine ? ' ' : '\n'}>`)
    console.log(children)
    for (const child of React.Children.toArray(children)) {
      const converted = React.isValidElement(child)
        ? createSnippet(child, childOptions)
        : JSON.stringify(child)
      parts.push(`\n  ${converted.replace(/\n/gm, '\n  ')}`)
    }
    parts.push(`\n</${name}>`)
  } else {
    parts.push(`${__oneLine ? ' ' : '\n'}/>`)
  }
  return parts.join('')
}
