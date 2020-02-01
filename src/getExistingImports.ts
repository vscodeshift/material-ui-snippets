import * as vscode from 'vscode'
import jscodeshift, { ImportDeclaration, ASTPath } from 'jscodeshift'
import chooseJSCodeshiftParser from 'jscodeshift-choose-parser'

export default function getExistingImports(
  document: vscode.TextDocument
): { insertPosition: vscode.Position; existingImports: Set<string> } {
  const text = document.getText()
  const parser = chooseJSCodeshiftParser(document.uri.fsPath)
  const j = parser ? jscodeshift.withParser(parser) : jscodeshift

  const result: Set<string> = new Set()

  let insertLine = 0

  let root
  try {
    root = j(text)
  } catch (error) {
    // fall back to trying with flow parser, because it tends to be
    // very tolerant of errors and we might at least get the import
    // nodes
    root = j.withParser('flow')(text)
  }
  root
    .find(j.ImportDeclaration)
    .forEach(({ node }: ASTPath<ImportDeclaration>): void => {
      if (!node) return
      if (node.loc) insertLine = node.loc.end.line
      const source = node.source.value
      if (typeof source === 'string' && source.startsWith('@material-ui')) {
        result.add(source)
      }
    })
  return {
    insertPosition: new vscode.Position(insertLine, 0),
    existingImports: result,
  }
}
