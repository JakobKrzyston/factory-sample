/** Small string helpers: slugify, truncate, wordCount. */

/** Lowercase `text` and join its letters and digits with hyphens, for use in URLs. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Shorten `text` to at most `max` characters, ending with "…" when it was cut.
 * With `wordBoundary: true`, cut at the last whole word that fits instead of
 * mid-word (falls back to a mid-word cut if the first word alone is too long).
 */
export function truncate(
  text: string,
  max: number,
  options: { wordBoundary?: boolean } = {},
): string {
  if (text.length <= max) return text;
  let cut = text.slice(0, max - 1);
  if (options.wordBoundary && !/\s/.test(text[max - 1] ?? "")) {
    const end = cut.search(/\s+\S*$/);
    if (end > 0) cut = cut.slice(0, end);
  }
  return cut.trimEnd() + "…";
}

/** Count the words in `text`, where words are separated by whitespace. */
export function wordCount(text: string): number {
  return text.split(/\s+/).length;
}
