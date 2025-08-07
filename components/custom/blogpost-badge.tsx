import { LucideIcon } from "lucide-react";

interface BlogpostBadgeProps {
  Icon: LucideIcon;
  text: string;
  size: "sm" | "md";
}

export default function BlogpostBadge({
  Icon,
  text,
  size,
}: BlogpostBadgeProps) {
  return (
    <div className="flex items-center gap-1">
      <Icon className={size === "md" ? "w-4 h-4" : "w-3 h-3"} />
      <span className={`${size === "md" ? "text-md" : "text-sm"} italic`}>
        {text}
      </span>
    </div>
  );
}
