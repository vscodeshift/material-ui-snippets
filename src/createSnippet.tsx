import * as React from 'react'
import { InputSnippetOptions, Snippet, SnippetBodyComponent } from './snippets'

export default function createSnippet(
  snippet: Snippet,
  options: InputSnippetOptions
): { text: string; components: string[]; icons: string[] } {
  const { body, components, icons } = snippet
  if (typeof body === 'string') {
    return createRawSnippet({ body, components, icons })
  } else {
    return compileSnippet(body, options)
  }
}

function createRawSnippet({
  body,
  components = [],
  icons = [],
}: {
  body: string
  components?: string[]
  icons?: string[]
}): { text: string; components: string[]; icons: string[] } {
  return {
    text: body,
    components,
    icons,
  }
}

function indent(str: string, indentation = '  '): string {
  return str.replace(/^/gm, indentation)
}

function escape(str: string): string {
  function isPlaceholderClose(i: number): boolean {
    let level = 1
    while (--i >= 0) {
      switch (str[i]) {
        case '}':
          level++
          break
        case '{':
          if (str[i - 1] !== '\\') {
            level--
            if (!level) return str[i - 1] === '$' && str[i - 2] !== '\\'
          }
      }
    }
    return false
  }

  return str.replace(/\}/g, (match, i): string =>
    isPlaceholderClose(i) ? '}' : '\\}'
  )
}

type PlaceholderProps = { name?: string; value: any }

