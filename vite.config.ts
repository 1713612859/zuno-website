import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base ("./") so the build works when served from a domain root,
// an IP:port root (e.g. Baota / nginx), or any subfolder — no path assumptions.
export default defineConfig({
  base: './',
  plugins: [react()]
});
