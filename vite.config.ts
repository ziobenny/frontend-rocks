import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'https://ziobenny.github.io/frontend-rocks/' : '/',
  plugins: [react(), tailwindcss()],
})
