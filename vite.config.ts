import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mashlom-test/',
  css: {
    modules: {
      // Optional: Custom CSS modules configuration
      localsConvention: 'camelCaseOnly',
    },
  },
})
