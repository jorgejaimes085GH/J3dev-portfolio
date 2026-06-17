import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROJECTS } from '../../../data/projects.data';
import { getLocalizedData } from '../../../data/localized-data';
import { LanguageService } from '../../../core/services/language.service';
import { Project } from '../../../models/project.model';
import { getProjectStatusDisplay } from '../project-status.util';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="projects-page" aria-labelledby="projects-page-title">
      <section class="projects-section projects-introduction" aria-labelledby="projects-page-title">
        <div class="projects-section__header">
          <p class="projects-section__eyebrow">{{ text().eyebrow }}</p>
          <h1 id="projects-page-title">{{ text().title }}</h1>
          <p class="projects-introduction__summary">{{ text().summary }}</p>
          <p>{{ text().intro }}</p>
        </div>
      </section>

      <section class="projects-section" aria-labelledby="project-list-title">
        <div class="projects-section__header">
          <p class="projects-section__eyebrow">{{ text().cardsEyebrow }}</p>
          <h2 id="project-list-title">{{ text().cardsTitle }}</h2>
          <p>{{ text().cardsIntro }}</p>
        </div>

        <div class="project-grid" [attr.aria-label]="text().listAria">
          @for (project of projects(); track project.id) {
            <article class="project-card" [attr.aria-labelledby]="project.id + '-title'">
              <a
                class="project-card__visual"
                [routerLink]="['/projects', project.slug]"
                [attr.aria-label]="project.ctaLabel + ': ' + project.title"
              >
                <span aria-hidden="true">{{ project.title.slice(0, 2).toUpperCase() }}</span>
                @if (project.thumbnailUrl) {
                  <img
                    class="project-card__image"
                    [src]="project.thumbnailUrl"
                    alt=""
                    (error)="hideFailedAsset($event)"
                  />
                }
              </a>

              <div class="project-card__body">
                <div class="project-card__status" [attr.aria-label]="project.typeStatus">
                  <p class="project-card__status-category">{{ projectStatus(project).category }}</p>
                  <div class="project-card__status-lines">
                    @for (line of projectStatus(project).lines; track line) {
                      <span>{{ line }}</span>
                    }
                  </div>
                </div>
                <h3 [id]="project.id + '-title'">{{ project.title }}</h3>
                <p class="project-card__description">{{ project.shortDescription }}</p>

                <div class="project-card__time-preview" [attr.aria-label]="text().timeContext">
                  <h4>{{ text().timeContext }}</h4>
                  <ul>
                    @for (timeBlock of project.timeBlocks.slice(0, 3); track timeBlock.label) {
                      <li>
                        <span>{{ timeBlock.label }}</span>
                        <strong>{{ timeBlock.duration }}</strong>
                      </li>
                    }
                  </ul>
                </div>

                <a
                  class="btn btn--secondary btn--compact project-card__link"
                  [routerLink]="['/projects', project.slug]"
                  [attr.aria-label]="project.ctaLabel + ': ' + project.title"
                >
                  {{ project.ctaLabel }}
                </a>

                <div class="project-card__technologies" [attr.aria-label]="text().technologiesAria">
                  @for (technology of project.technologies; track technology) {
                    <span class="technology-badge">{{ technology }}</span>
                  }
                </div>
              </div>
            </article>
          }
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .projects-section {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .projects-introduction {
        padding-top: 4rem;
      }

      .projects-section__header {
        max-width: 52rem;
        margin-bottom: 1.5rem;
      }

      .projects-section__eyebrow,
      .project-card__status-category {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .project-card__status {
        display: grid;
        gap: 0.25rem;
      }

      .project-card__status-category {
        margin-bottom: 0;
        font-size: 0.8rem;
        line-height: 1.4;
      }

      .project-card__status-lines {
        display: grid;
        gap: 0.1rem;
        color: var(--app-muted-color);
        font-size: 0.9rem;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.35;
        text-transform: none;
      }

      .projects-section h1,
      .projects-section h2,
      .project-card h3,
      .project-card h4 {
        margin: 0;
      }

      .projects-introduction__summary {
        font-size: 1.15rem;
      }

      .project-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
      }

      .project-card {
        display: flex;
        min-width: 0;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--app-border-color);
        border-radius: 0.875rem;
      }

      .project-card__visual {
        position: relative;
        display: grid;
        min-height: 9rem;
        place-items: center;
        overflow: hidden;
        border-bottom: 1px dashed var(--app-border-color);
        color: inherit;
        cursor: pointer;
        text-decoration: none;
        transition: filter 180ms ease, opacity 180ms ease;
      }

      .project-card__visual:hover {
        filter: brightness(1.04);
        opacity: 0.94;
      }

      .project-card__visual:focus-visible {
        outline: 3px solid var(--app-link-color);
        outline-offset: -3px;
      }

      .project-card__visual span {
        display: inline-grid;
        width: 4.5rem;
        height: 4.5rem;
        place-items: center;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        color: var(--app-link-color);
        font-size: 1.35rem;
        font-weight: 700;
        letter-spacing: 0.04em;
      }

      .project-card__image {
        z-index: 2;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .project-card__body {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 0.9rem;
        padding: 1.25rem;
      }

      .project-card__body p {
        margin: 0;
      }

      .project-card h3 {
        line-height: 1.25;
      }

      .project-card__description {
        line-height: 1.55;
      }

      .project-card__time-preview {
        display: grid;
        gap: 0.65rem;
        padding-top: 0.25rem;
      }

      .project-card__time-preview h4 {
        font-size: 0.95rem;
      }

      .project-card__time-preview ul {
        display: grid;
        gap: 0.5rem;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .project-card__time-preview li {
        display: grid;
        gap: 0.15rem;
        align-content: start;
        padding: 0.6rem 0.7rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.55rem;
      }

      .project-card__time-preview strong {
        font-size: 0.85rem;
        font-weight: 700;
      }

      .project-card__link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.75rem;
        padding: 0.7rem 1rem;
        border: 1px solid var(--app-link-color);
        border-radius: 0.5rem;
        color: var(--app-background-color);
        background: var(--app-link-color);
        text-decoration: none;
      }

      .project-card__technologies {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: auto;
        padding-top: 0.1rem;
      }

      .technology-badge {
        display: inline-flex;
        align-items: center;
        min-height: 2rem;
        padding: 0.35rem 0.65rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        font-size: 0.85rem;
        line-height: 1.2;
      }

      .projects-section__header p:last-child,
      .project-card__body p:last-child {
        margin-bottom: 0;
      }

      @media (min-width: 641px) {
        .project-card__status {
          min-height: 3.4rem;
        }

        .project-card h3 {
          min-height: 3rem;
        }

        .project-card__description {
          min-height: 9.75rem;
        }

        .project-card__time-preview {
          min-height: 14.75rem;
        }

        .project-card__time-preview li {
          min-height: 5.75rem;
        }
      }

      @media (min-width: 1001px) {
        .project-card__description {
          min-height: 11rem;
        }

        .project-card__time-preview {
          min-height: 15.5rem;
        }
      }

      @media (max-width: 1000px) {
        .project-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 640px) {
        .projects-section {
          padding: 2.5rem 1rem;
        }

        .project-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ProjectsPage {
  private readonly languageService = inject(LanguageService);

  protected readonly text = computed(() => this.languageService.uiText().pages.projects);

  protected readonly projects = computed(() =>
    getLocalizedData(PROJECTS, this.languageService.currentLanguage()),
  );

  protected projectStatus(project: Project): { category: string; lines: string[] } {
    return getProjectStatusDisplay(project, this.languageService.currentLanguage());
  }

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
