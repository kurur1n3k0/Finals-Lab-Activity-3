import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// CRITICAL FOR SUBDIRECTORY DEPLOYMENT (http://esquivellabs.com/vuejs-routing):
// Setting base to '/vuejs-routing/' fixes the "Failed to load resource 404 (assets/index-*.js / .css)" error.
export default defineConfig({
  base: '/vuejs-routing/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});