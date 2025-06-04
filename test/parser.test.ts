import { describe, it, expect } from 'vitest';
import { pptxToHtml } from '../src/parser/pptxParser';

const sample = new Blob([], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });

describe('pptxToHtml', () => {
  it('should handle empty pptx', async () => {
    const container = document.createElement('div');
    await pptxToHtml({ file: sample, target: container });
    expect(container.children.length).toBe(0);
  });
});
