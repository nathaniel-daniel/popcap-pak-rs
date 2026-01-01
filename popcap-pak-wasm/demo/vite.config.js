import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "node:path";
import { exec } from "node:child_process";
import { promisify } from "node:util";
import topLevelAwait from "vite-plugin-top-level-await";

const wasmPackCommandArgs = [
  "build",
  path.resolve(__dirname, ".."),
  "--release",
  // These are enabled by default in the Rust std anyway.
  "--reference-types",
  "--weak-refs",
  "--out-dir",
  path.join(__dirname, "pkg"),
];

function buildWasmPack() {
  return {
    name: "build-wasm-pack",

    async buildStart(options) {
      await promisify(exec)("wasm-pack " + wasmPackCommandArgs.join(" "), {
        stdio: "ignore",
      });
    },
  };
}

export default defineConfig({
  base: "",
  plugins: [buildWasmPack(), svelte({}), wasm(), topLevelAwait()],
});
