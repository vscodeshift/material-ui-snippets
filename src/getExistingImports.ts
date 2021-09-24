import * as vscode from 'vscode'
import jscodeshift, { ImportDeclaration, ASTPath } from 'jscodeshift'
import chooseJSCodeshiftParser from 'jscodeshift-choose-parser'

export default function getExistingImports(document: vscode.TextDocument): {
  existingComponents: Set<string>
  existingIcons: Set<string>
  insertPosition: vscode.Position
  coreInsertPosition: vscode.Position | null
  iconsInsertPosition: vscode.Position | null
  muiVersion: 4 | 5 | null
} {
  const text = document.getText()
  const parser = chooseJSCodeshiftParser(document.uri.fsPath)
  const j = parser ? jscodeshift.withParser(parser) : jscodeshift

  const components: Set<string> = new Set()
  const icons: Set<string> = new Set()

  let muiVersion: 4 | 5 | null = null
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
      if (source.startsWith('@material-ui/')) muiVersion = 4
      else if (source.startsWith('@mui/')) muiVersion = 5
      if (source === '@material-ui/core' || source === '@mui/material') {
        for (const specifier of node.specifiers) {
          if (specifier.type !== 'ImportSpecifier') continue
          const { loc } = specifier
          if (loc) {
            const { line, column } = loc.end
            coreInsertPosition = new vscode.Position(line - 1, column)
          }
          const { imported, local } = specifier
          if (imported && local && imported.name === local.name) {
            components.add(local.name)
          }
        }
      } else if (
        source === '@material-ui/icons' ||
        source === '@mui/icons-material'
      ) {
        for (const specifier of node.specifiers) {
          if (specifier.type !== 'ImportSpecifier') continue
          const { loc } = specifier
          if (loc) {
            const { line, column } = loc.end
            iconsInsertPosition = new vscode.Position(line - 1, column)
          }
          const { imported, local } = specifier
          if (imported && local && imported.name + 'Icon' === local.name) {
            icons.add(local.name)
          }
        }
      } else {
        const match =
          /^(@material-ui\/core|@material-ui\/icons|@mui\/material|@mui\/icons-material)\/([^/]+)/.exec(
            source
          )
        if (match) {
          if (
            match[1] === '@material-ui/icons' ||
            match[1] === '@mui/icons-material'
          ) {
            icons.add(match[2])
          } else {
            components.add(match[2])
          }
        }
      }
    })
  return {
    existingComponents: components,
    existingIcons: icons,
    insertPosition: new vscode.Position(insertLine, 0),
    coreInsertPosition,
    iconsInsertPosition,
    muiVersion,
  }
}
