import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BacklinkProps {
  text: string;
  href: string;
}

export default function Backlink({ text, href } : BacklinkProps) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 m-0">
      <ArrowLeft className="w-4 h-4" />
      {text}
    </Link>
  );
}