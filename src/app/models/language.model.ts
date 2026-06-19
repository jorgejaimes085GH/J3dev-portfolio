export type PortfolioLanguage = 'en' | 'es';

export const DEFAULT_PORTFOLIO_LANGUAGE: PortfolioLanguage = 'en';

export const SUPPORTED_PORTFOLIO_LANGUAGES: readonly PortfolioLanguage[] = ['en', 'es'] as const;

export const PORTFOLIO_LANGUAGE_CODE_LABELS: Record<PortfolioLanguage, string> = {
  en: '🌐 EN',
  es: '🌐 ES',
} as const;
