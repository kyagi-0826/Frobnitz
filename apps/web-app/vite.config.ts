import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: resolve(__dirname, '../../postcss.config.js')
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@frobnitz/controls': resolve(__dirname, '../../packages/controls/src'),
      '@frobnitz/common': resolve(__dirname, '../../packages/common/src'),
      '@frobnitz/dashboard': resolve(__dirname, '../../packages/dashboard/src'),
      '@frobnitz/login': resolve(__dirname, '../../packages/login/src'),
    }
  }
})