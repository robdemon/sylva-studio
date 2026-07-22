import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Served from https://robdemon.github.io/sylva-studio/
  base: '/sylva-studio/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
