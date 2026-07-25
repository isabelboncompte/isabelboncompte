import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  // The site is served from the domain root (isabelboncompte.com via CNAME)
  base: "/",
  plugins: [
    vue(),
    vueDevTools(),
    imagetools(),
  ],
  assetsInclude: ['**/*.jpg', '**/*.png'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
