import * as vscode from 'vscode'
import snippets from './snippets'

export function activate(context: vscode.ExtensionContext): void {
  for (const language of ['javascriptreact', 'typescriptreact']) {
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
          const result = []
          for (const snippet of Object.values(snippets)) {
            const { prefix, description } = snippet
            const body = (typeof snippet.body === 'function'
              ? snippet.body({
                  language: 'typescriptreact',
                  formControlMode:
                    vscode.workspace
                      .getConfiguration('material-ui-snippets')
                      .get('formControlMode') || 'controlled',
                })
              : snippet.body
            ).replace(/^\n|\n$/gm, '')
            const snippetCompletion = new vscode.CompletionItem(prefix)
            snippetCompletion.insertText = new vscode.SnippetString(body)
            snippetCompletion.documentation = new vscode.MarkdownString(
              description
            )
            result.push(snippetCompletion)
          }
          return result
        },
      })
    )
  }
}
