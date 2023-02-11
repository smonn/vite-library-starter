import { expect, test } from "vitest";
import { hello } from ".";

test('returns "Hello World!"', () => {
  expect(hello("World")).toBe("Hello World!");
});

test('returns "Hello Name!"', () => {
  expect(hello("Name")).toBe("Hello Name!");
});

test('returns "Hello!"', () => {
  expect(hello()).toBe("Hello!");
});
