export function hello(name?: string): string {
  return `Hello${name ? " " + name : ""}!`;
}

export { other } from "./other";
