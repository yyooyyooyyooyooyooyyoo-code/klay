import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // The entry chunk embeds the hashed names of the page and blog-index chunks, so every content
        // deploy changes it. React, React DOM and React Router only change on dependency upgrades: in a
        // chunk of their own they stay cached in returning visitors' browsers across content deploys.
        manualChunks(id) {
          if (/[\\/]node_modules[\\/](?:react|react-dom|scheduler|react-router|react-router-dom|@remix-run[\\/]router)[\\/]/.test(id)) {
            return 'react-vendor';
          }
          return undefined;
        },
      },
    },
  },
});
