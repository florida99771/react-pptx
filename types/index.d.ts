export interface PptxToHtmlOptions {
  file: string | Blob;
  target: HTMLElement;
}

export function pptxToHtml(options: PptxToHtmlOptions): Promise<void>;

export interface PptViewerProps {
  fileUrl: string | Blob;
  scale?: number;
  slideMode?: boolean;
  onSlideChange?: (index: number) => void;
}

export function PptViewer(props: PptViewerProps): JSX.Element;
