import React, { useEffect, useRef } from 'react';
import type { PptxToHtmlOptions } from '../parser/pptxParser';
import { pptxToHtml } from '../parser/pptxParser';
import { clearElement } from '../utils/domUtils';

export interface PptViewerProps {
  fileUrl: string | Blob;
  scale?: number;
  slideMode?: boolean;
  onSlideChange?: (index: number) => void;
}

export function PptViewer({ fileUrl }: PptViewerProps) {
  // Avoid generic parameters to keep compatibility when React types are missing
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    clearElement(container);
    const options: PptxToHtmlOptions = { file: fileUrl, target: container };
    void pptxToHtml(options).catch((err) => {
      console.error('Failed to render PPTX', err);
    });
  }, [fileUrl]);
  return <div ref={containerRef} className="ppt-container" />;
}
