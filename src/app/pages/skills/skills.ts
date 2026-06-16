import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

import { PROJECTS } from '../../data/projects.data';
import { getLocalizedData } from '../../data/localized-data';
import { LanguageService } from '../../core/services/language.service';
import { BACKEND_SKILL_GROUPS, SKILL_CATEGORIES, SKILLS } from '../../data/skills.data';
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
  template: `
    <main class="skills-page" aria-labelledby="skills-page-title">
      <section class="skills-section skills-hero" aria-labelledby="skills-page-title">
        <div class="skills-section__header">
          <p class="skills-section__eyebrow">{{ text().eyebrow }}</p>
          <h1 id="skills-page-title">{{ text().title }}</h1>
          <p class="skills-hero__summary">{{ text().summary }}</p>
        </div>
      </section>

      @for (skillGroup of skillGroups(); track skillGroup.category) {
        <section
          class="skills-section"
          [attr.aria-labelledby]="categoryTitleId(skillGroup.category)"
        >
          <div class="skills-section__header">
            <p class="skills-section__eyebrow">{{ text().categoryEyebrow }}</p>
            <h2 [id]="categoryTitleId(skillGroup.category)">{{ skillGroup.category }}</h2>
          </div>

          @if (skillGroup.backendSections?.length) {
            <div class="backend-taxonomy" [attr.aria-label]="text().backendLayersAria">
              @for (backendSection of skillGroup.backendSections; track backendSection.group) {
                <section
                  class="backend-taxonomy__section"
                  [attr.aria-labelledby]="backendGroupTitleId(backendSection.group)"
                >
                  <h3 [id]="backendGroupTitleId(backendSection.group)">
                    {{ backendSection.group }}
                  </h3>

                  <div
                    class="skill-grid"
                    [attr.aria-label]="backendSection.group + ' ' + text().skillsSuffix"
                  >
                    @for (skill of backendSection.skills; track skill.id) {
                      <ng-container
                        [ngTemplateOutlet]="skillCardTemplate"
                        [ngTemplateOutletContext]="{ $implicit: skill }"
                      />
                    }
                  </div>
                </section>
              }
            </div>
          } @else {
            <div
              class="skill-grid"
              [attr.aria-label]="skillGroup.category + ' ' + text().skillsSuffix"
            >
              @for (skill of skillGroup.skills; track skill.id) {
                <ng-container
                  [ngTemplateOutlet]="skillCardTemplate"
                  [ngTemplateOutletContext]="{ $implicit: skill }"
                />
              }
            </div>
          }
        </section>
      }

      @if (selectedSkill; as skill) {
        <div class="skill-panel-backdrop" role="presentation" (click)="closeSkill()">
          <aside
            class="skill-panel"
            role="dialog"
            aria-modal="true"
            [attr.aria-labelledby]="'skill-panel-title-' + skill.id"
            (click)="$event.stopPropagation()"
          >
            <div class="skill-panel__header">
              <div>
                <p class="skills-section__eyebrow">{{ skill.category }}</p>
                <h2 [id]="'skill-panel-title-' + skill.id">{{ skill.name }}</h2>
              </div>

              <button
                class="skill-panel__close"
                type="button"
                (click)="closeSkill()"
                [attr.aria-label]="
                  text().closeDetailsPrefix + ' ' + skill.name + ' ' + text().closeDetailsSuffix
                "
              >
                {{ uiCommon().close }}
              </button>
            </div>

            <section class="skill-panel__section" aria-labelledby="skill-evidence-title">
              <h3 id="skill-evidence-title">{{ text().evidenceSummary }}</h3>
              <p>{{ skill.evidenceSummary }}</p>
            </section>

            @if (skill.contextNotes?.length) {
              <section class="skill-panel__section" aria-labelledby="skill-context-title">
                <h3 id="skill-context-title">{{ text().contextNotes }}</h3>
                <ul>
                  @for (contextNote of skill.contextNotes; track contextNote) {
                    <li>{{ contextNote }}</li>
                  }
                </ul>
              </section>
            }

            <section class="skill-panel__section" aria-labelledby="skill-projects-title">
              <h3 id="skill-projects-title">{{ text().relatedProjects }}</h3>

              @if (getRelatedProjects(skill).length) {
                <ul class="related-project-list">
                  @for (project of getRelatedProjects(skill); track project.id) {
                    <li>
                      <a [routerLink]="['/projects', project.slug]" (click)="closeSkill()">
                        {{ text().viewProjectDetailsPrefix }} {{ project.title }}
                        {{ text().viewProjectDetailsSuffix }}
                      </a>
                      <p>{{ project.shortDescription }}</p>
                    </li>
                  }
                </ul>
              } @else {
                <p class="skill-panel__placeholder">
                  {{ text().evidencePending }}
                </p>
              }
            </section>
          </aside>
        </div>
      }

      <ng-template #skillCardTemplate let-skill>
        <button
          class="skill-card"
          type="button"
          (click)="openSkill(skill)"
          [attr.aria-label]="text().viewEvidencePrefix + ' ' + skill.name"
        >
          <span
            class="skill-card__icon"
            [class.skill-card__icon--has-logo]="isLogoAvailable(skill)"
            aria-hidden="true"
          >
            @if (isLogoAvailable(skill)) {
              <img
                class="skill-card__logo"
                [src]="skill.iconUrl"
                [alt]="''"
                (error)="markFailedLogo(skill.id)"
              />
            } @else {
              <span class="skill-card__fallback">{{ skill.iconLabel }}</span>
            }
          </span>
          <span class="skill-card__body">
            <span class="skill-card__name">{{ skill.name }}</span>
            <span class="skill-card__description">{{ skill.shortDescription }}</span>
            <span class="skill-card__evidence">{{ evidenceLabel(skill) }}</span>
          </span>
        </button>
      </ng-template>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .skills-section {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .skills-hero {
        padding-top: 4rem;
      }

      .skills-section__header {
        max-width: 54rem;
        margin-bottom: 1.5rem;
      }

      .skills-section__eyebrow,
      .skill-card__evidence {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .skills-section h1,
      .skills-section h2,
      .skill-panel h2,
      .skill-panel h3 {
        margin: 0;
      }

      .skills-hero__summary {
        font-size: 1.15rem;
      }

      .backend-taxonomy {
        display: grid;
        gap: 1.5rem;
      }

      .backend-taxonomy__section {
        display: grid;
        gap: 0.85rem;
      }

      .backend-taxonomy__section h3 {
        margin: 0;
        font-size: 1rem;
      }

      .skill-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
      }

      .skill-card {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        gap: 1rem;
        width: 100%;
        padding: 1rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.75rem;
        color: inherit;
        background: transparent;
        text-align: left;
        cursor: pointer;
      }

      .skill-card:hover,
      .skill-card:focus-visible {
        border-color: var(--app-link-color);
        outline: 2px solid transparent;
      }

      .skill-card__icon {
        position: relative;
        display: inline-grid;
        min-width: 3rem;
        height: 3rem;
        place-items: center;
        overflow: hidden;
        padding: 0 0.4rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        color: var(--app-link-color);
        font-weight: 700;
      }

      .skill-card__icon--has-logo {
        padding: 0;
      }

      .skill-card__fallback {
        display: block;
      }

      .skill-card__logo {
        display: block;
        width: 85%;
        height: 85%;
        object-fit: contain;
      }

      .skill-card__body {
        display: grid;
        gap: 0.45rem;
      }

      .skill-card__name {
        font-weight: 700;
      }

      .skill-card__description,
      .skill-card__evidence {
        display: block;
      }

      .skill-card__evidence {
        margin: 0;
        font-size: 0.78rem;
      }

      .skill-panel-backdrop {
        position: fixed;
        inset: 0;
        z-index: 20;
        display: grid;
        align-items: stretch;
        justify-items: end;
        padding: 1rem;
        background: color-mix(in srgb, var(--app-background-color) 78%, transparent);
      }

      .skill-panel {
        width: min(100%, 42rem);
        overflow: auto;
        padding: 1.5rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.875rem;
        color: var(--app-text-color);
        background: var(--app-background-color);
      }

      .skill-panel__header {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        justify-content: space-between;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .skill-panel__close {
        min-height: 2.5rem;
        padding: 0.45rem 0.75rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.5rem;
        color: inherit;
        background: transparent;
        cursor: pointer;
      }

      .skill-panel__close:hover,
      .skill-panel__close:focus-visible {
        border-color: var(--app-link-color);
      }

      .skill-panel__section {
        display: grid;
        gap: 0.75rem;
        padding: 1.25rem 0;
        border-bottom: 1px solid var(--app-border-color);
      }

      .skill-panel__section:last-child {
        border-bottom: 0;
      }

      .skill-panel__section p,
      .skill-panel__section ul {
        margin: 0;
      }

      .related-project-list {
        display: grid;
        gap: 1rem;
        padding-left: 1.25rem;
      }

      .related-project-list a {
        font-weight: 700;
      }

      .related-project-list p {
        margin-top: 0.35rem;
      }

      .skill-panel__placeholder {
        padding: 1rem;
        border: 1px dashed var(--app-border-color);
        border-radius: 0.75rem;
      }

      @media (max-width: 900px) {
        .skill-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 640px) {
        .skills-section {
          padding: 2.25rem 1rem;
        }
        .skill-grid {
          grid-template-columns: 1fr;
        }

        .skill-panel-backdrop {
          padding: 0;
        }

        .skill-panel {
          min-height: 100%;
          border-radius: 0;
        }

        .skill-panel__header {
          flex-direction: column;
        }
      }
    `,
  ],
})
export class Skills {
  private readonly languageService = inject(LanguageService);

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

  private slugify(value: string): string {
    return value.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-');
  }
}
