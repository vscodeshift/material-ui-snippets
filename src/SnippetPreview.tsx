import * as React from 'react'
import Placeholder, { PlaceholderProps } from './Placeholder'

function getPreview({
  choices,
  default: _default = choices?.[0],
  preview = _default,
}: PlaceholderProps): any {
  return preview
}

function getChoicesProps(
  snippet: React.ReactElement,
  output: Record<string, PlaceholderProps> = {}
): Record<string, PlaceholderProps> {
  for (const [key, value] of Object.entries(snippet.props)) {
    if (key === 'children') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      for (const item of React.Children.toArray(value as any)) {
        if (React.isValidElement(item)) getChoicesProps(item, output)
      }
    } else if (
      value instanceof Object &&
      React.isValidElement(value) &&
      value.type === Placeholder
    ) {
      const props: PlaceholderProps = value.props as any
      if (props.choices && props.preview === undefined) output[key] = props
    }
  }
  return output
}

function Preview({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return <div>{children}</div>
}

function PreviewGroup({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}): React.ReactElement {
  return (
    <div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  )
}

function PreviewGroupItem({
  title,
  snippet,
  bindings,
}: {
  title: string
  snippet: React.ReactElement
  bindings?: Record<string, any>
}): React.ReactElement {
  return (
    <div>
      <div>{title}</div>
      {createSinglePreview({ snippet, bindings })}
    </div>
  )
}

function createSinglePreview({
  snippet,
  bindings,
}: {
  snippet: React.ReactElement
  bindings?: Record<string, any>
}): React.ReactElement {
  function convertProps({
    __oneLine,
    __attributePlaceholder,
    ...props
  }: React.ReactElement['props']): React.ReactElement['props'] {
    const result: React.ReactElement['props'] = {}
    for (const [key, value] of Object.entries(props)) {
      if (key === '__attributePlaceholder') continue
      if (key === 'children') {
        result.children = React.Children.map(value as any, (child, key) => {
          if (React.isValidElement(child)) {
            if (child.type === Placeholder) {
              const preview = getPreview(child.props as PlaceholderProps)
              if (React.isValidElement(preview)) {
                return React.createElement(preview.type, {
                  key,
                  ...convertProps(preview.props),
                })
              } else return preview
            } else {
              return React.createElement(child.type, {
                key,
                ...convertProps(child.props),
              })
            }
          } else {
            return child
          }
        })
        continue
      }
      if (
        value instanceof Object &&
        React.isValidElement(value) &&
        value.type === Placeholder
      ) {
        result[key] =
          bindings?.[key] ?? getPreview(value.props as PlaceholderProps)
      } else {
        result[key] = value
      }
    }
    return result
  }

  return React.createElement(snippet.type, {
    key: snippet.key,
    ...convertProps(snippet.props),
  })
}

export default function SnippetPreview({
  snippet,
}: {
  snippet: React.ReactElement
}): React.ReactElement {
  const choicesProps: Record<string, PlaceholderProps> = getChoicesProps(
    snippet
  )
  let content
  if (Object.keys(choicesProps).length) {
    content = Object.entries(choicesProps).map(
      ([key, placeholder]): React.ReactElement => (
        <PreviewGroup key={key} title={key}>
          {(placeholder.choices || []).map((choice: any) => (
            <PreviewGroupItem
              key={choice}
              title={choice}
              snippet={snippet}
              bindings={{ [key]: choice }}
            />
          ))}
        </PreviewGroup>
      )
    )
  } else {
    content = createSinglePreview({ snippet })
  }
  return <Preview>{content}</Preview>
}
