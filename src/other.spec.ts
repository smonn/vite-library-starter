import { expect, test } from "vitest";
import { other } from "./other";

test('returns "other"', () => {
  expect(other()).toBe("other");
});
