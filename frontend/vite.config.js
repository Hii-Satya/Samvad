import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    chunkSizeWarningLimit: 1000, // set to 1000 KB (1 MB), or higher as needed
  },
})
