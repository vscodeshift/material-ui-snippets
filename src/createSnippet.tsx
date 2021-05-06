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
  const name =
    typeof snippet.type === 'string'
      ? snippet.type
      : (snippet.type as any).displayName ?? snippet.type.name
  const {
    children,
    __attributePlaceholder,
    __oneLine: oneLine,
    ...props
  } = snippet.props

  const parts = [`<${name}`]
  const fewProps = Object.keys(props).length <= 2
  const propSeparator = oneLine || fewProps ? ' ' : '\n  '
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
    parts.push(`${oneLine || fewProps ? '' : '\n'}>`)
    const childrenArray = React.Children.toArray(children)
    for (const child of childrenArray) {
      let converted
      if (React.isValidElement(child)) {
        if (child.type === Placeholder) {
          const {
            type,
            index,
            default: _default,
          } = child.props as PlaceholderProps
          if (_default === undefined) {
            converted = `\$${i(index)}`
          } else if (React.isValidElement(_default)) {
            converted = `\${${i(index)}:${createSnippet(
              _default,
              childOptions
            )}}`
          } else if (type === 'string') {
            converted = `\${${i(index)}:${_default}}`
          } else {
            converted = `{\${${i(index)}:${JSON.stringify(_default)}}}`
          }
        } else {
          converted = createSnippet(child, childOptions)
        }
      } else {
        converted = `{${JSON.stringify(child)}}`
      }
      parts.push(
        oneLine && childrenArray.length === 1
          ? converted
          : `\n  ${converted.replace(/\n/gm, '\n  ')}`
      )
    }
    if (!oneLine || childrenArray.length !== 1) parts.push('\n')
    parts.push(`</${name}>`)
  } else {
    parts.push(`${oneLine ? ' ' : '\n'}/>`)
  }
  return parts.join('').replace(/\n(\s*)(\$\{\d+:)/g, '$2\n$1')
}
