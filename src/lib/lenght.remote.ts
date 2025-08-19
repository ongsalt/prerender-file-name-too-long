import { prerender } from "$app/server";

export const getLenght = prerender("unchecked", (text) => {
  return String(text).length;
});