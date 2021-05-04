/* eslint-disable no-console */
import { webkit } from 'playwright'
import fs from 'fs'
import { build } from 'esbuild'

async function go() {
  const browser = await webkit.launch()

  const file = 'muiButton.tsx'.split('.')[0]
  // fs.readdirSync('components/').forEach(async file => {
  {
    const ComponentName = file.toUpperCase()
    const App = `import React from 'react'
  import ReactDOM from 'react-dom'
  import ${ComponentName} from './components/${file}'

  ReactDOM.render(<${ComponentName}/>,document.getElementById('root'))`

    const fileName = 'app.tsx'
    fs.writeFile(fileName, App, e => e && console.log(e))

    await build({
      entryPoints: [fileName],
      treeShaking: true,
      bundle: true,
      outfile: 'app.js',
    }).catch(() => process.exit(1))

    const page = await browser.newPage()
    await page.setViewportSize({ width: 512, height: 400 })
    await page.goto(`file://${__dirname}/index.html`)
    await page.waitForTimeout(1000)
    await page.screenshot({ path: `img/${file}.png`, fullPage: true })
  }
  return browser.close()
}

go()
