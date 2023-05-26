import { resolve } from 'path'
import { defineConfig } from 'vite'

var nWasmPath = __dirname + "N64Wasm/dist/";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nes: resolve(__dirname, 'nes.html'),
        nes_embed: resolve(__dirname, 'nes-embed.js'),
        n64: resolve(__dirname, "N64Wasm/dist/index.html"),
        n64_settings: resolve(__dirname, "N64Wasm/dist/settings.js"),
        n64_roms: resolve(__dirname, "N64Wasm/dist/romlist.js"),
        n64_script: resolve(__dirname, "N64Wasm/dist/script.js"),
      },
    },
  },
})