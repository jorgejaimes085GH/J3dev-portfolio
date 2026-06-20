import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/services/language.service';
import { ThemeService } from '../../core/services/theme.service';
import {
  EXPERIENCE_HERO_IMAGE_URL,
  EXPERIENCE_CTA_LINKS,
  EXPERIENCE_ENTRIES,
} from '../../data/experience.data';
import { getLocalizedData } from '../../data/localized-data';
import { PROJECTS } from '../../data/projects.data';
import { ExperienceEntry } from '../../models/experience.model';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  private readonly languageService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);

  protected readonly heroImageUrl = EXPERIENCE_HERO_IMAGE_URL;
  protected readonly text = computed(() => this.languageService.uiText().pages.experience);
  protected readonly isPremiumTheme = computed(
    () => this.themeService.currentTheme() === 'premium-3d',
  );
  protected readonly entries = computed(() =>
    getLocalizedData(EXPERIENCE_ENTRIES, this.languageService.currentLanguage()),
  );
  protected readonly ctaLinks = computed(() =>
    getLocalizedData(EXPERIENCE_CTA_LINKS, this.languageService.currentLanguage()),
  );
  private readonly projects = computed(() =>
    getLocalizedData(PROJECTS, this.languageService.currentLanguage()),
  );
  private readonly failedAssetIds = signal<ReadonlySet<string>>(new Set());

  protected getRelatedProjects(entry: ExperienceEntry): Project[] {
    const projectsBySlug = new Map(this.projects().map((project) => [project.slug, project]));

    return entry.relatedProjectSlugs
      .map((slug) => projectsBySlug.get(slug))
      .filter((project): project is Project => Boolean(project));
  }

  protected getCompanyLogoUrl(entry: ExperienceEntry): string | undefined {
    return entry.logoUrl || entry.companyLogoSrc;
  }

  protected getCompanyLogoAlt(entry: ExperienceEntry): string {
    return entry.companyLogoAlt || `${entry.company} logo`;
  }

  protected getCompanyAssetId(entry: ExperienceEntry): string {
    return `experience-company-${entry.id}`;
  }

  protected getProjectAssetId(project: Project, imageUrl?: string): string {
    return `experience-project-${project.id}-${imageUrl || 'default'}`;
  }

  protected hasAssetFailed(assetId: string): boolean {
    return this.failedAssetIds().has(assetId);
  }

  protected markAssetFailed(assetId: string): void {
    this.failedAssetIds.update((failedIds) => new Set(failedIds).add(assetId));
  }

  protected getCompanyInitials(company: string): string {
    return company
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }

  protected getProjectExperienceImageUrl(project: Project): string | undefined {
    return project.experienceLogoUrl;
  }

  protected getProjectInitials(title: string): string {
    return title
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
