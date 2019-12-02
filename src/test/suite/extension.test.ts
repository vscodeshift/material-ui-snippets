// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode'

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.')

  test('extension.helloWorld command', async function() {
    await vscode.commands.executeCommand('extension.helloWorld')
  })
})
