import { Project } from '../../models/project.model';

export interface ProjectStatusDisplay {
  category: string;
  lines: string[];
}

export const getProjectStatusDisplay = (
  project: Project,
  language: 'en' | 'es',
): ProjectStatusDisplay => {
  const [rawCategory = project.typeStatus, ...rawLines] = project.typeStatus
    .split('/')
    .map((segment) => segment.trim())
    .filter(Boolean);

  return {
    category: formatStatusCategory(rawCategory, language),
    lines: rawLines.slice(0, 3).map((line) => formatStatusLine(line)),
  };
};

const formatStatusCategory = (category: string, language: 'en' | 'es'): string => {
  const lowerCategory = category.toLocaleLowerCase();

  if (lowerCategory.includes('featured project') || lowerCategory.includes('proyecto destacado')) {
    const starSuffix = category.includes('⭐') ? ' ⭐' : '';
    return language === 'es' ? `PROYECTO DESTACADO${starSuffix}` : `FEATURED PROJECT${starSuffix}`;
  }

  if (lowerCategory.includes('enterprise project') || lowerCategory.includes('proyecto empresarial')) {
    return language === 'es' ? 'PROYECTO EMPRESARIAL' : 'ENTERPRISE PROJECT';
  }

  return category.replace(/\s+Tier\s+\d+/i, '').toLocaleUpperCase();
};

const formatStatusLine = (line: string): string => line.replace(/\s+Tier\s+\d+/i, '').trim();
