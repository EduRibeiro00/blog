import CodeBlock from "@/components/custom/code-block";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium mb-3 text-gray-700">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-gray-600 leading-relaxed">{children}</p>
    ),
    pre: ({ children, ...props }) => (
      <pre className="bg-gray-200 rounded p-4 mb-4 overflow-x-auto" {...props}>
        {children}
      </pre>
    ),
    code: ({ children, ...props }) => {
      /**
       * Distinguish between inline code and code blocks
       */
      const isInline =
        !props.className || !props.className.startsWith("language-");
      if (isInline) {
        return (
          <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">
            {children}
          </code>
        );
      }

      /**
       * If code block, then extract language and
       * render custom code block component
       */
      const match = /language-(\w+)/.exec(props.className || "");
      const language = match ? match[1] : "plaintext";

      return <CodeBlock language={language}>{children}</CodeBlock>;
    },
    img: (props) => (
      <Image
        {...props}
        width={600}
        height={300}
        className="mb-4 mx-auto"
        alt={props.alt || ""}
      />
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 text-gray-600">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 text-gray-600">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4 text-gray-600">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-blue-700 hover:underline">
        {children}
      </a>
    ),
    ...components,
  };
}
