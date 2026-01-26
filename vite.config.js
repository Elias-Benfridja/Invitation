import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      '*.serveousercontent.com',
      "244eec7fdb8f9546-154-121-90-220.serveousercontent.com"
    ],
  },
})
