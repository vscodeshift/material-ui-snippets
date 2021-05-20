import * as React from 'react'
import Placeholder, { PlaceholderProps } from './Placeholder'

export type InputSnippetOptions = {
  forPreview?: boolean
  formControlMode: 'controlled' | 'uncontrolled'
  language: 'javascriptreact' | 'typescriptreact'
}
export type SnippetOptions = InputSnippetOptions & {
  Mui: Record<string, React.ComponentType<any>>
}

function numAttributes(props: Record<string, any>): number {
  let count = 0
  for (const key in props) {
    if (key !== 'children') count++
  }
  return count
}

function hasElementAttributes(props: Record<string, any>): boolean {
  for (const key in props) {
    if (key === 'children') continue
    if (React.isValidElement(props[key])) return true
  }
  return false
}

export default function createSnippet(
  snippet: (options: SnippetOptions) => React.ReactElement,
  options: InputSnippetOptions
): { text: string; imports: string[] } {
  const imports: string[] = []
  const Mui = new Proxy({} as Record<string, React.ComponentType<any>>, {
    get(target: any, prop: string): React.ComponentType<any> {
      if (!target[prop]) {
        imports.push(`import ${prop} from '@material-ui/core/${prop}'`)
        const component = () => null
        ;(component as any).displayName = prop
        target[prop] = component
      }
      return target[prop]
    },
  })
  const el = snippet({ ...options, Mui })
  return { text: createSnippetText(el), imports }
}

export function createSnippetText(
  snippet: React.ReactElement,
  { placeholderStop = [1] }: { placeholderStop?: [number] } = {}
): string {
  function i(stop?: number) {
    return stop ?? placeholderStop[0]++
  }
  const childOptions = { placeholderStop }
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
  const fewProps = numAttributes(props) <= 2 && !hasElementAttributes(props)
  const propSeparator = oneLine || fewProps ? ' ' : '\n  '
  for (const [key, value] of Object.entries(props)) {
    if (value instanceof Object && React.isValidElement(value)) {
      if (value.type === Placeholder) {
        const {
          type,
          stop,
          default: _default,
          choices,
          optional,
        } = value.props as PlaceholderProps
        if (optional) parts.push(`\${${i(stop)}:`)
        parts.push(propSeparator)
        const open = type === 'string' ? '"' : '{'
        const close = type === 'string' ? '"' : '}'
        const formatValue =
          type === 'string'
            ? (value: any) => String(value)
            : (value: any) =>
                React.isValidElement(value)
                  ? createSnippetText(value, childOptions).replace(
                      /\n/gm,
                      '\n    '
                    )
                  : JSON.stringify(value)
        parts.push(
          choices
            ? `${key}=${open}\${${i(stop)}|${(choices as any[])
                .map(formatValue)
                .join(',')}|}${close}`
            : `${key}=${open}${
                _default
                  ? `\${${i(stop)}:${formatValue(_default)}}`
                  : `\$${i(stop)}`
              }${close}`
        )
        if (optional) parts.push('}')
      } else {
        parts.push(
          `${propSeparator}${key}={\n    ${createSnippetText(
            value,
            childOptions
          ).replace(/\n/gm, '\n    ')}\n  }`
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
            stop,
            default: _default,
          } = child.props as PlaceholderProps
          if (_default === undefined) {
            converted = `\$${i(stop)}`
          } else if (React.isValidElement(_default)) {
            converted = `\${${i(stop)}:${createSnippetText(
              _default,
              childOptions
            )}}`
          } else if (type === 'string') {
            converted = `\${${i(stop)}:${_default}}`
          } else {
            converted = `{\${${i(stop)}:${JSON.stringify(_default)}}}`
          }
        } else {
          converted = createSnippetText(child, childOptions)
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
    parts.push(`${oneLine || fewProps ? ' ' : '\n'}/>`)
  }
  return parts.join('').replace(/\n(\s*)(\$\{\d+:)/g, '$2\n$1')
}
