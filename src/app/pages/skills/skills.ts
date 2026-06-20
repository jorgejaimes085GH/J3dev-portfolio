import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

import { PROJECTS } from '../../data/projects.data';
import { getLocalizedData } from '../../data/localized-data';
import { LanguageService } from '../../core/services/language.service';
import {
  SKILLS_HERO_IMAGE_URL,
  BACKEND_SKILL_GROUPS,
  SKILL_CATEGORIES,
  SKILLS,
} from '../../data/skills.data';
import { Project } from '../../models/project.model';
import { BackendSkillGroup, Skill, SkillCategory } from '../../models/skill.model';

interface BackendSkillSection {
  group: BackendSkillGroup;
  skills: Skill[];
}

interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
  backendSections?: BackendSkillSection[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgTemplateOutlet, RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  private readonly languageService = inject(LanguageService);

  protected readonly heroImageUrl = SKILLS_HERO_IMAGE_URL;
  protected readonly text = computed(() => this.languageService.uiText().pages.skills);
  protected readonly uiCommon = computed(() => this.languageService.uiText().common);

  readonly skills = computed(() =>
    getLocalizedData(SKILLS, this.languageService.currentLanguage()),
  );
  readonly skillCategories = computed(() =>
    getLocalizedData(SKILL_CATEGORIES, this.languageService.currentLanguage()),
  );
  readonly backendSkillGroups = computed(() =>
    getLocalizedData(BACKEND_SKILL_GROUPS, this.languageService.currentLanguage()),
  );
  readonly skillGroups = computed<SkillGroup[]>(() =>
    this.skillCategories().map((category) => {
      const skills = this.skills().filter((skill) => skill.category === category);

      if (category !== 'Backend') {
        return { category, skills };
      }

      return {
        category,
        skills,
        backendSections: this.backendSkillGroups()
          .map((group) => ({
            group,
            skills: skills.filter((skill) => skill.backendGroup === group),
          }))
          .filter((section) => section.skills.length > 0),
      };
    }),
  );

  selectedSkill?: Skill;

  private readonly failedLogoIds = signal<ReadonlySet<string>>(new Set());
  private readonly failedProjectAssetIds = signal<ReadonlySet<string>>(new Set());

  private readonly projects = computed(() =>
    getLocalizedData(PROJECTS, this.languageService.currentLanguage()),
  );
  private readonly projectsBySlug = computed(
    () => new Map(this.projects().map((project) => [project.slug, project])),
  );

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    this.closeSkill();
  }

  categoryTitleId(category: SkillCategory): string {
    return `${this.slugify(category)}-skills-title`;
  }

  backendGroupTitleId(group: BackendSkillGroup): string {
    return `${this.slugify(group)}-backend-skills-title`;
  }

  evidenceLabel(skill: Skill): string {
    const relatedProjectCount = this.getRelatedProjects(skill).length;

    if (relatedProjectCount === 0) {
      return this.text().evidenceMissing;
    }

    return relatedProjectCount === 1
      ? `${relatedProjectCount} ${this.text().evidencePrefix}`
      : `${relatedProjectCount} ${this.text().evidencePluralPrefix}`;
  }

  getRelatedProjects(skill: Skill): Project[] {
    return skill.relatedProjectSlugs
      .map((projectSlug) => this.projectsBySlug().get(projectSlug))
      .filter((project): project is Project => Boolean(project));
  }

  openSkill(skill: Skill): void {
    this.selectedSkill = skill;
  }

  closeSkill(): void {
    this.selectedSkill = undefined;
  }

  isLogoAvailable(skill: Skill): boolean {
    return Boolean(skill.iconUrl && !this.failedLogoIds().has(skill.id));
  }

  markFailedLogo(skillId: string): void {
    this.failedLogoIds.update((failedLogoIds) => new Set(failedLogoIds).add(skillId));
  }

  getProjectCompactImageUrl(project: Project): string | undefined {
    return project.compactLogoUrl &&
      !this.failedProjectAssetIds().has(this.getProjectAssetId(project, project.compactLogoUrl))
      ? project.compactLogoUrl
      : undefined;
  }

  getProjectAssetId(project: Project, imageUrl?: string): string {
    return `skills-project-${project.id}-${imageUrl || 'default'}`;
  }

  markProjectAssetFailed(assetId: string): void {
    this.failedProjectAssetIds.update((failedIds) => new Set(failedIds).add(assetId));
  }

  getProjectInitials(title: string): string {
    return title
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }

  private slugify(value: string): string {
    return value.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-');
  }

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
