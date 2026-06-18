import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  CONTINUOUS_LEARNING,
  EDUCATION_CTA_LINKS,
  EDUCATION_HIGHLIGHTS,
  FORMAL_EDUCATION,
  SELF_TAUGHT_EDUCATION,
} from '../../data/education.data';
import { getLocalizedData } from '../../data/localized-data';
import { LanguageService } from '../../core/services/language.service';
import { FormalEducationEntry } from '../../models/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  private readonly languageService = inject(LanguageService);
  private readonly failedInstitutionLogoIds = signal<ReadonlySet<string>>(new Set());

  protected readonly text = computed(() => this.languageService.uiText().pages.education);

  protected readonly formalEducation = computed(() =>
    getLocalizedData(FORMAL_EDUCATION, this.languageService.currentLanguage()),
  );
  protected readonly selfTaughtEducation = computed(() =>
    getLocalizedData(SELF_TAUGHT_EDUCATION, this.languageService.currentLanguage()),
  );
  protected readonly continuousLearning = computed(() =>
    getLocalizedData(CONTINUOUS_LEARNING, this.languageService.currentLanguage()),
  );
  protected readonly highlights = computed(() =>
    getLocalizedData(EDUCATION_HIGHLIGHTS, this.languageService.currentLanguage()),
  );
  protected readonly ctaLinks = computed(() =>
    getLocalizedData(EDUCATION_CTA_LINKS, this.languageService.currentLanguage()),
  );

  protected getInstitutionLogoUrl(entry: FormalEducationEntry): string | undefined {
    return entry.logoUrl || entry.institutionLogoSrc;
  }

  protected getInstitutionLogoAlt(entry: FormalEducationEntry): string {
    return entry.institutionLogoAlt || `${entry.institution} logo`;
  }

  protected hasLogoFailed(entryId: string): boolean {
    return this.failedInstitutionLogoIds().has(entryId);
  }

  protected isUnadInstitution(entry: FormalEducationEntry): boolean {
    return entry.institution.toLowerCase().includes('unad');
  }

  protected isCedefocInstitution(entry: FormalEducationEntry): boolean {
    return entry.institution.toLowerCase().includes('cedefoc');
  }

  protected markLogoFailed(entryId: string): void {
    this.failedInstitutionLogoIds.update((failedIds) => {
      const nextFailedIds = new Set(failedIds);
      nextFailedIds.add(entryId);
      return nextFailedIds;
    });
  }

  protected getInstitutionInitials(institution: string): string {
    const abbreviationMatch = institution.match(/\(([^)]+)\)/);

    if (abbreviationMatch?.[1]) {
      return abbreviationMatch[1].slice(0, 5).toUpperCase();
    }

    return institution
      .split(/\s+/)
      .filter((word) => /^[A-ZÁÉÍÓÚÑ]/.test(word))
      .map((word) => word[0])
      .join('')
      .slice(0, 5)
      .toUpperCase();
  }
}
