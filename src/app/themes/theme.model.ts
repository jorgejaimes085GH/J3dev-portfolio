export type PortfolioTheme = 'dark-tech' | 'light-professional' | 'premium-3d';

export interface ThemeOption {
  id: PortfolioTheme;
  label: string;
  description: string;
}

export const DEFAULT_PORTFOLIO_THEME: PortfolioTheme = 'light-professional';

export const SUPPORTED_THEMES: readonly ThemeOption[] = [
  {
    id: 'light-professional',
    label: 'Light Professional',
    description: 'Default professional experience for recruiters and business stakeholders.',
  },
  {
    id: 'dark-tech',
    label: 'Dark Tech',
    description: 'Technical-focused experience for developers, tech leads, and architects.',
  },
  {
    id: 'premium-3d',
    label: 'Premium 3D',
    description: 'Optional enhanced experience with creative visual effects.',
  },
];
