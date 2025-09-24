import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CopyButton from "./copy-button";

interface CodeBlockProps {
  children: string;
  language?: string;
}

export default function CodeBlock({ children, language }: CodeBlockProps) {
  const code = String(children).replace(/\n$/, "");
  const codeLang = language || "plaintext";

  return (
    <div className="group relative overflow-auto text-sm">
      <div className="flex flex-row-reverse justify-between text-gray-500">
        <div className="justify-self-end">
          <CopyButton contentToCopy={code} />
        </div>
        {codeLang !== "plaintext" && (
          <div className="text-gray-700 underline text-xs mb-3">{codeLang}</div>
        )}
      </div>
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
