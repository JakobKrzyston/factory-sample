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

test("truncate can stop at a word boundary", () => {
  assert.equal(truncate("The quick brown fox", 12, { wordBoundary: true }), "The quick…");
  assert.equal(truncate("The quick brown fox", 12), "The quick b…");
  assert.equal(truncate("The quick brown fox", 10, { wordBoundary: true }), "The quick…");
  assert.equal(truncate("abcdefghij klm", 5, { wordBoundary: true }), "abcd…");
});
