export default function getSnippetImports(body: string): string[] {
  const rx = /<([A-Z][A-Za-z]+)/g
  const components: Set<string> = new Set()
  let match
  while ((match = rx.exec(body))) {
    components.add(match[1])
  }
  return [...components].sort()
}
