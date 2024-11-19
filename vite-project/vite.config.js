import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Fitxe-Fatxe/', // O nome do repositório no GitHub
  build: {
    outDir: 'build',
  },
})