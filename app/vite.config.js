import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Foody-Zone/',  // ✅ Repo name without spaces
  plugins: [react()],
})
