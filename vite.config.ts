import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJSON from "./package.json";

const separators = new RegExp(/[-_/]+/, "g");
const nonWord = new RegExp(/[^\w\s]/, "g");
const firstLetterAfterSpace = new RegExp(/\s+(.)(\w*)/, "g");
const word = new RegExp(/\w/);

// From https://stackoverflow.com/questions/4068573/convert-string-to-pascal-case-aka-uppercamelcase-in-javascript
function toPascalCase(text: string) {
  return text
    .toLowerCase()
    .replace(separators, " ")
    .replace(nonWord, "")
    .replace(
      firstLetterAfterSpace,
      (_, $2: string, $3: string) => `${$2.toUpperCase() + $3}`,
    )
    .replace(word, (s) => s.toUpperCase());
}

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      name: toPascalCase(packageJSON.name),
      fileName: "main",
    },
  },
  plugins: [
    dts({
      // rollupTypes: true,
      exclude: [
        "node_modules/**",
        "src/**/vite-env.d.ts",
        "src/**/*.spec.ts",
        "vite.config.ts",
      ],
    }),
  ],
});
