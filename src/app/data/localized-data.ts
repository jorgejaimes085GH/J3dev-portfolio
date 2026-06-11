import { PortfolioLanguage } from '../models/language.model';

export type LocalizedData<T> = {
  readonly en: T;
  readonly es?: T;
};

export function getLocalizedData<T>(data: LocalizedData<T>, language: PortfolioLanguage): T {
  return data[language] ?? data.en;
}
