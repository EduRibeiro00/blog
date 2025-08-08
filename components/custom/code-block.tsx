import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

/**
 * Importing only the needed languages to reduce bundle size
 */
import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import python from "react-syntax-highlighter/dist/cjs/languages/hljs/python";
import scala from "react-syntax-highlighter/dist/cjs/languages/hljs/scala";
import typescript from "react-syntax-highlighter/dist/cjs/languages/hljs/typescript";

SyntaxHighlighter.registerLanguage("scala", scala);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("python", python);

interface CodeBlockProps {
  children: string;
  language?: string;
}

export default function CodeBlock({ children, language }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      style={atomOneLight}
      language={language ?? "plaintext"}
      PreTag="div"
      customStyle={{
        background: "transparent",
        fontSize: "0.9em",
      }}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
}
