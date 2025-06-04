import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'dist/pptxjs-modern.min.js',
    format: 'umd',
    name: 'pptxjs',
    sourcemap: true,
  },
  external: ['jszip', 'd3', 'nv.d3', 'react'],
  plugins: [typescript({ tsconfig: './tsconfig.json' })],
});
