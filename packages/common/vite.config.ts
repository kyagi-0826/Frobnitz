import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'FrobnitzCommon',
      fileName: 'index'
    },
    rollupOptions: {
      output: {
        // Ensure we preserve the library structure for proper type generation
        exports: 'named'
      }
    }
  }
})