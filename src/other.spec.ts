import { expect, test } from "vitest";
import { other } from "./other.js";

test('returns "other"', () => {
  expect(other()).toBe("other");
});
