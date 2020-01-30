import { SnippetOptions } from './snippets'

type Parameter = keyof SnippetOptions

const validParameters: Set<string> = new Set(['language', 'formControlMode'])

export interface CompiledSnippet {
  (options: SnippetOptions): string
  parameters: Set<Parameter>
}

export default function snip([body]: TemplateStringsArray): CompiledSnippet {
  body = body.replace(/\s+$/gm, '')

  const parameters: Set<Parameter> = new Set()

  const ifRx = /^\s*\{\{\s*#if\s*(\S+)\s*(===\s*(\S+)\s*)\}\}([^\n]*\n)?/gm
  let match
  while ((match = ifRx.exec(body))) {
    const parameter = match[1]
    if (!validParameters.has(parameter)) {
      throw new Error(`invalid parameter: ${parameter}`)
    }
    parameters.add(parameter as Parameter)
  }

  const makeSnippet = (options: SnippetOptions): string => {
    let lastIndex = 0
    const parts = []
    const ifRx = /^\s*\{\{\s*#if\s*(\S+)\s*(===\s*(\S+)\s*)\}\}([^\n]*\n)?/gm
    const endifRx = /^\s*\{\{\s*\/if\s*\}\}([^\n]*\n)?/gm
    let start, end
    while ((start = ifRx.exec(body))) {
      endifRx.lastIndex = start.index + start[0].length
      if ((end = endifRx.exec(body))) {
        const parameter = start[1]
        let value
        try {
          value = start[3] ? JSON.parse(start[3]) : true
        } catch (error) {
          throw new Error(`value is not JSON: ${start[3]}`)
        }
        parts.push(body.substring(lastIndex, start.index))
        if (options[parameter as Parameter] === value) {
          parts.push(body.substring(start.index + start[0].length, end.index))
        }
        lastIndex = end.index + end[0].length
      }
    }
    parts.push(body.substring(lastIndex))

    let counter = 0
    return parts
      .join('')
      .replace(/^\n|\n$/g, '')
      .replace(/#/g, () => String(++counter))
  }
  makeSnippet.parameters = parameters
  return makeSnippet
}
