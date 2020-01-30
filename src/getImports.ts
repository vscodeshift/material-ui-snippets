export default function getImports(body: string): string[] {
  const rx = /<([A-Z][A-Za-z]+)/g
  const components: Set<string> = new Set()
  let match
  while ((match = rx.exec(body))) {
    components.add(match[1])
  }
  return [...components]
    .sort()
    .map(
      component => `import ${component} from "@material-ui/core/${component}";`
    )
}
