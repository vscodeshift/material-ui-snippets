import * as React from 'react'
import createSnippet from './src/createSnippet'
import SnippetPreview from './src/SnippetPreview'
import * as ReactDOM from 'react-dom/server'
import * as TextFieldMore from './src/snippets/muiTextFieldMore2'
import * as Dialog from './src/snippets/muiDialog2'

for (const snippet of [TextFieldMore, Dialog]) {
  console.log(createSnippet(snippet.body, { formControlMode: 'controlled' }))

  console.log(
    ReactDOM.renderToString(
      <SnippetPreview
        snippet={snippet.body}
        formControlMode="controlled"
        forPreview
      />
    )
  )
}
