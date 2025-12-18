import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function FahrenheitToCelsius(fahrenheit: number) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

// Created a custom function, since new Date doesn't support ordinal suffixes
function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function formatDate(date: string) {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const weekday = dateObj.toLocaleDateString("en-NL", { weekday: "long" });
  const month = dateObj.toLocaleDateString("en-NL", { month: "short" });

  return `${weekday} ${day}${getOrdinalSuffix(day)} ${month}`;
}

export function formatWindDirection(windDirection: string) {
  return windDirection.length === 2
    ? `${windDirection[0]}/${windDirection[1]}`
    : windDirection;
}
