import * as vscode from 'vscode'
import snippets, { SnippetOptions } from './snippets'
import shallowEqual from 'shallowequal'
import getExistingImports from './getExistingImports'
import getSnippetImports from './getSnippetImports'

interface TextSnippet {
  prefix: string
  description: string
  body: string
  imports: Record<string, string>
}

export function activate(context: vscode.ExtensionContext): void {
  for (const language of ['javascriptreact', 'typescriptreact']) {
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
          let insertPosition: vscode.Position = new vscode.Position(0, 0)
          let existingImports: Set<string> | null
          try {
            ;({ insertPosition, existingImports } = getExistingImports(
              document
            ))
          } catch (error) {
            existingImports = null
          }
          const result = []
          for (const snippet of getSnippets({
            language: language as any, // eslint-disable-line @typescript-eslint/no-explicit-any
            formControlMode:
              vscode.workspace
                .getConfiguration('material-ui-snippets')
                .get('formControlMode') || 'controlled',
          })) {
            const { prefix, description, body, imports } = snippet
            const snippetCompletion = new vscode.CompletionItem(prefix)
            snippetCompletion.insertText = new vscode.SnippetString(body)
            snippetCompletion.documentation = new vscode.MarkdownString(
              description
            )
            const finalExistingImports = existingImports
            if (finalExistingImports) {
              snippetCompletion.additionalTextEdits = [
                vscode.TextEdit.insert(
                  insertPosition,
                  [...Object.entries(imports)]
                    .filter(([source]) => !finalExistingImports.has(source))
                    .map(entry => entry[1])
                    .join('\n') + '\n'
                ),
              ]
            }
            result.push(snippetCompletion)
          }
          return result
        },
      })
    )
  }
}
