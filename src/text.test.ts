import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify, truncate, wordCount } from "./text.ts";

test("slugify joins words with hyphens", () => {
  assert.equal(slugify("Hello, World!"), "hello-world");
});

test("truncate leaves short text alone", () => {
  assert.equal(truncate("short", 10), "short");
});

test("truncate cuts long text and adds an ellipsis", () => {
  assert.equal(truncate("abcdefghij", 5), "abcd…");
});

test("wordCount counts words", () => {
  assert.equal(wordCount("one two  three"), 3);
});
