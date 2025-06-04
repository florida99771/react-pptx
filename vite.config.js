import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'pptxjs-modern',
      fileName: (format) => `pptxjs-modern.${format}.mjs`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['jszip', 'd3', 'nv.d3', 'react'],
    },
  },
  plugins: [react()],
});
