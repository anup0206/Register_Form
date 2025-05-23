import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  build: {
    sourcemap: false, // Disable source maps in production
  },
  css: {
    devSourcemap: false, // Disable CSS source maps in development
  },
  assetsInclude: ['**/*.jpg', '**/*.png'],
})

