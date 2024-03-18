import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './src/renderer',
  base: './',
  build: {
    outDir: path.join(__dirname, './dist/renderer'),
    sourcemap: true,
  }
})
