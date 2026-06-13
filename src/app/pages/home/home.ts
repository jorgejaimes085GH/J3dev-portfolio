import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HERO_SLIDES } from '../../data/hero-slides.data';
import { getLocalizedData } from '../../data/localized-data';
import { LanguageService } from '../../core/services/language.service';
import {
  HOME_PAGE_COPY,
  HOME_PROJECT_PREVIEWS,
  HOME_SKILL_PREVIEWS,
  HOME_VALUE_PREVIEWS,
} from '../../data/home-preview.data';
import { HeroSlider } from '../../shared/components/hero-slider/hero-slider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSlider, RouterLink],
  template: `
    <app-hero-slider [slides]="heroSlides()" />

    <section class="home-section" aria-labelledby="how-i-add-value-title">
      <div class="home-section__header">
        <p class="home-section__eyebrow">{{ homeCopy().value.eyebrow }}</p>
        <h2 id="how-i-add-value-title">{{ homeCopy().value.title }}</h2>
        <p>{{ homeCopy().value.description }}</p>
      </div>

      <div class="preview-grid preview-grid--three">
        @for (value of valuePreviews(); track value.title) {
          <article class="preview-card">
            @if (value.label) {
              <p class="preview-card__label">{{ value.label }}</p>
            }
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </article>
        }
      </div>
    </section>

    <section class="home-section" aria-labelledby="featured-projects-title">
      <div class="home-section__header">
        <p class="home-section__eyebrow">{{ homeCopy().projects.eyebrow }}</p>
        <h2 id="featured-projects-title">{{ homeCopy().projects.title }}</h2>
        <p>{{ homeCopy().projects.description }}</p>
      </div>

      <div class="preview-grid preview-grid--three">
        @for (project of projectPreviews(); track project.name) {
          <article class="preview-card project-preview">
            <div
              class="project-preview__visual"
              [attr.aria-label]="project.name + ' ' + homeCopy().projects.thumbnailAriaSuffix"
              role="img"
            >
              <span aria-hidden="true">{{ project.name.slice(0, 2).toUpperCase() }}</span>
              @if (project.thumbnailUrl) {
                <img
                  class="project-preview__image"
                  [src]="project.thumbnailUrl"
                  [alt]="project.name + ' ' + homeCopy().projects.thumbnailAltSuffix"
                  (error)="hideFailedAsset($event)"
                />
              }
            </div>
            <p class="preview-card__label">{{ project.statusLabel }}</p>
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>

            <ul
              class="badge-list"
              [attr.aria-label]="project.name + ' ' + homeCopy().projects.technologyListSuffix"
            >
              @for (technology of project.technologies; track technology) {
                <li>{{ technology }}</li>
              }
            </ul>

            <a class="text-link" [routerLink]="project.route">
              {{ getProjectContextLabel(project.name) }}
            </a>
          </article>
        }
      </div>
    </section>

    <section class="home-section" aria-labelledby="core-skills-title">
      <div class="home-section__header">
        <p class="home-section__eyebrow">{{ homeCopy().skills.eyebrow }}</p>
        <h2 id="core-skills-title">{{ homeCopy().skills.title }}</h2>
        <p>{{ homeCopy().skills.description }}</p>
      </div>

      <div class="skill-grid" [attr.aria-label]="homeCopy().skills.listAriaLabel">
        @for (skill of skillPreviews(); track skill.name) {
          <article class="skill-card">
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.context }}</p>
          </article>
        }
      </div>
    </section>

    <section class="home-cta" aria-labelledby="home-cta-title">
      <div>
        <p class="home-section__eyebrow">{{ homeCopy().cta.eyebrow }}</p>
        <h2 id="home-cta-title">{{ homeCopy().cta.title }}</h2>
        <p>{{ homeCopy().cta.description }}</p>
      </div>

      <div class="home-cta__actions" [attr.aria-label]="homeCopy().cta.actionsAriaLabel">
        <a class="button-link button-link--primary" routerLink="/projects">{{
          homeCopy().cta.projectsLabel
        }}</a>
        <a class="button-link" routerLink="/skills">{{ homeCopy().cta.skillsLabel }}</a>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .home-section,
      .home-cta {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .home-section__header {
        max-width: 48rem;
        margin-bottom: 1.5rem;
      }

      .home-section__eyebrow,
      .preview-card__label {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .preview-card__label {
        font-size: 0.85rem;
      }

      .home-section h2,
      .home-cta h2 {
        margin: 0;
      }

      .home-section__header p:last-child,
      .home-cta p:last-child,
      .preview-card p:last-child,
      .skill-card p:last-child {
        margin-bottom: 0;
      }

      .preview-grid,
      .skill-grid {
        display: grid;
        gap: 1rem;
      }

      .preview-grid--three {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .skill-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .preview-card,
      .skill-card {
        padding: 1.25rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.75rem;
      }

      .project-preview {
        overflow: hidden;
      }

      .project-preview__visual {
        position: relative;
        display: grid;
        min-height: 8rem;
        place-items: center;
        overflow: hidden;
        margin: -1.25rem -1.25rem 1rem;
        border-bottom: 1px dashed var(--app-border-color);
      }

      .project-preview__visual span {
        display: inline-grid;
        width: 4rem;
        height: 4rem;
        place-items: center;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        color: var(--app-link-color);
        font-weight: 700;
      }

      .project-preview__image {
        position: absolute;
        inset: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .preview-card h3,
      .skill-card h3 {
        margin: 0;
      }

      .project-preview {
        display: flex;
        flex-direction: column;
      }

      .badge-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
        padding: 0;
        list-style: none;
      }

      .badge-list li {
        padding: 0.35rem 0.55rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        font-size: 0.9rem;
      }

      .text-link {
        margin-top: auto;
        font-weight: 700;
      }

      .home-cta {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        justify-content: space-between;
      }

      .home-cta > div:first-child {
        max-width: 44rem;
      }

      .home-cta__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        justify-content: flex-end;
      }

      .button-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.75rem;
        padding: 0.7rem 1rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.5rem;
        text-decoration: none;
      }

      .button-link--primary {
        color: var(--app-background-color);
        background: var(--app-link-color);
        border-color: var(--app-link-color);
      }

      @media (max-width: 900px) {
        .preview-grid--three,
        .skill-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .home-cta {
          align-items: flex-start;
          flex-direction: column;
        }

        .home-cta__actions {
          justify-content: flex-start;
        }
      }

      @media (max-width: 600px) {
        .home-section,
        .home-cta {
          width: 100%;
          min-width: 0;
          padding: 2.5rem 1rem;
        }

        .home-cta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        .home-cta > div:first-child,
        .home-cta__actions {
          width: 100%;
          max-width: 100%;
          min-width: 0;
        }

        .home-cta__actions {
          flex-direction: column;
          align-items: stretch;
          justify-content: flex-start;
        }

        .home-cta .button-link {
          width: 100%;
          max-width: 22rem;
          overflow-wrap: anywhere;
          text-align: center;
        }

        .preview-grid--three,
        .skill-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class Home {
  private readonly languageService = inject(LanguageService);

  protected readonly homeCopy = computed(() =>
    getLocalizedData(HOME_PAGE_COPY, this.languageService.currentLanguage()),
  );
  protected readonly heroSlides = computed(() =>
    getLocalizedData(HERO_SLIDES, this.languageService.currentLanguage()),
  );
  protected readonly valuePreviews = computed(() =>
    getLocalizedData(HOME_VALUE_PREVIEWS, this.languageService.currentLanguage()),
  );
  protected readonly projectPreviews = computed(() =>
    getLocalizedData(HOME_PROJECT_PREVIEWS, this.languageService.currentLanguage()),
  );
  protected readonly skillPreviews = computed(() =>
    getLocalizedData(HOME_SKILL_PREVIEWS, this.languageService.currentLanguage()),
  );

  protected getProjectContextLabel(projectName: string): string {
    const { contextLinkPrefix, contextLinkSuffix } = this.homeCopy().projects;
    return [contextLinkPrefix, projectName, contextLinkSuffix].filter(Boolean).join(' ');
  }

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
