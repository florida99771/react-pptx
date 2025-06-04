import { describe, it, expect } from 'vitest';
import JSZip from 'jszip';
import { pptxToHtml } from '../src/parser/pptxParser';

const sample = new Blob([], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });

describe('pptxToHtml', () => {
  it('should handle empty pptx', async () => {
    const container = document.createElement('div');
    await pptxToHtml({ file: sample, target: container });
    expect(container.children.length).toBe(0);
  });

  it('sanitizes slide text', async () => {
    const zip = new JSZip();
    const xml = `<p:sld xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"
      xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
      <p:cSld><p:spTree><p:sp><p:txBody><a:p><a:r><a:t><img src=x onerror=alert(1) /></a:t></a:r></a:p></p:txBody></p:sp></p:spTree></p:cSld>
    </p:sld>`;
    zip.file('ppt/slides/slide1.xml', xml);
    const blob = await zip.generateAsync({ type: 'blob' });
    const container = document.createElement('div');
    await pptxToHtml({ file: blob, target: container });
    const div = container.querySelector('.ppt-slide') as HTMLDivElement;
    expect(div.textContent).toBe('<img src=x onerror=alert(1) />');
    expect(div.innerHTML).toBe('&lt;img src=x onerror=alert(1) /&gt;');
  });
});
