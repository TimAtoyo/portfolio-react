
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    {
      name: 'eslint',
      enforce: 'pre', // Enforces linting before serving the app
      apply: 'serve', // Applies linting only during development (serve mode)
      options: {
        lintDirtyModulesOnly: true, // Only lints files that have changed
      },
    },
    {
      name: 'prettier',
      apply: 'build', // Applies formatting only during build
    },
    
  ],
  optimizeDeps: {
    // include: ['linked-dep'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      // include: [/linked-dep/, /node_modules/],
    },
  },
  server: {
    open: true,
    port: 3000
  }, 
  base: '/portfolio-react/',
})