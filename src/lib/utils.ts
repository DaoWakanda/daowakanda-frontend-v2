import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-variants";

export function cn(...inputs: ClassValue[]) {
  return (clsx(inputs));
}
