import { resolve } from 'path'
import { defineConfig } from 'vite'

var nWasmPath = __dirname + "N64Wasm/dist/";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        discordauth: resolve(__dirname, 'discordauth.html')
      },
    },
  },
})