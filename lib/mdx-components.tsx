import type { MDXComponents } from "mdx/types"
import Image from "next/image"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 text-gray-900">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold mb-4 text-gray-800">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium mb-3 text-gray-700">{children}</h3>,
    p: ({ children }) => <p className="mb-4 text-gray-600 leading-relaxed">{children}</p>,
    pre: ({ children }) => <pre className="bg-gray-100 rounded-lg p-4 mb-4 overflow-x-auto">{children}</pre>,
    code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>,
    img: (props) => <Image {...props} width={800} height={400} className="rounded-lg mb-4" alt={props.alt || ""} />,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-gray-600">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-gray-600">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4 text-gray-600">{children}</blockquote>
    ),
    a: ({href, children}) => <a href={href} className="text-blue-600 hover:text-blue-800 underline">{children}</a>,
    ...components,
  }
}
