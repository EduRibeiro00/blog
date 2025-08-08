import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/cjs/styles/prism";

/**
 * Importing only the needed languages to reduce bundle size
//  */
// import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
// import python from "react-syntax-highlighter/dist/cjs/languages/hljs/python";
// import scala from "react-syntax-highlighter/dist/cjs/languages/hljs/scala";
// import typescript from "react-syntax-highlighter/dist/cjs/languages/hljs/typescript";

// SyntaxHighlighter.registerLanguage("scala", scala);
// SyntaxHighlighter.registerLanguage("javascript", javascript);
// SyntaxHighlighter.registerLanguage("typescript", typescript);
// SyntaxHighlighter.registerLanguage("python", python);

interface CodeBlockProps {
  children: string;
  language?: string;
}

export default function CodeBlock({ children, language }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      style={coldarkCold}
      language={language ?? "plaintext"}
      customStyle={{
        background: "transparent",
        fontSize: "0.9em",
        margin: 0,
        padding: 0,
      }}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
}
