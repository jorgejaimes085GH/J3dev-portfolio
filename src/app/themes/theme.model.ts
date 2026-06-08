export type PortfolioTheme = 'dark-tech' | 'light-professional' | 'premium-3d';

export interface ThemeOption {
  id: PortfolioTheme;
  label: string;
}

export const SUPPORTED_THEMES: readonly ThemeOption[] = [
  { id: 'dark-tech', label: 'Dark Tech' },
  { id: 'light-professional', label: 'Light Professional' },
  { id: 'premium-3d', label: 'Premium 3D' },
];
