/* eslint-disable @typescript-eslint/no-explicit-any */

import requireGlob from 'require-glob'
import path from 'path'
import { CompiledSnippet } from '../snip'

export type SnippetOptions = {
  language: 'javascriptreact' | 'typescriptreact'
  formControlMode: 'controlled' | 'uncontrolled'
}

export type SnippetBody = string | CompiledSnippet

export type Snippet = {
  prefix: string
  description: string
  body: SnippetBody
  docURL?: string
}

export default async function loadSnippets(): Promise<Record<string, Snippet>> {
  return await requireGlob('./*.{js,ts}', {
    reducer: (
      options: Record<string, any>,
      result: Record<string, any>,
      file: { path: string; exports: any }
    ) => {
      if (file.path === __filename) return result
      const filename = path.basename(file.path)
      const filenameNoExt = filename.replace(/\.[^.]+$/, '')
      const { prefix = filenameNoExt, description, body, docURL } = file.exports
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
      result[filenameNoExt] = { prefix, description, body, docURL }
      return result
    },
  })
}
