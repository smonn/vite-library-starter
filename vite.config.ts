import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJSON from "./package.json";

function toCamelCase(str: string) {
  return str.replace(/-([a-z])/g, (g) => g[1]?.toUpperCase() ?? "");
}

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: toCamelCase(packageJSON.name),
      fileName: "index",
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      exclude: ["**/vite-env.d.ts"],
    }),
  ],
});
