import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  children: string;
  language?: string;
}

export default function CodeBlock({ children, language }: CodeBlockProps) {
  const code = String(children).replace(/\n$/, "");

  return (
    <div className="group relative overflow-auto text-sm">
      {/* TODO: add copy button and language title */}
      {/* <div className="absolute right-0 text-gray-500">
        <Copy className="w-4 h-4" />
      </div> */}
      <SyntaxHighlighter
        style={coldarkCold}
        language={language ?? "plaintext"}
        customStyle={{
          background: "transparent",
          font: "mono",
          margin: 0,
          padding: 0,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
