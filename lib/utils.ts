import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function formatMonthDate(dateStr: string) {
  const [year, month] = dateStr.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function formatTimeRangeStr(startDate: string, endDate: string): string {
  const startDateStr = formatMonthDate(startDate);
  const endDateStr = endDate === "Present" ? endDate : formatMonthDate(endDate);

  return `${startDateStr} - ${endDateStr}`;
}
