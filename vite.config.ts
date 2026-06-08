import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages project site the app is served from /<repo>/.
// Local dev stays at "/". Change the repo name here if you rename the repo.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/zuno-website/' : '/',
  plugins: [react()]
}));
