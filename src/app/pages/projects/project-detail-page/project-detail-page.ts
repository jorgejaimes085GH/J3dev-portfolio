import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { PROJECTS } from '../../../data/projects.data';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="project-detail-page" aria-labelledby="project-detail-title">
      <nav class="project-detail-nav" aria-label="Project navigation">
        <a routerLink="/projects">← Back to Projects</a>
      </nav>

      @if (project; as selectedProject) {
        <section class="project-detail-hero" aria-labelledby="project-detail-title">
          <div class="project-detail-hero__content">
            <p class="project-detail-page__eyebrow">Project Detail</p>
            <h1 id="project-detail-title">{{ selectedProject.title }}</h1>
            <p class="project-detail-status">{{ selectedProject.typeStatus }}</p>
            <p class="project-detail-summary">{{ selectedProject.shortDescription }}</p>
          </div>

          <div
            class="project-detail-visual"
            role="img"
            [attr.aria-label]="selectedProject.visualLabel"
          >
            <span aria-hidden="true">{{ selectedProject.title.slice(0, 2).toUpperCase() }}</span>
            <p>{{ selectedProject.visualLabel }}</p>
            @if (selectedProject.overviewImageUrl) {
              <img
                class="project-detail-visual__image"
                [src]="selectedProject.overviewImageUrl"
                [alt]="selectedProject.title + ' project overview visual'"
                (error)="hideFailedAsset($event)"
              />
            }
            @if (selectedProject.logoUrl) {
              <img
                class="project-detail-visual__logo"
                [src]="selectedProject.logoUrl"
                [alt]="selectedProject.title + ' project logo'"
                (error)="hideFailedAsset($event)"
              />
            }
          </div>
        </section>

        <section class="project-detail-section" aria-labelledby="project-context-title">
          <div class="project-detail-section__header">
            <p class="project-detail-page__eyebrow">Professional Context</p>
            <h2 id="project-context-title">What this project represents</h2>
          </div>

          <ul class="project-detail-list">
            @for (contextItem of selectedProject.context; track contextItem) {
              <li>{{ contextItem }}</li>
            }
          </ul>
        </section>

        <section class="project-detail-section" aria-labelledby="project-architecture-title">
          <div class="project-detail-section__header">
            <p class="project-detail-page__eyebrow">Evolution / Architecture Notes</p>
            <h2 id="project-architecture-title">Technical direction and maintainability</h2>
          </div>

          <ul class="project-detail-list">
            @for (architectureNote of selectedProject.architectureNotes; track architectureNote) {
              <li>{{ architectureNote }}</li>
            }
          </ul>
        </section>

        <section class="project-detail-section" aria-labelledby="project-technologies-title">
          <div class="project-detail-section__header">
            <p class="project-detail-page__eyebrow">Technology Stack</p>
            <h2 id="project-technologies-title">Technologies and concepts</h2>
          </div>

          <div class="project-detail-badges" aria-label="Project technologies">
            @for (technology of selectedProject.technologies; track technology) {
              <span class="project-detail-badge">{{ technology }}</span>
            }
          </div>
        </section>

        <section class="project-detail-section" aria-labelledby="project-time-title">
          <div class="project-detail-section__header">
            <p class="project-detail-page__eyebrow">Time Investment Detail</p>
            <h2 id="project-time-title">Implementation work areas</h2>
            <p>
              These time blocks summarize the type of work involved while keeping private
              implementation details protected. Durations can be refined as more public-safe project
              material becomes available.
            </p>
          </div>

          <div class="project-time-grid">
            @for (timeBlock of selectedProject.timeBlocks; track timeBlock.label) {
              <article class="project-time-card">
                <h3>{{ timeBlock.label }}</h3>
                <p class="project-time-card__duration">{{ timeBlock.duration }}</p>
                @if (timeBlock.note) {
                  <p>{{ timeBlock.note }}</p>
                }
              </article>
            }
          </div>
        </section>

        <section class="project-detail-section" aria-labelledby="project-links-title">
          <div class="project-detail-section__header">
            <p class="project-detail-page__eyebrow">Links and Availability</p>
            <h2 id="project-links-title">Safe public access points</h2>
            <p>{{ selectedProject.sourceCodeNote }}</p>
          </div>

          @if (selectedProject.links?.length) {
            <div class="project-link-list">
              @for (
                projectLink of selectedProject.links;
                track projectLink.type + projectLink.label
              ) {
                <article class="project-link-card">
                  <p class="project-link-card__type">{{ projectLink.type }}</p>
                  <h3>{{ projectLink.label }}</h3>

                  @if (projectLink.url && !projectLink.isPlaceholder) {
                    <a
                      [href]="projectLink.url"
                      [attr.target]="projectLink.isExternal ? '_blank' : null"
                      [attr.rel]="projectLink.isExternal ? 'noopener noreferrer' : null"
                    >
                      Open {{ projectLink.type }} link
                    </a>
                  } @else {
                    <p class="project-link-card__placeholder">
                      {{
                        projectLink.placeholderMessage ||
                          'This link will be published when available.'
                      }}
                    </p>
                  }
                </article>
              }
            </div>
          } @else {
            <p class="project-detail-note">No public links are available for this project yet.</p>
          }
        </section>

        @if (selectedProject.referencePlaceholders; as referencePlaceholders) {
          <section class="project-detail-section" aria-labelledby="project-reference-title">
            <div class="project-detail-section__header">
              <p class="project-detail-page__eyebrow">Reference Availability</p>
              <h2 id="project-reference-title">Company reference details</h2>
              <p>{{ referencePlaceholders.availabilityNote }}</p>
            </div>

            <dl class="project-reference-list">
              <div>
                <dt>Company name</dt>
                <dd>{{ referencePlaceholders.companyName }}</dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>{{ referencePlaceholders.companyAddress }}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>{{ referencePlaceholders.companyPhone }}</dd>
              </div>
            </dl>
          </section>
        }

        <section class="project-detail-section" aria-labelledby="project-confidentiality-title">
          <div class="project-detail-section__header">
            <p class="project-detail-page__eyebrow">Confidentiality / Availability Note</p>
            <h2 id="project-confidentiality-title">Public-safe project information</h2>
          </div>
          <p class="project-detail-note">{{ selectedProject.confidentialityNote }}</p>
        </section>

        <nav class="project-detail-nav project-detail-nav--bottom" aria-label="Project navigation">
          <a routerLink="/projects">← Back to Projects</a>
        </nav>
      } @else {
        <section
          class="project-detail-section project-not-found"
          aria-labelledby="project-detail-title"
        >
          <p class="project-detail-page__eyebrow">Project Detail</p>
          <h1 id="project-detail-title">Project not found</h1>
          <p>The selected project could not be found in the current project data.</p>
          <a class="project-not-found__link" routerLink="/projects">Back to Projects</a>
        </section>
      }
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .project-detail-page {
        width: 100%;
      }

      .project-detail-nav,
      .project-detail-hero,
      .project-detail-section {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .project-detail-nav {
        padding-top: 2rem;
        padding-bottom: 1rem;
        border-bottom: 0;
      }

      .project-detail-nav--bottom {
        padding-top: 1.5rem;
        padding-bottom: 3rem;
      }

      .project-detail-nav a,
      .project-not-found__link {
        display: inline-flex;
        align-items: center;
        min-height: 2.5rem;
        font-weight: 700;
      }

      .project-detail-hero {
        display: grid;
        grid-template-columns: minmax(0, 1.3fr) minmax(18rem, 0.7fr);
        gap: 2rem;
        align-items: stretch;
        padding-top: 2rem;
      }

      .project-detail-hero__content,
      .project-detail-section__header {
        max-width: 52rem;
      }

      .project-detail-page__eyebrow,
      .project-detail-status,
      .project-link-card__type {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .project-detail-status,
      .project-link-card__type {
        font-size: 0.85rem;
      }

      .project-detail-hero h1,
      .project-detail-section h1,
      .project-detail-section h2,
      .project-time-card h3,
      .project-link-card h3 {
        margin: 0;
      }

      .project-detail-summary {
        max-width: 56rem;
        font-size: 1.15rem;
      }

      .project-detail-visual {
        position: relative;
        display: grid;
        min-height: 18rem;
        align-content: center;
        justify-items: center;
        gap: 1rem;
        overflow: hidden;
        padding: 1.5rem;
        border: 1px dashed var(--app-border-color);
        border-radius: 0.875rem;
        text-align: center;
      }

      .project-detail-visual span,
      .project-detail-visual p {
        position: relative;
        z-index: 1;
      }

      .project-detail-visual span {
        display: inline-grid;
        width: 5rem;
        height: 5rem;
        place-items: center;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        color: var(--app-link-color);
        font-size: 1.5rem;
        font-weight: 700;
      }

      .project-detail-visual__image {
        z-index: 2;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .project-detail-visual__logo {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        z-index: 3;
        width: 4rem;
        max-height: 4rem;
        object-fit: contain;
      }

      .project-detail-list,
      .project-time-grid,
      .project-link-list,
      .project-reference-list {
        margin: 1.5rem 0 0;
      }

      .project-detail-list {
        display: grid;
        gap: 0.75rem;
        padding-left: 1.25rem;
      }

      .project-detail-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1.5rem;
      }

      .project-detail-badge {
        display: inline-flex;
        align-items: center;
        min-height: 2rem;
        padding: 0.35rem 0.65rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        font-size: 0.9rem;
        line-height: 1.2;
      }

      .project-time-grid,
      .project-link-list,
      .project-reference-list {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
      }

      .project-time-card,
      .project-link-card,
      .project-reference-list div,
      .project-detail-note {
        padding: 1rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.75rem;
      }

      .project-time-card__duration,
      .project-link-card__placeholder {
        font-weight: 700;
      }

      .project-reference-list {
        padding: 0;
      }

      .project-reference-list dt {
        color: var(--app-link-color);
        font-weight: 700;
      }

      .project-reference-list dd {
        margin: 0.25rem 0 0;
      }

      .project-not-found {
        padding-top: 4rem;
      }

      @media (max-width: 900px) {
        .project-detail-hero,
        .project-time-grid,
        .project-link-list,
        .project-reference-list {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 640px) {
        .project-detail-nav,
        .project-detail-hero,
        .project-detail-section {
          padding-right: 1rem;
          padding-left: 1rem;
        }
      }
    `,
  ],
})
export class ProjectDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly projectId = this.route.snapshot.paramMap.get('projectId');

  protected readonly project = PROJECTS.find(
    (project) => project.slug === this.projectId || project.id === this.projectId,
  );

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
