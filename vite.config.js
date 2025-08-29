import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 This ensures relative paths work on shared hosting
  assetsInclude: ["**/*.JPG", "**/*.PNG", "**/*.jpg", "**/*.png"],
})
