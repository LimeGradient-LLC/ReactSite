import { resolve } from 'path'
import { defineConfig } from 'vite'

var nWasmPath = __dirname + "N64Wasm/dist/";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gb: resolve(__dirname, "gb.html"),
        n64: resolve(__dirname, "N64Wasm/dist/n64.html")
      },
    },
  },
})