import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

export interface IconLinkButtonProps {
  Icon: LucideIcon;
  link: string;
  label: string;
  variant: "row" | "col";
}

export default function IconLinkButton({
  Icon,
  link,
  label,
  variant,
}: IconLinkButtonProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group">
      <Button
        variant="outline"
        className={`w-full h-auto flex items-center gap-2 bg-transparent pointer-events-none ${
          variant === "row" ? "px-3" : "p-4 flex-col"
        }`}
      >
        <Icon
          className={`text-gray-700 ${
            variant === "row" ? "w-4 h-4" : "w-6 h-6"
          }`}
        />
        <span className="text-sm font-medium text-gray-700 group-hover:underline">
          {label}
        </span>
      </Button>
    </a>
  );
}
