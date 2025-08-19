import { prerender } from "$app/server";

export const getLength = prerender("unchecked", (text) => {
  return String(text).length;
});