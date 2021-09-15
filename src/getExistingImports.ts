import * as vscode from 'vscode'
import jscodeshift, { ImportDeclaration, ASTPath } from 'jscodeshift'
import chooseJSCodeshiftParser from 'jscodeshift-choose-parser'

export default function getExistingImports(
  document: vscode.TextDocument
): {
  existingImports: Set<string>
  insertPosition: vscode.Position
  coreInsertPosition: vscode.Position | null
  iconsInsertPosition: vscode.Position | null
} {
  const text = document.getText()
  const parser = chooseJSCodeshiftParser(document.uri.fsPath)
  const j = parser ? jscodeshift.withParser(parser) : jscodeshift

  const result: Set<string> = new Set()

  let insertLine = 0
  let coreInsertPosition: vscode.Position | null = null
  let iconsInsertPosition: vscode.Position | null = null

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
      if (typeof source !== 'string') return
      if (source === '@mui/material') {
        for (const specifier of node.specifiers) {
          if (specifier.type !== 'ImportSpecifier') continue
          const { loc } = specifier
          if (loc) {
            const { line, column } = loc.end
            coreInsertPosition = new vscode.Position(line - 1, column)
          }
          const { imported, local } = specifier
          if (imported && local && imported.name === local.name) {
            result.add(local.name)
          }
        }
      } else if (source === '@mui/icons-material') {
        for (const specifier of node.specifiers) {
          if (specifier.type !== 'ImportSpecifier') continue
          const { loc } = specifier
          if (loc) {
            const { line, column } = loc.end
            iconsInsertPosition = new vscode.Position(line - 1, column)
          }
          const { imported, local } = specifier
          if (imported && local && imported.name + 'Icon' === local.name) {
            result.add(local.name)
          }
        }
      } else {
        const match = /^@material-ui\/(core|icons)\/([^/]+)/.exec(source)
        if (match) result.add(match[2] + (match[1] === 'icons' ? 'Icon' : ''))
      }
    })
  return {
    existingImports: result,
    insertPosition: new vscode.Position(insertLine, 0),
    coreInsertPosition,
    iconsInsertPosition,
  }
}
