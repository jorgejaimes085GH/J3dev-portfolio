export type PortfolioLanguage = 'en' | 'es';

export const DEFAULT_PORTFOLIO_LANGUAGE: PortfolioLanguage = 'en';

export const SUPPORTED_PORTFOLIO_LANGUAGES: readonly PortfolioLanguage[] = ['en', 'es'] as const;
