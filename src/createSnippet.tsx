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

const specialAttributes = new Set(['$', '__optional', '__oneLine', 'children'])

function numAttributes(props: Record<string, any>): number {
  let count = 0
  for (const key in props) {
    if (!specialAttributes.has(key)) count++
  }
  return count
}

function hasElementAttributes(props: Record<string, any>): boolean {
  for (const key in props) {
    if (specialAttributes.has(key)) continue
    if (React.isValidElement(props[key]) && props[key].type !== Placeholder)
      return true
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
        imports.push(
          prop.endsWith('Icon')
            ? `import ${prop} from '@material-ui/icons/${prop.replace(
                /Icon$/,
                ''
              )}'`
            : `import ${prop} from '@material-ui/core/${prop}'`
        )
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
  {
    placeholderStop = [1],
    stops = new Map(),
  }: {
    placeholderStop?: [number]
    stops?: Map<React.ReactElement<PlaceholderProps>, number>
  } = {}
): string {
  function getStop(placeholder?: React.ReactElement<PlaceholderProps>): number {
    if (!placeholder) return placeholderStop[0]++
    let stop = stops.get(placeholder)
    if (stop == null) {
      stop = placeholderStop[0]++
      stops.set(placeholder, stop)
    }
    return stop
  }
  const childOptions = { placeholderStop, stops }
  const name =
    typeof snippet.type === 'string'
      ? snippet.type
      : (snippet.type as any).displayName ?? snippet.type.name
  const { children, __oneLine: oneLine, __optional, ...props } = snippet.props

  const parts = []
  const fewProps = numAttributes(props) <= 2 && !hasElementAttributes(props)
  const propSeparator = oneLine || fewProps ? ' ' : '\n  '

  if (__optional) parts.push(`\${${getStop()}:`)
  parts.push(`<${name}`)

  for (let [key, value] of Object.entries(props)) {
    if (key === '$') {
      parts.push(`${propSeparator}$${getStop()}`)
    } else if (value instanceof Object && React.isValidElement(value)) {
      const optional = key.endsWith('__optional')
      if (optional) key = key.replace(/__optional$/, '')
      if (optional) parts.push(`\${${getStop()}:`)
      if (value.type === Placeholder) {
        const {
          type,
          default: _default,
          choices,
        } = value.props as PlaceholderProps
        const stop = getStop(value as React.ReactElement<PlaceholderProps>)
        parts.push(propSeparator)
        const open = type === 'string' ? '"' : '{'
        const close = type === 'string' ? '"' : '}'
        const formatValue =
          type === 'string'
            ? (value: any) => String(value)
            : (value: any) =>
                React.isValidElement(value)
                  ? '\n    ' +
                    createSnippetText(value, childOptions).replace(
                      /\n/gm,
                      '\n    '
                    ) +
                    '\n  '
                  : JSON.stringify(value)
        parts.push(
          choices
            ? `${key}=${open}\${${stop}|${(choices as any[])
                .map(formatValue)
                .join(',')}|}${close}`
            : `${key}=${open}${
                _default
                  ? optional
                    ? formatValue(_default)
                    : `\${${stop}:${formatValue(_default)}}`
                  : `\$${stop}`
              }${close}`
        )
      } else {
        parts.push(
          `${propSeparator}${key}={\n    ${createSnippetText(
            value,
            childOptions
          ).replace(/\n/gm, '\n    ')}\n  }`
        )
      }
      if (optional) parts.push('}')
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
          const { type, default: _default } = child.props as PlaceholderProps
          const stop = getStop(child as React.ReactElement<PlaceholderProps>)
          if (_default === undefined) {
            converted = `\$${stop}`
          } else if (React.isValidElement(_default)) {
            converted = `\${${stop}:${createSnippetText(
              _default,
              childOptions
            )}}`
          } else if (type === 'string') {
            converted = `\${${stop}:${_default}}`
          } else {
            converted = `{\${${stop}:${JSON.stringify(_default)}}}`
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
  if (__optional) parts.push('}')
  return parts
    .join('')
    .replace(/\n(\s*)(\$\{\d+:)(<|[-a-z_$][-a-z0-9_$]*=)/gi, '$2\n$1$3')
}
