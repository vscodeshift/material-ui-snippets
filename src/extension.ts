import * as vscode from 'vscode'
import snippets, { SnippetOptions } from './snippets'
import shallowEqual from 'shallowequal'
import getExistingImports from './getExistingImports'
import getSnippetImports from './getSnippetImports'
import once from './once'

interface TextSnippet {
  prefix: string
  description: string
  body: string
  imports: string[]
}

export function activate(context: vscode.ExtensionContext): void {
  const config = vscode.workspace.getConfiguration('material-ui-snippets')
  if (config.get('showNotesOnStartup')) {
    const message = config.get('addCompletionImports')
      ? 'Material-UI Snippets: if you experience performance problems, uncheck Add Completion Imports in the extension settings.  Once improvements to the VSCode API have been released, it will be possible to turn automatic imports back on without performance problems.'
      : 'Material-UI Snippets: automatic imports have been disabled due to performance problems.  You can turn them back on in the extension settings.  Once improvements to the VSCode API have been released, it will be possible to turn automatic imports back on without performance problems.'
    vscode.window.showInformationMessage(message)
    config.update(
      'showNotesOnStartup',
      false,
      vscode.ConfigurationTarget.Global
    )
  }

  function getAdditionalTextEdits(
    snippet: TextSnippet,
    getExistingImports: (
      document: vscode.TextDocument
    ) => {
      existingImports: Set<string>
      insertPosition: vscode.Position
      coreInsertPosition: vscode.Position | null
      iconsInsertPosition: vscode.Position | null
    }
  ): vscode.TextEdit[] {
    const document = vscode.window.activeTextEditor?.document
    if (!document) return []

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
    const { imports } = snippet
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

            const additionalTextEdits = getAdditionalTextEdits(
              {
                prefix,
                body,
                description,
                imports: getSnippetImports(body),
              },
              getExistingImports
            )

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

          const getExistingImportsOnce = once((document: vscode.TextDocument) =>
            getExistingImports(document)
          )

          const result = []
          for (const snippet of rawSnippets) {
            const snippetCompletion = convertToCompletion(snippet)
            snippetCompletion.additionalTextEdits = getAdditionalTextEdits(
              snippet,
              getExistingImportsOnce
            )
            result.push(snippetCompletion)
          }
          return result
        },
      })
    )
  }
}
