import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// vite.config.ts (add these two lines to what's already there)
import tailwindcss from '@tailwindcss/vite'

// ...and inside defineConfig, plugins becomes:
// plugins: [react(), tailwindcss()],

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
