import * as vscode from 'vscode'
import loadSnippets, { SnippetOptions } from './snippets'
import shallowEqual from 'shallowequal'
import getExistingImports from './getExistingImports'
import getSnippetImports from './getSnippetImports'

class MaterialUICompletionItem extends vscode.CompletionItem {
  imports: string[] | undefined
}

export async function activate(
  context: vscode.ExtensionContext
): Promise<void> {
  const config = vscode.workspace.getConfiguration('material-ui-snippets')
  if (config.get('showNotesOnStartup')) {
    const message =
      'Material-UI Snippets: automatic imports for snippets have been re-enabled now that the VSCode completions API has been improved.'
    vscode.window.showInformationMessage(message)
    config.update(
      'showNotesOnStartup',
      false,
      vscode.ConfigurationTarget.Global
    )
  }

  const snippets = await loadSnippets()

  function getAdditionalTextEdits({
    imports,
  }: {
    imports: string[] | undefined
  }): vscode.TextEdit[] {
    const document = vscode.window.activeTextEditor?.document
    if (!document || !imports) return []

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
        coreInsertPosition || iconsInsertPosition ? 'top level' : 'second level'
    }

    const additionalTextEdits: vscode.TextEdit[] = []
    const finalExistingImports = existingImports
    if (finalExistingImports) {
      if (importPaths === 'second level') {
        additionalTextEdits.push(
          vscode.TextEdit.insert(
            insertPosition,
            imports
              .filter((comp: string) => !finalExistingImports.has(comp))
              .map((comp: string) =>
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
          (comp: string) =>
            !comp.endsWith('Icon') && !finalExistingImports.has(comp)
        )
        const iconsImports = imports
          .filter(
            (comp: string) =>
              comp.endsWith('Icon') && !finalExistingImports.has(comp)
          )
          .map(
            (comp: string) => `${comp.substring(0, comp.length - 4)} as ${comp}`
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
    }
    return additionalTextEdits
  }

  for (const snippet of Object.values(snippets)) {
    const { prefix, description } = snippet
    context.subscriptions.push(
      vscode.commands.registerCommand(`extension.${prefix}`, async () =>
        vscode.window.withProgress(
          {
            cancellable: true,
            location: vscode.ProgressLocation.Notification,
            title: `Inserting Material-UI ${description}...`,
          },
          async (
            progress: vscode.Progress<{
              message?: string | undefined
              increment?: number | undefined
            }>,
            token: vscode.CancellationToken
          ) => {
            const body = (typeof snippet.body === 'function'
              ? snippet.body({
                  language: vscode.window.activeTextEditor?.document
                    .languageId as any, // eslint-disable-line @typescript-eslint/no-explicit-any
                  formControlMode:
                    config.get('formControlMode') || 'controlled',
                })
              : snippet.body
            ).replace(/^\n|\n$/gm, '')

            if (token.isCancellationRequested) return

            const additionalTextEdits = getAdditionalTextEdits({
              imports: getSnippetImports(body),
            })

            if (token.isCancellationRequested) return

            const editor = vscode.window.activeTextEditor
            if (!editor) return
            await editor.insertSnippet(
              new vscode.SnippetString(body),
              editor.selection
            )
            editor.edit((edit: vscode.TextEditorEdit) => {
              for (const additionalEdit of additionalTextEdits) {
                edit.insert(additionalEdit.range.start, additionalEdit.newText)
              }
            })
          }
        )
      )
    )
  }

  for (const language of ['javascript', 'javascriptreact', 'typescriptreact']) {
    let lastOptions: SnippetOptions | null = null
    let lastCompletionItems: MaterialUICompletionItem[]

    const getCompletionItems = (
      options: SnippetOptions
    ): MaterialUICompletionItem[] => {
      if (shallowEqual(options, lastOptions)) {
        return lastCompletionItems
      }
      lastOptions = options
      const result = []
      for (const snippet of Object.values(snippets)) {
        const { prefix, description, docURL } = snippet
        const body = (typeof snippet.body === 'function'
          ? snippet.body(options)
          : snippet.body
        ).replace(/^\n|\n$/gm, '')
        const documentation =
          `**${description}**` +
          `\n\n**Documentation**: [click here](https://material-ui.com/components/${docURL})` +
          `\n\n**Preview**\n\n` +
          `![${prefix}](https://github.com/vscodeshift/material-ui-snippets/blob/screenshots/screenshots/img/${prefix}.png)`
        const completion = new MaterialUICompletionItem(prefix)
        completion.insertText = new vscode.SnippetString(body)
        completion.documentation = new vscode.MarkdownString(documentation)
        completion.imports = getSnippetImports(body)
        result.push(completion)
      }
      return (lastCompletionItems = result)
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
          | MaterialUICompletionItem[]
          | vscode.CompletionList<MaterialUICompletionItem>
        > {
          const config = vscode.workspace.getConfiguration(
            'material-ui-snippets'
          )
          return getCompletionItems({
            language: language as any, // eslint-disable-line @typescript-eslint/no-explicit-any
            formControlMode: config.get('formControlMode') || 'controlled',
          })
        },
        async resolveCompletionItem(
          item: MaterialUICompletionItem,
          /* eslint-disable @typescript-eslint/no-unused-vars */
          token: vscode.CancellationToken
          /* eslint-enable @typescript-eslint/no-unused-vars */
        ): Promise<MaterialUICompletionItem> {
          item.additionalTextEdits = getAdditionalTextEdits(item)
          return item
        },
      })
    )
  }
}
