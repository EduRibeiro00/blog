"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CopyButtonProps {
  contentToCopy: string;
}

const COPY_TIMEOUT = 2000;

export default function CopyButton({ contentToCopy }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contentToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), COPY_TIMEOUT);
    } catch (e) {
      console.error(`Failed to copy: ${e}`);
    }
  };

  return (
    <button
      className={`p-1 rounded-md transition-all duration-200 ease-in-out
        ${isCopied ? "bg-green-100 text-green-600" : "hover:bg-gray-300"}`}
      title={isCopied ? "Copied!" : "Copy to clipboard"}
    >
      {isCopied ? (
        <Check className="w-5 h-5 animate-pulse" />
      ) : (
        <Copy className="w-5 h-5" onClick={handleCopy} />
      )}
    </button>
  );
}
