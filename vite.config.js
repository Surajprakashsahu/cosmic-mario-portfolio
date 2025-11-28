import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoBase = '/cosmic-mario-portfolio/';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? repoBase : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
});
