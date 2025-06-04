import JSZip from 'jszip';

export interface PptxToHtmlOptions {
  /** File URL or Blob */
  file: string | Blob;
  /** Container element where slides will be appended */
  target: HTMLElement;
}

/**
 * Basic PPTX to HTML conversion.
 * Currently extracts slide text and wraps it in divs.
 */
export async function pptxToHtml(options: PptxToHtmlOptions): Promise<void> {
  const { file, target } = options;
  let data: ArrayBuffer;
  if (typeof file === 'string') {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to fetch ${file}`);
    data = await res.arrayBuffer();
  } else {
    data = await file.arrayBuffer();
  }

  const zip = await JSZip.loadAsync(data);
  const slideFiles = Object.keys(zip.files).filter((p) =>
    p.match(/^ppt\/slides\/slide\d+\.xml$/)
  );
  const parser = new DOMParser();
  for (const slidePath of slideFiles.sort()) {
    const xml = await zip.files[slidePath].async('string');
    const doc = parser.parseFromString(xml, 'text/xml');
    const texts = Array.from(doc.getElementsByTagName('a:t'));
    const div = document.createElement('div');
    div.className = 'ppt-slide';
    div.innerHTML = texts.map((t) => t.textContent).join(' ');
    target.appendChild(div);
  }
}
