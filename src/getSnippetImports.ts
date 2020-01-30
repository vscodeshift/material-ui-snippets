export default function getSnippetImports(
  body: string
): Record<string, string> {
  const rx = /<([A-Z][A-Za-z]+)/g
  const components: Set<string> = new Set()
  let match
  while ((match = rx.exec(body))) {
    components.add(match[1])
  }
  const imports: Record<string, string> = {}
  ;[...components].sort().forEach(component => {
    if (/Icon$/.test(component)) {
      imports[
        `@material-ui/icons/${component.replace(/Icon$/, '')}`
      ] = `import ${component} from "@material-ui/icons/${component.replace(
        /Icon$/,
        ''
      )}";`
    } else {
      imports[
        `@material-ui/core/${component}`
      ] = `import ${component} from "@material-ui/core/${component}";`
    }
  })
  return imports
}
