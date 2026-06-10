export type ViewportPreviewId = 'mobile' | 'tablet' | 'desktop';

export interface ViewportPreviewOption {
  id: ViewportPreviewId;
  label: string;
  width: string;
  iconUrl?: string;
  iconFallback: string;
}

export const SUPPORTED_VIEWPORT_PREVIEWS: readonly ViewportPreviewOption[] = [
  {
    id: 'mobile',
    label: 'Mobile',
    width: '390px',
    iconUrl: 'assets/images/icons/system/viewport-mobile.svg',
    iconFallback: 'M',
  },
  {
    id: 'tablet',
    label: 'Tablet',
    width: '768px',
    iconUrl: 'assets/images/icons/system/viewport-tablet.svg',
    iconFallback: 'T',
  },
  {
    id: 'desktop',
    label: 'Desktop',
    width: '100%',
    iconUrl: 'assets/images/icons/system/viewport-desktop.svg',
    iconFallback: 'D',
  },
] as const;
