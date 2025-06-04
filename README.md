# PPTXjs Modern

This is a modernized fork of PPTXjs providing a small PPTX to HTML converter
without jQuery. It exposes an ES module and UMD build and a small React wrapper.

## Usage

```ts
import { pptxToHtml } from 'pptxjs-modern';

const target = document.getElementById('slides')!;
await pptxToHtml({ file: '/slides.pptx', target });
```

For React:

```tsx
import { PptViewer } from 'pptxjs-modern';

<PptViewer fileUrl="/slides.pptx" />
```

## Build

- `npm run build` – creates `dist/pptxjs-modern.mjs` and `dist/pptxjs-modern.min.js`.
- `npm test` – runs unit tests with Vitest.
