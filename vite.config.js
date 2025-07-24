import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // stellt sicher, dass Vite im Projektverzeichnis schaut
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html', // wichtig: relativer Pfad zur HTML-Datei
    },
  },
});
