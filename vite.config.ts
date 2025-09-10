import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@frobnitz/controls': resolve(__dirname, 'packages/controls/src'),
      '@frobnitz/common': resolve(__dirname, 'packages/common/src'),
      '@frobnitz/pages': resolve(__dirname, 'packages/pages/src'),
    }
  },
  build: {
    rollupOptions: {
      external: ['vue']
    }
  }
})