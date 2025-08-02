import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Changed to root path for custom domain
  plugins: [react()],
  preview: {
    port: parseInt(process.env.PORT || '4173'),
    host: '0.0.0.0',
    allowedHosts: ['binarybridges.dev', 'www.binarybridges.dev', 'localhost']
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
} as UserConfig)