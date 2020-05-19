import * as vscode from 'vscode'
import snippets, { SnippetOptions } from './snippets'
import shallowEqual from 'shallowequal'
import getExistingImports from './getExistingImports'
import getSnippetImports from './getSnippetImports'

interface TextSnippet {
  prefix: string
  description: string
  body: string
  imports: string[]
}

export function activate(context: vscode.ExtensionContext): void {
  for (const language of ['javascript', 'javascriptreact', 'typescriptreact']) {
    let lastOptions: SnippetOptions | null = null
    let lastSnippets: TextSnippet[]

    const getSnippets = (options: SnippetOptions): TextSnippet[] => {
      if (shallowEqual(options, lastOptions)) {
        return lastSnippets
      }
      lastOptions = options
      const result = []
      for (const snippet of Object.values(snippets)) {
        const { prefix, description } = snippet
        const body = (typeof snippet.body === 'function'
          ? snippet.body(options)
          : snippet.body
        ).replace(/^\n|\n$/gm, '')
        result.push({
          prefix,
          description,
          body,
          imports: getSnippetImports(body),
        })
      }
      return (lastSnippets = result)
    }

    context.subscriptions.push(
      vscode.languages.registerCompletionItemProvider(language, {
        provideCompletionItems(
          /* eslint-disable @typescript-eslint/no-unused-vars */
          document: vscode.TextDocument,
          position: vscode.Position,
          token: vscode.CancellationToken,
          context: vscode.CompletionContext
          /* eslint-enable @typescript-eslint/no-unused-vars */
        ): vscode.ProviderResult<
          vscode.CompletionItem[] | vscode.CompletionList
        > {
          const config = vscode.workspace.getConfiguration(
            'material-ui-snippets'
          )
          const rawSnippets = getSnippets({
            language: language as any, // eslint-disable-line @typescript-eslint/no-explicit-any
            formControlMode: config.get('formControlMode') || 'controlled',
          })
          const convertToCompletion = ({
            prefix,
            description,
            body,
          }: TextSnippet): vscode.CompletionItem => {
            const completion = new vscode.CompletionItem(prefix)
            completion.insertText = new vscode.SnippetString(body)
            completion.documentation = new vscode.MarkdownString(description)
            return completion
          }
          if (!config.get('addCompletionImports')) {
            return rawSnippets.map(convertToCompletion)
          }

          let existingImports: Set<string> | null
          let insertPosition: vscode.Position = new vscode.Position(0, 0)
          let coreInsertPosition: vscode.Position | null = null
          let iconsInsertPosition: vscode.Position | null = null
          try {
            ;({
              existingImports,
              insertPosition,
              coreInsertPosition,
              iconsInsertPosition,
            } = getExistingImports(document))
          } catch (error) {
            existingImports = null
          }
          let importPaths = config.get('importPaths') || 'auto'
          if (importPaths === 'auto') {
            importPaths =
              coreInsertPosition || iconsInsertPosition
                ? 'top level'
                : 'second level'
          }
          const result = []
          for (const snippet of rawSnippets) {
            const { imports } = snippet
            const snippetCompletion = convertToCompletion(snippet)
            const finalExistingImports = existingImports
            if (finalExistingImports) {
              const additionalTextEdits: vscode.TextEdit[] = []
              if (importPaths === 'second level') {
                additionalTextEdits.push(
                  vscode.TextEdit.insert(
                    insertPosition,
                    imports
                      .filter(comp => !finalExistingImports.has(comp))
                      .map(comp =>
                        comp.endsWith('Icon')
                          ? `import ${comp} from '@material-ui/icons/${comp.substring(
                              0,
                              comp.length - 4
                            )}'`
                          : `import ${comp} from '@material-ui/core/${comp}'`
                      )
                      .join('\n') + '\n'
                  )
                )
              } else {
                const coreImports = imports.filter(
                  comp =>
                    !comp.endsWith('Icon') && !finalExistingImports.has(comp)
                )
                const iconsImports = imports
                  .filter(
                    comp =>
                      comp.endsWith('Icon') && !finalExistingImports.has(comp)
                  )
                  .map(
                    comp => `${comp.substring(0, comp.length - 4)} as ${comp}`
                  )

                if (coreImports.length) {
                  if (coreInsertPosition) {
                    additionalTextEdits.push(
                      vscode.TextEdit.insert(
                        coreInsertPosition,
                        ', ' + coreImports.join(', ')
                      )
                    )
                  } else {
                    additionalTextEdits.push(
                      vscode.TextEdit.insert(
                        insertPosition,
                        `import { ${coreImports.join(
                          ', '
                        )} } from '@material-ui/core'\n`
                      )
                    )
                  }
                }
                if (iconsImports.length) {
                  if (iconsInsertPosition) {
                    additionalTextEdits.push(
                      vscode.TextEdit.insert(
                        iconsInsertPosition,
                        ', ' + iconsImports.join(', ')
                      )
                    )
                  } else {
                    additionalTextEdits.push(
                      vscode.TextEdit.insert(
                        insertPosition,
                        `import { ${iconsImports.join(
                          ', '
                        )} } from '@material-ui/icons'\n`
                      )
                    )
                  }
                }
              }
              if (additionalTextEdits.length)
                snippetCompletion.additionalTextEdits = additionalTextEdits
            }
            result.push(snippetCompletion)
          }
          return result
        },
      })
    )
  }
}
