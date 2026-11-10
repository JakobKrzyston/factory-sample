/** Small string helpers: slugify, truncate, wordCount. */

/** Lowercase `text` and join its letters and digits with hyphens, for use in URLs. */
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Shorten `text` to at most `max` characters, ending with "…" when it was cut. */
export function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1) + "…";
}

/** Count the words in `text`, where words are separated by whitespace. */
export function wordCount(text: string): number {
  return text.split(/\s+/).length;
}
