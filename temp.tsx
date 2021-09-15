import * as React from 'react'
import createSnippet from './src/createSnippet'
import SnippetPreview from './src/SnippetPreview'
import * as ReactDOM from 'react-dom/server'
// import * as TextFieldMore from './src/snippets/muiTextFieldMore'
import * as CardHeader from './src/snippets/muiCardHeader'

for (const snippet of [CardHeader]) {
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
