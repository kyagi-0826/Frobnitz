import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@frobnitz/controls': resolve(__dirname, '../controls/src'),
      '@frobnitz/common': resolve(__dirname, '../common/src'),
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'FrobnitzPages',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', '@frobnitz/controls', '@frobnitz/common'],
      output: {
        globals: {
          vue: 'Vue',
          '@frobnitz/controls': 'FrobnitzControls',
          '@frobnitz/common': 'FrobnitzCommon'
        }
      }
    }
  }
})