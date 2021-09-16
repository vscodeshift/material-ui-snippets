/* eslint-disable @typescript-eslint/no-explicit-any */

import requireGlob from 'require-glob'
import path from 'path'
import * as React from 'react'

export type InputSnippetOptions = {
  forPreview?: boolean
  formControlMode: 'controlled' | 'uncontrolled'
  language: 'javascriptreact' | 'typescriptreact'
}
export type SnippetOptions = InputSnippetOptions & {
  $: {
    (options?: any): any
    [name: string]: (options?: any) => any
  }
  Components: Record<string, React.ComponentType<any>>
  Icons: Record<string, React.ComponentType<any>>
}

export type SnippetBodyComponent = (
  options: SnippetOptions
) => React.ReactElement

export type SnippetBody = string | SnippetBodyComponent

export type Snippet = {
  prefix: string
  description: string
  body: SnippetBody
  components?: string[]
  icons?: string[]
}

export default async function loadSnippets(): Promise<Record<string, Snippet>> {
  return await requireGlob('./*.{js,ts,tsx}', {
    reducer: (
      options: Record<string, any>,
      result: Record<string, any>,
      file: { path: string; exports: any }
    ) => {
      if (file.path === __filename) return result
      const filename = path.basename(file.path)
      const filenameNoExt = filename.replace(/\.[^.]+$/, '')
      const { prefix = filenameNoExt, description, body } = file.exports
      if (!prefix || typeof prefix !== 'string') {
        throw new Error(
          `src/snippets/${filename}: prefix must be a string if exported`
        )
      }
      if (!description || typeof description !== 'string') {
        throw new Error(
          `src/snippets/${filename}: must export a string description`
        )
      }
      if (!body || (typeof body !== 'string' && typeof body !== 'function')) {
        throw new Error(
          `src/snippets/${filename}: must export a function or string body`
        )
      }
      result[filenameNoExt] = { prefix, description, body }
      return result
    },
  })
}
