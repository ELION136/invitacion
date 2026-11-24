import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' permite publicar en cualquier hosting (Netlify, Vercel, GitHub Pages, subcarpetas, etc.)
export default defineConfig({
  base: './',
  plugins: [react()],
})
