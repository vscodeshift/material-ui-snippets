import requireGlob from 'require-glob'
import * as fs from 'fs-extra'
import * as path from 'path'

const root = path.resolve(__dirname, '..')
const out = path.resolve(root, 'out')
fs.mkdirsSync(out)

const defs = requireGlob.sync('./snippets/*/*.ts')

const snippets = Object.keys(defs).map(language => ({
  language,
  path: `./out/${language}.json`,
}))

for (const { language, path: file } of snippets) {
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
    snippet.body = snippet.body.replace(/^\n|\n$/gm, '').split(/\r\n?|\n/gm)
  }
  fs.writeJSONSync(path.resolve(root, file), json, { spaces: 2 })
  console.log(file) // eslint-disable-line no-console
}

const packageJson = fs.readJSONSync(path.join(root, 'package.json'))
packageJson.contributes = { snippets }

fs.writeJSONSync(path.join(root, 'package.json'), packageJson, { spaces: 2 })
