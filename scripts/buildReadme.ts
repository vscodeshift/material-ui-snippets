/* eslint-disable @typescript-eslint/no-explicit-any */

import * as fs from 'fs-extra'
import * as path from 'path'
import * as prettier from 'prettier'
import markdownEscape from 'markdown-escape'
import loadSnippets from '../src/snippets'
import { CompiledSnippet } from '../src/snip'

const root = path.resolve(__dirname, '..')
const out = path.resolve(root, 'out')
fs.mkdirsSync(out)

const toc: Array<string> = []
const markdown: Array<string> = []

const commands: Array<Record<string, any>> = []

const headingUrl = (heading: string): string =>
  '#' +
  heading
    .replace(/&[^;]+;/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^-a-z0-9]/gi, '')
    .trim()
    .toLowerCase()

async function go(): Promise<void> {
  const snippets = await loadSnippets()

  for (const snippet of Object.values(snippets)) {
    const { prefix } = snippet

    commands.push({
      command: `extension.${prefix}`,
      title:
        'Insert ' + snippet.description.replace(/^\s*Material[ -]UI\s*/i, ''),
      category: 'MUI Snippets',
    })

    const description = markdownEscape(
      snippet.description.replace(/^\s*Material[ -]UI\s*/i, '')
    )
    const heading = `\`${prefix}\`: ${description}`
    toc.push(`- [${heading}](${headingUrl(heading)})`)
    markdown.push(`### ${heading}`)
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

  const packageJsonPath = path.join(root, 'package.json')
  const packageJson = fs.readJsonSync(packageJsonPath)
  packageJson.contributes.commands = commands
  fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 })
  console.log('package.json') // eslint-disable-line no-console

  const readmePath = path.join(root, 'README.md')

  const oldReadme = fs.readFileSync(readmePath, 'utf8')
  const startComment = /<!--\s*snippets\s*-->/.exec(oldReadme)
  const endComment = /<!--\s*snippetsend\s*-->/.exec(oldReadme)
  if (startComment && endComment && endComment.index > startComment.index) {
    const newReadme = prettier.format(
      `${oldReadme.substring(0, startComment.index + startComment[0].length)}
${toc.join('\n')}
${markdown.join('\n\n')}
${oldReadme.substring(endComment.index)}`,
      { filepath: readmePath }
    )
    if (newReadme !== oldReadme) {
      fs.writeFileSync(readmePath, newReadme, 'utf8')
    }
    console.log('README.md') // eslint-disable-line no-console
  }
}

go()
