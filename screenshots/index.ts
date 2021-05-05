/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-console */
import { webkit } from 'playwright'
import fs from 'fs'
import { build } from 'esbuild'

const capitalize = (s: string): string => s[0].toUpperCase() + s.substr(1)

async function go() {
  const browser = await webkit.launch()
  const files = fs.readdirSync('components/').map(e => e.split('.')[0])
  // const files = ['muiAppBar.tsx', 'muiRadioLabel.tsx']

  const App = `import React from 'react'
import ReactDOM from 'react-dom'
${files.map(e => `import ${capitalize(e)} from './components/${e}'`).join('\n')}
import { Switch, HashRouter, Route } from 'react-router-dom'

ReactDOM.render(<HashRouter>
  <Switch>
    ${files
      .map(e => `<Route path="/${e}" component={${capitalize(e)}} />`)
      .join('    \n')}
  </Switch>
</HashRouter>,document.getElementById('root'))`

  const fileName = 'app.tsx'
  fs.writeFile(fileName, App, e => e && console.log(e))

  await build({
    entryPoints: [fileName],
    treeShaking: true,
    bundle: true,
    outfile: 'app.js',
  }).catch(() => process.exit(1))

  for await (const file of files) {
    const page = await browser.newPage()
    await page.setViewportSize({ width: 512, height: 400 })
    await page.goto(`file://${__dirname}/index.html#/${file}`)
    await page.screenshot({ path: `img/${file}.png`, fullPage: true })
  }
  return browser.close()
}

go()
