// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/WeRiseClean/',
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from one level up from the project root
      allow: ['..']
    }
  },
  build: {
    // Increase the warning limit to avoid the chunk size warning
    chunkSizeWarningLimit: 1000,
    // Improve chunking for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
          ui: ['lucide-react'],
        },
      },
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    // Ensure assets are copied to the output directory
    assetsDir: 'assets',
    // Copy favicon.ico to the root of the output directory
    emptyOutDir: true,
  },
  // Configure asset handling
  publicDir: 'public',
  assetsInclude: ['**/*.png', '**/*.svg', '**/*.ico'],
});