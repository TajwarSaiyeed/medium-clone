import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const createSlugFromName = (name: string) => {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  return slug;
};

export const combineName = (
  user: { firstName?: string; lastName?: string } | null
) => {
  if (!user) return "Anonymous";
  if (!user.firstName && !user.lastName) return "Anonymous";
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
};

export const formatDate = (date: number) => {
  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return formatter.format(date);
};
