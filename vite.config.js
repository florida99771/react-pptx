import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'pptxjs-modern',
      // Output filename needs to match "module" entry in package.json
      // and example paths.
      fileName: () => 'pptxjs-modern.mjs',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['jszip', 'd3', 'nvd3', 'react'],
    },
  },
  plugins: [react()],
});
