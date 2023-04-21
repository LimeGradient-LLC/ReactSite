import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nes: resolve(__dirname, 'nes.html'),
        nes_embed: resolve(__dirname, 'nes-embed.js'),
        dos: resolve(__dirname, 'dos.html'),
        cac: resolve(__dirname, 'jsdos/cac/_site/index.html'),
        dn3d: resolve(__dirname, 'jsdos/dn3d/_site/index.html'),
        doom: resolve(__dirname, 'jsdos/doom/_site/index.html'),
        doom2: resolve(__dirname, 'jsdos/doom2/_site/index.html'),
        kombat: resolve(__dirname, 'jsdos/kombat/_site/index.html'),
        oregontrail: resolve(__dirname, 'jsdos/oregontrail/_site/index.html'),
        simcity: resolve(__dirname, 'jsdos/simcity/_site/index.html'),
        simcity2000: resolve(__dirname, 'jsdos/simcity2000/_site/index.html'),
        ultimatedoom: resolve(__dirname, 'jsdos/ultimatedoom/_site/index.html'),
        wolfenstein: resolve(__dirname, 'jsdos/wolfenstein/_site/index.html'),
      },
    },
  },
})