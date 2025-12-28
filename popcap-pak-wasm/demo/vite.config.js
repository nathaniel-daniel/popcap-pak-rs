import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { run } from "vite-plugin-run";
import path from "node:path";

export default defineConfig({
  plugins: [
    run({
      input: [
        {
          name: "Wasm-Pack Build",
          run: [
            "wasm-pack",
            "build",
            "..",
            "--release",
            // These are enabled by default in the Rust std anyway.
            "--reference-types",
            "--out-dir",
            path.join(__dirname, "pkg"),
          ],
          pattern: ["../**/*.rs", "../**/*.toml", "../**/*.lock"],
        },
      ],
      // silent: false,
    }),
    svelte({}),
    wasm(),
  ],
});
