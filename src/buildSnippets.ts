import requireGlob from 'require-glob'
import * as fs from 'fs-extra'
import * as path from 'path'
import markdownEscape from 'markdown-escape'

const root = path.resolve(__dirname, '..')
const out = path.resolve(root, 'out')
fs.mkdirsSync(out)

const defs = requireGlob.sync('./snippets/*/*.ts')

const markdown: Array<string> = []

const snippets = Object.keys(defs).map(language => ({
  language,
  path: `./out/${language}.json`,
}))

for (const { language, path: file } of snippets) {
  markdown.push(`## ${language}`)
  const json = defs[language]
  for (const key in json) {
    const snippet = json[key]
    for (const field of ['description', 'body']) {
      if (!snippet[field] || typeof snippet[field] !== 'string') {
        throw new Error(
          `src/snippets/${language}/${key}.ts: must export a string ${field}`
        )
      }
    }
    snippet.prefix = json.prefix || key
    markdown.push(
      `### \`${snippet.prefix}\`: ${markdownEscape(snippet.description)}`
    )
    snippet.body = snippet.body.replace(/^\n|\n$/gm, '')
    markdown.push('```\n' + snippet.body + '\n```')
    snippet.body = snippet.body.split(/\r\n?|\n/gm)
  }
  fs.writeJSONSync(path.resolve(root, file), json, { spaces: 2 })
  console.log(file) // eslint-disable-line no-console
}

const packageJson = fs.readJSONSync(path.join(root, 'package.json'))
packageJson.contributes = { snippets }

fs.writeJSONSync(path.join(root, 'package.json'), packageJson, { spaces: 2 })

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
