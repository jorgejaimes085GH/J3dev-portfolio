import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROJECTS } from '../../data/projects.data';
import { SKILL_CATEGORIES, SKILLS } from '../../data/skills.data';
import { Project } from '../../models/project.model';
import { Skill, SkillCategory } from '../../models/skill.model';

interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="skills-page" aria-labelledby="skills-page-title">
      <section class="skills-section skills-hero" aria-labelledby="skills-page-title">
        <div class="skills-section__header">
          <p class="skills-section__eyebrow">Evidence-Based Capabilities</p>
          <h1 id="skills-page-title">Skills</h1>
          <p class="skills-hero__summary">
            Skills are presented through project evidence and practical context, not percentages,
            progress bars, or vague labels. Each item connects to work where the capability is used
            or clearly marks where evidence will be added later.
          </p>
        </div>
      </section>

      @for (skillGroup of skillGroups; track skillGroup.category) {
        <section
          class="skills-section"
          [attr.aria-labelledby]="categoryTitleId(skillGroup.category)"
        >
          <div class="skills-section__header">
            <p class="skills-section__eyebrow">Skill Category</p>
            <h2 [id]="categoryTitleId(skillGroup.category)">{{ skillGroup.category }}</h2>
          </div>

          <div class="skill-grid" [attr.aria-label]="skillGroup.category + ' skills'">
            @for (skill of skillGroup.skills; track skill.id) {
              <button
                class="skill-card"
                type="button"
                (click)="openSkill(skill)"
                [attr.aria-label]="'View evidence for ' + skill.name"
              >
                <span class="skill-card__icon" aria-hidden="true">{{ skill.iconLabel }}</span>
                <span class="skill-card__body">
                  <span class="skill-card__name">{{ skill.name }}</span>
                  <span class="skill-card__description">{{ skill.shortDescription }}</span>
                  <span class="skill-card__evidence">{{ evidenceLabel(skill) }}</span>
                </span>
              </button>
            }
          </div>
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
                [attr.aria-label]="'Close ' + skill.name + ' details'"
              >
                Close
              </button>
            </div>

            <section class="skill-panel__section" aria-labelledby="skill-evidence-title">
              <h3 id="skill-evidence-title">Evidence summary</h3>
              <p>{{ skill.evidenceSummary }}</p>
            </section>

            @if (skill.contextNotes?.length) {
              <section class="skill-panel__section" aria-labelledby="skill-context-title">
                <h3 id="skill-context-title">Context notes</h3>
                <ul>
                  @for (contextNote of skill.contextNotes; track contextNote) {
                    <li>{{ contextNote }}</li>
                  }
                </ul>
              </section>
            }

            <section class="skill-panel__section" aria-labelledby="skill-projects-title">
              <h3 id="skill-projects-title">Related projects</h3>

              @if (getRelatedProjects(skill).length) {
                <ul class="related-project-list">
                  @for (project of getRelatedProjects(skill); track project.id) {
                    <li>
                      <a [routerLink]="['/projects', project.slug]" (click)="closeSkill()">
                        View {{ project.title }} project details
                      </a>
                      <p>{{ project.shortDescription }}</p>
                    </li>
                  }
                </ul>
              } @else {
                <p class="skill-panel__placeholder">
                  No public-safe related project is linked for this skill yet. Supporting evidence
                  can be added in a future update without exposing private or proprietary
                  information.
                </p>
              }
            </section>
          </aside>
        </div>
      }
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
        line-height: 1.15;
      }

      .skills-section h1 {
        font-size: clamp(2.25rem, 6vw, 4.5rem);
      }

      .skills-section h2,
      .skill-panel h2 {
        font-size: clamp(1.75rem, 4vw, 2.75rem);
      }

      .skills-hero__summary {
        font-size: 1.15rem;
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
        display: inline-grid;
        min-width: 3rem;
        height: 3rem;
        place-items: center;
        padding: 0 0.4rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        color: var(--app-link-color);
        font-weight: 700;
      }

      .skill-card__body {
        display: grid;
        gap: 0.45rem;
      }

      .skill-card__name {
        font-size: 1.1rem;
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
  readonly skillGroups: SkillGroup[] = SKILL_CATEGORIES.map((category) => ({
    category,
    skills: SKILLS.filter((skill) => skill.category === category),
  }));

  selectedSkill?: Skill;

  private readonly projectsBySlug = new Map(PROJECTS.map((project) => [project.slug, project]));

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    this.closeSkill();
  }

  categoryTitleId(category: SkillCategory): string {
    return `${category.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}-skills-title`;
  }

  evidenceLabel(skill: Skill): string {
    const relatedProjectCount = this.getRelatedProjects(skill).length;

    if (relatedProjectCount === 0) {
      return 'Evidence pending';
    }

    return `${relatedProjectCount} related project${relatedProjectCount === 1 ? '' : 's'}`;
  }

  getRelatedProjects(skill: Skill): Project[] {
    return skill.relatedProjectSlugs
      .map((projectSlug) => this.projectsBySlug.get(projectSlug))
      .filter((project): project is Project => Boolean(project));
  }

  openSkill(skill: Skill): void {
    this.selectedSkill = skill;
  }

  closeSkill(): void {
    this.selectedSkill = undefined;
  }
}
