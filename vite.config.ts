import { defineConfig } from 'vite';
import { VitePWA as pwa } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pwa({
      strategies: 'injectManifest',
      srcDir: '',
      filename: 'service-worker.js',
      manifest,
    }),
  ],
});
