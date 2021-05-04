/* eslint-disable no-console */
import { webkit } from 'playwright'
import loadSnippets from '../src/snippets'
import getSnippetImports from '../src/getSnippetImports'
import fs from 'fs'
import { build } from 'esbuild'

async function go() {
  const snippets = await loadSnippets()
  const snippet = snippets['muiButton']
  const browser = await webkit.launch()
  const page = await browser.newPage()

  // for (const snippet of Object.values(snippets))
  {
    const { prefix, body } = snippet

    let compBody = (body as Function)() as string
    compBody = compBody.replace(/\$\{\d\|(\w+),\S+\}/g, '$1')
    compBody = compBody.replace(/\$\d\s{0,}>/g, '>')
    compBody = compBody.replace(/\$\d/g, 'Text')
    const imports = getSnippetImports(compBody)

    const fileContent = `
import React from 'react'
import ReactDOM from 'react-dom'
import {${imports.join(',')}} from '@material-ui/core'

ReactDOM.render(
  <>
  ${compBody}
  </>,
  document.getElementById('root')
)
`
    const fileName = 'temp.jsx'
    fs.writeFile(fileName, fileContent, e => e && console.log(e))

    await build({
      entryPoints: [fileName],
      treeShaking: true,
      bundle: true,
      outfile: 'temp.js',
    }).catch(() => process.exit(1))

    await page.setContent(
      `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${prefix}</title>
</head>
<body>
    <div id="root"></div>
</body>
<script src="temp.js"></script>
</html>
`,
      { waitUntil: 'networkidle' }
    )
    await page.screenshot({ path: `img/${prefix}.png` })
  }
  return browser.close()
}

go()
