import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROJECTS } from '../../../data/projects.data';
import { getLocalizedData } from '../../../data/localized-data';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="projects-page" aria-labelledby="projects-page-title">
      <section class="projects-section projects-introduction" aria-labelledby="projects-page-title">
        <div class="projects-section__header">
          <p class="projects-section__eyebrow">Selected Project Evidence</p>
          <h1 id="projects-page-title">Projects</h1>
          <p class="projects-introduction__summary">
            A structured overview of selected work that demonstrates Backend .NET, SQL Server,
            architecture, modernization, production experience, and supporting fullstack capability.
          </p>
          <p>
            These cards are intentionally simple for now. Final visuals, deeper case studies, and
            detail pages can be added later without changing the typed project data source.
          </p>
        </div>
      </section>

      <section class="projects-section" aria-labelledby="project-list-title">
        <div class="projects-section__header">
          <p class="projects-section__eyebrow">Project Cards</p>
          <h2 id="project-list-title">Professional proof points</h2>
          <p>
            Each project highlights its current status, practical context, technology stack, and
            time investment context.
          </p>
        </div>

        <div class="project-grid" aria-label="Project list">
          @for (project of projects(); track project.id) {
            <article class="project-card" [attr.aria-labelledby]="project.id + '-title'">
              <div class="project-card__visual" role="img" [attr.aria-label]="project.visualLabel">
                <span aria-hidden="true">{{ project.title.slice(0, 2).toUpperCase() }}</span>
                @if (project.thumbnailUrl) {
                  <img
                    class="project-card__image"
                    [src]="project.thumbnailUrl"
                    [alt]="project.title + ' project thumbnail'"
                    (error)="hideFailedAsset($event)"
                  />
                }
              </div>

              <div class="project-card__body">
                <p class="project-card__status">{{ project.typeStatus }}</p>
                <h3 [id]="project.id + '-title'">{{ project.title }}</h3>
                <p>{{ project.shortDescription }}</p>

                <div class="project-card__time-preview" aria-label="Time investment context">
                  <h4>Time investment context</h4>
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
                  class="project-card__link"
                  [routerLink]="['/projects', project.slug]"
                  [attr.aria-label]="'View more about ' + project.title"
                >
                  View more
                </a>
              </div>

              <div class="project-card__technologies" aria-label="Technologies used">
                @for (technology of project.technologies; track technology) {
                  <span class="technology-badge">{{ technology }}</span>
                }
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
      .project-card__status {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .project-card__status {
        font-size: 0.8rem;
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

      .project-card__time-preview {
        display: grid;
        gap: 0.65rem;
        margin-top: auto;
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
        margin-top: 0.25rem;
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
        padding: 0 1.25rem 1.25rem;
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

  protected readonly projects = computed(() =>
    getLocalizedData(PROJECTS, this.languageService.currentLanguage()),
  );

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
