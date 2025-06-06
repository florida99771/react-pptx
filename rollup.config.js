import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'dist/pptxjs-modern.min.js',
    format: 'umd',
    name: 'pptxjs',
    globals: {
      jszip: 'JSZip',
      react: 'React',
      d3: 'd3',
      nvd3: 'nv',
    },
    sourcemap: true,
  },
  external: ['jszip', 'd3', 'nvd3', 'react'],
  plugins: [typescript({ tsconfig: './tsconfig.json' })],
});
