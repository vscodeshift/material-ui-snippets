import * as React from 'react'
import createSnippet from './src/createSnippet'
import SnippetPreview from './src/SnippetPreview'
import * as ReactDOM from 'react-dom/server'
import * as TextFieldMore from './src/snippets/muiTextFieldMore'
import * as Dialog from './src/snippets/muiDialog'

for (const snippet of [TextFieldMore, Dialog]) {
  console.log(
    createSnippet(snippet.body, {
      formControlMode: 'controlled',
      language: 'javascriptreact',
    })
  )

  console.log(
    ReactDOM.renderToString(
      <SnippetPreview
        snippet={snippet.body}
        formControlMode="controlled"
        language="javascriptreact"
        forPreview
      />
    )
  )
}
