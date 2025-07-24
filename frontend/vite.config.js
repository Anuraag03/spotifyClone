import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/spotifyClone/', // 👈 IMPORTANT: this fixes blank screen on GitHub Pages
  plugins: [react(), tailwindcss()],
})
