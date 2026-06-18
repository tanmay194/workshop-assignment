import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Ensure this is imported for v4

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // This plugin is required for v4 build
  ],
})