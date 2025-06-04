import { useEffect, useRef } from 'react';
import type { PptxToHtmlOptions } from '../parser/pptxParser';
import { pptxToHtml } from '../parser/pptxParser';

export interface PptViewerProps {
  fileUrl: string | Blob;
  scale?: number;
  slideMode?: boolean;
  onSlideChange?: (index: number) => void;
}

export function PptViewer({ fileUrl }: PptViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';
    const options: PptxToHtmlOptions = { file: fileUrl, target: container };
    pptxToHtml(options);
  }, [fileUrl]);
  return <div ref={containerRef} className="ppt-container" />;
}
