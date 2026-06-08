export type ViewportPreviewId = 'mobile' | 'tablet' | 'desktop';

export interface ViewportPreviewOption {
  id: ViewportPreviewId;
  label: string;
  width: string;
}

export const SUPPORTED_VIEWPORT_PREVIEWS: readonly ViewportPreviewOption[] = [
  {
    id: 'mobile',
    label: 'Mobile',
    width: '390px',
  },
  {
    id: 'tablet',
    label: 'Tablet',
    width: '768px',
  },
  {
    id: 'desktop',
    label: 'Desktop',
    width: '100%',
  },
] as const;
