/* eslint-disable @typescript-eslint/no-explicit-any */

import * as fs from 'fs-extra'
import * as path from 'path'
import markdownEscape from 'markdown-escape'
import snippets from '../src/snippets'
import { CompiledSnippet } from '../src/snip'

const root = path.resolve(__dirname, '..')
const out = path.resolve(root, 'out')
fs.mkdirsSync(out)

const markdown: Array<string> = []

for (const snippet of Object.values(snippets)) {
  const { prefix, description } = snippet
  markdown.push(`### \`${prefix}\`: ${markdownEscape(description)}`)
  if (typeof snippet.body === 'function') {
    const { parameters } = snippet.body as CompiledSnippet
    if (parameters.has('formControlMode')) {
      markdown.push(`#### Controlled`)
      markdown.push(
        '```\n' +
          snippet
            .body({
              language: 'typescriptreact',
              formControlMode: 'controlled',
            })
            .replace(/^\n|\n$/gm, '') +
          '\n```'
      )
      markdown.push(`#### Uncontrolled`)
      markdown.push(
        '```\n' +
          snippet
            .body({
              language: 'typescriptreact',
              formControlMode: 'uncontrolled',
            })
            .replace(/^\n|\n$/gm, '') +
          '\n```'
      )
    } else {
      markdown.push(
        '```\n' +
          snippet
            .body({
              language: 'typescriptreact',
              formControlMode: 'controlled',
            })
            .replace(/^\n|\n$/gm, '') +
          '\n```'
      )
    }
  } else {
    markdown.push('```\n' + snippet.body.replace(/^\n|\n$/gm, '') + '\n```')
  }
}

const oldReadme = fs.readFileSync(path.join(root, 'README.md'), 'utf8')
const startComment = /<!--\s*snippets\s*-->/.exec(oldReadme)
const endComment = /<!--\s*snippetsend\s*-->/.exec(oldReadme)
if (startComment && endComment && endComment.index > startComment.index) {
  const newReadme = `${oldReadme.substring(
    0,
    startComment.index + startComment[0].length
  )}
${markdown.join('\n\n')}
${oldReadme.substring(endComment.index)}`
  if (newReadme !== oldReadme) {
    fs.writeFileSync(path.join(root, 'README.md'), newReadme, 'utf8')
  }
  console.log('README.md') // eslint-disable-line no-console
}