function compileSnippet(
  body: SnippetBodyComponent,
  options: InputSnippetOptions
): { text: string; components: string[]; icons: string[] } {
  let stop = 1

  const stops: Map<any, number> = new Map()

  function getStopNumber(
    placeholder?:
      | string
      | React.ReactElement<PlaceholderProps, typeof Placeholder>
  ): number {
    if (placeholder == null || placeholder === '$') return stop++
    if (placeholder === '$0') return 0
    const key = React.isValidElement(placeholder)
      ? (placeholder as React.ReactElement<PlaceholderProps>).props.name ||
        placeholder
      : placeholder
    const existing = stops.get(key)
    if (existing) return existing
    const result = stop++
    stops.set(key, result)
    return result
  }

  function getStop(
    placeholder?:
      | string
      | React.ReactElement<PlaceholderProps, typeof Placeholder>
  ): string {
    return `$${getStopNumber(placeholder)}`
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function Placeholder(props: PlaceholderProps): null {
    return null
  }

  function formatPlaceholder(
    placeholder: React.ReactElement<PlaceholderProps, typeof Placeholder>
  ): string {
    const { value } = placeholder.props
    if (value === undefined) return getStop(placeholder)
    const stop = getStopNumber(placeholder)
    if (Array.isArray(value)) {
      if (typeof value[0] === 'string') {
        return `\${${stop}|${value.join(',')}|}`
      }
    }
    return `\${${stop}:${String(value)}}`
  }

  function formatString(str: string): string {
    return str
      .replace(
        /\$\{([a-z]+)?(:([^\\}]|\\.)+)?\}/gi,
        (match, name, def, index) =>
          str[index - 1] === '/'
            ? match
            : def
            ? `\${${getStopNumber(name)}${def}}`
            : getStop(name)
      )
      .replace(/\$(?![a-z0-9{])/gi, (match, index) =>
        str[index - 1] === '/' ? match : getStop()
      )
  }

  function formatComponentName(name: string): string {
    return name.replace(/\$/g, () => getStop())
  }

  function formatJson(obj: any): string {
    if (obj === $) return getStop()
    if (React.isValidElement(obj)) {
      if (obj.type === Placeholder) return formatPlaceholder(obj as any)
      return formatElement(obj)
    }
    if (obj instanceof Object) {
      return Array.isArray(obj) ? formatArray(obj) : formatObject(obj)
    }
    if (typeof obj === 'string')
      return JSON.stringify(formatString(obj)).replace(/^"|"$/g, "'")
    return JSON.stringify(obj)
  }

  function formatArray(array: any[]): string {
    return `[${array.map((el) => formatJson(el)).join(', ')}]`
  }

  function formatObjectKey(key: string): string {
    const formatted = formatString(key)
    return /^[_a-z$][_a-z0-9$]*$/.test(formatted)
      ? formatted
      : JSON.stringify(formatted)
  }

  function formatObject(obj: Record<string, any>): string {
    return `{ ${[...Object.entries(obj)]
      .map(([key, value]) => `${formatObjectKey(key)}: ${formatJson(value)}`)
      .join(', ')} }`
  }

  function formatPropValue(key: string, value: any): string {
    if (/__raw(_|$)/.test(key)) {
      return formatString(value)
    }
    if (typeof value === 'string') {
      return JSON.stringify(formatString(value))
    }

    if (value === $) {
      return `{${getStop()}}`
    }
    if (React.isValidElement(value)) {
      if (value.type === Placeholder) {
        const {
          props: { value: val },
        } = value as React.ReactElement<{ value: any }>
        const formatted = formatPlaceholder(value as any)
        return typeof val === 'string' ||
          (Array.isArray(val) && typeof val[0] === 'string')
          ? `"${formatted}"`
          : `{${formatted}}`
      }
      const formatted = formatElement(value)
      return `{${
        formatted.includes('\n')
          ? `\n${indent(formatted, '    ')}\n  `
          : formatted
      }}`
    }
    return `{${formatJson(value)}}`
  }

  function formatProp(key: string, value: any): string {
    if (key === '$') return getStop()
    if (key.startsWith('__raw')) {
      return formatString(value)
    }
    if (/__optional(_|$)/.test(key)) {
      // TODO
      return `\${${stop++}:${escape(
        formatProp(key.replace('__optional', ''), value)
      )}}`
    }
    const formattedKey =
      key === '__key' ? 'key' : key.replace(/__optional|__raw/g, '')
    if (value === true) return formattedKey
    const formattedValue = formatPropValue(key, value)
    return `${formattedKey}=${formattedValue}`
  }

  function formatElement(el: React.ReactElement<any>): any {
    if (el.type === Placeholder) return formatPlaceholder(el as any)
    const {
      type,
      props: {
        children,
        __optional,
        __oneLine,
        __oneLineProps,
        __multiLine,
        __multiLineChildren,
        ...props
      },
    } = el

    if (__optional) {
      return `\${${stop++}:${escape(
        formatElement(
          // eslint-disable-next-line react/no-children-prop
          React.createElement(type, {
            ...props,
            children,
            __oneLine,
            __oneLineProps,
            __multiLine,
            __multiLineChildren,
          })
        )
      )}}`
    }

    const parts: string[] = []
    const name = formatComponentName(
      typeof type === 'string' ? type : (type as any).displayName
    )
    parts.push(`<${name}`)
    const formattedProps = []
    const formattedChildren = []
    for (const key in props) {
      formattedProps.push(formatProp(key, props[key]))
    }
    for (const child of React.Children.toArray(children)) {
      if (React.isValidElement(child)) {
        formattedChildren.push(formatElement(child))
      } else if (typeof child === 'string') {
        formattedChildren.push(formatString(child))
      } else {
        formattedChildren.push(String(child))
      }
    }
    const propsLength = formattedProps.reduce(
      (len, next) => len + next.length,
      0
    )
    const childrenLength = formattedChildren.reduce(
      (len, next) => len + next.length,
      0
    )
    const propsOneLine =
      __oneLine ||
      __oneLineProps ||
      (!__multiLine &&
        !formattedProps.some((p) => p.includes('\n')) &&
        propsLength + name.length < 70)
    const childrenOneLine =
      __oneLine ||
      (!__multiLineChildren &&
        !__oneLineProps &&
        propsOneLine &&
        !formattedProps.some((p) => p.includes('\n')) &&
        !formattedChildren.some((c) => c.includes('\n')) &&
        propsLength + childrenLength + name.length * 2 < 70)

    for (const formatted of formattedProps) {
      if (!propsOneLine) {
        const match = /^\$\{\d+:/.exec(formatted)
        if (match) {
          parts.push(match[0])
          parts.push('\n  ')
          parts.push(formatted.substring(match[0].length))
        } else {
          parts.push('\n  ')
          parts.push(formatted)
        }
      } else {
        if (!/^\$\d+$/.test(formatted) || !propsOneLine)
          parts.push(propsOneLine ? ' ' : '\n  ')
        parts.push(formatted)
      }
    }
    if (!formattedChildren.length) {
      parts.push(propsOneLine ? ' />' : '\n/>')
      return parts.join('')
    }
    parts.push(propsOneLine ? '>' : '\n>')
    for (const formatted of formattedChildren) {
      if (!childrenOneLine) {
        const match = /^\$\{\d+:/.exec(formatted)
        if (match) {
          parts.push(match[0])
          parts.push('\n')
          parts.push(indent(formatted.substring(match[0].length)))
        } else {
          parts.push('\n')
          parts.push(indent(formatted))
        }
      } else {
        parts.push(formatted)
      }
    }
    if (!childrenOneLine) parts.push('\n')
    parts.push(`</${name}>`)
    return parts.join('')
  }

  function createPlaceholder(
    value: any
  ): React.ReactElement<PlaceholderProps, typeof Placeholder> {
    return <Placeholder value={value} />
  }

  const $ = new Proxy(createPlaceholder, {
    get(target: any, name: string) {
      // eslint-disable-next-line react/display-name
      return (
        value: any
      ): React.ReactElement<PlaceholderProps, typeof Placeholder> => (
        <Placeholder value={value} name={name} />
      )
    },
  })

  const components: string[] = []
  const icons: string[] = []

  const Components = new Proxy({} as Record<string, React.ComponentType<any>>, {
    get(
      target: Record<string, React.ComponentType<any>>,
      name: string
    ): React.ComponentType<any> {
      if (!target[name]) {
        if (!name.includes('$')) components.push(name)
        const component = () => null
        ;(component as any).displayName = name
        target[name] = component
      }
      return target[name]
    },
  })

  const Icons = new Proxy({} as Record<string, React.ComponentType<any>>, {
    get(
      target: Record<string, React.ComponentType<any>>,
      name: string
    ): React.ComponentType<any> {
      if (!target[name]) {
        if (!name.includes('$')) icons.push(name)
        const component = () => null
        ;(component as any).displayName = name
        target[name] = component
      }
      return target[name]
    },
  })

  const el = body({ ...options, Components, Icons, $ })

  return {
    text: formatElement(el),
    components,
    icons,
  }
}
