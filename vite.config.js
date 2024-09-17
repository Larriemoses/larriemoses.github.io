import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolioweb/', // Update this to your repository name
  build: {
    rollupOptions: {
      external: []
    }
  }
});
