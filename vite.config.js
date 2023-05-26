import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nes: resolve(__dirname, 'nes.html'),
        nes_embed: resolve(__dirname, 'nes-embed.js'),
        n64: resolve(__dirname, "N64Wasm/dist/index.html"),
      },
    },
  },
})