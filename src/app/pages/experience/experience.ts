import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/services/language.service';
import { EXPERIENCE_CTA_LINKS, EXPERIENCE_ENTRIES } from '../../data/experience.data';
import { getLocalizedData } from '../../data/localized-data';
import { PROJECTS } from '../../data/projects.data';
import { ExperienceEntry } from '../../models/experience.model';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="experience-page" aria-labelledby="experience-page-title">
      <section class="experience-section experience-hero" aria-labelledby="experience-page-title">
        <div class="experience-section__header experience-hero__content">
          <p class="experience-section__eyebrow">{{ text().eyebrow }}</p>
          <h1 id="experience-page-title">{{ text().title }}</h1>
          <p class="experience-hero__summary">{{ text().summary }}</p>
        </div>
      </section>

      <section class="experience-section" aria-labelledby="experience-timeline-title">
        <div class="experience-section__header">
          <p class="experience-section__eyebrow">{{ text().timelineEyebrow }}</p>
          <h2 id="experience-timeline-title">{{ text().timelineTitle }}</h2>
          <p>{{ text().timelineIntro }}</p>
        </div>

        <ol class="experience-timeline" [attr.aria-label]="text().timelineAria">
          @for (entry of entries(); track entry.id) {
            <li class="experience-timeline__item">
              <article class="experience-card" [attr.aria-labelledby]="entry.id + '-title'">
                <div class="experience-card__marker" aria-hidden="true"></div>

                <div class="experience-card__header">
                  <p class="experience-card__period">{{ entry.period }}</p>
                  <h3 [id]="entry.id + '-title'">{{ entry.company }}</h3>
                  <p class="experience-card__role">{{ entry.role }}</p>
                </div>

                <div class="experience-card__grid">
                  <section class="experience-card__block experience-card__block--context">
                    <h4>{{ text().context }}</h4>
                    <p>{{ entry.context }}</p>
                  </section>

                  <section class="experience-card__block">
                    <h4>{{ text().learned }}</h4>
                    <ul class="experience-card__learned-list">
                      @for (learning of entry.learned; track learning) {
                        <li>{{ learning }}</li>
                      }
                    </ul>
                  </section>

                  <section class="experience-card__block experience-card__block--key">
                    <h4>{{ text().keyLearning }}</h4>
                    <p>{{ entry.keyLearning }}</p>
                  </section>

                  <section class="experience-card__block experience-card__block--projects">
                    <h4>{{ text().relatedProjects }}</h4>
                    @if (getRelatedProjects(entry).length) {
                      <div class="experience-project-list">
                        @for (project of getRelatedProjects(entry); track project.id) {
                          <a
                            class="experience-project-link"
                            [routerLink]="['/projects', project.slug]"
                            [attr.aria-label]="text().viewProjectPrefix + ': ' + project.title"
                          >
                            <span class="experience-project-link__initials" aria-hidden="true">
                              {{ getProjectInitials(project.title) }}
                            </span>
                            <span>
                              <strong>{{ project.title }}</strong>
                              <small>{{ project.typeStatus }}</small>
                            </span>
                          </a>
                        }
                      </div>
                    } @else {
                      <p class="experience-card__empty-project">{{ text().noProject }}</p>
                    }
                  </section>
                </div>
              </article>
            </li>
          }
        </ol>
      </section>

      <section class="experience-cta" aria-labelledby="experience-next-title">
        <div>
          <p class="experience-section__eyebrow">{{ text().ctaEyebrow }}</p>
          <h2 id="experience-next-title">{{ text().ctaTitle }}</h2>
          <p>{{ text().ctaIntro }}</p>
        </div>

        <nav class="experience-cta__actions" [attr.aria-label]="text().ctaAria">
          @for (link of ctaLinks(); track link.route) {
            <a class="button-link" [class.button-link--primary]="$first" [routerLink]="link.route">
              {{ link.label }}
            </a>
          }
        </nav>
      </section>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .experience-section,
      .experience-cta {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .experience-hero {
        padding-top: 4rem;
      }

      .experience-section__header {
        max-width: 54rem;
        margin-bottom: 1.75rem;
      }

      .experience-section__eyebrow,
      .experience-card__period {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .experience-section h1,
      .experience-section h2,
      .experience-card h3,
      .experience-card h4,
      .experience-cta h2 {
        margin: 0;
      }

      .experience-hero__summary {
        font-size: 1.15rem;
      }

      .experience-timeline {
        position: relative;
        display: grid;
        gap: 1.25rem;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .experience-timeline::before {
        content: '';
        position: absolute;
        top: 1.2rem;
        bottom: 1.2rem;
        left: 1.05rem;
        width: 2px;
        background: color-mix(in srgb, var(--app-link-color) 45%, var(--app-border-color));
      }

      .experience-timeline__item {
        position: relative;
        padding-left: 3rem;
      }

      .experience-card {
        position: relative;
        overflow: hidden;
        border: 1px solid var(--app-border-color);
        border-radius: 1.1rem;
        background: color-mix(in srgb, var(--app-background-color) 92%, transparent);
      }

      .experience-card__marker {
        position: absolute;
        top: 1.2rem;
        left: -2.45rem;
        width: 1rem;
        height: 1rem;
        border: 3px solid var(--app-background-color);
        border-radius: 999px;
        background: var(--app-link-color);
        box-shadow: 0 0 0 1px var(--app-link-color);
      }

      .experience-card__header {
        padding: 1.25rem 1.35rem;
        border-bottom: 1px solid var(--app-border-color);
        background: color-mix(in srgb, var(--app-link-color) 8%, transparent);
      }

      .experience-card__period {
        font-size: 0.82rem;
      }

      .experience-card__role {
        margin: 0.35rem 0 0;
        font-weight: 700;
      }

      .experience-card__grid {
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
        gap: 1rem;
        padding: 1.25rem;
      }

      .experience-card__block {
        min-width: 0;
        padding: 1rem;
        border: 1px solid color-mix(in srgb, var(--app-border-color) 76%, transparent);
        border-radius: 0.9rem;
      }

      .experience-card__block--context,
      .experience-card__block--projects {
        grid-column: span 2;
      }

      .experience-card__block--key {
        background: color-mix(in srgb, var(--app-link-color) 9%, transparent);
      }

      .experience-card__block h4 {
        margin-bottom: 0.6rem;
        color: var(--app-link-color);
        font-size: 0.88rem;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .experience-card__block p {
        margin: 0;
      }

      .experience-card__learned-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .experience-card__learned-list li {
        padding: 0.4rem 0.65rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        font-size: 0.88rem;
      }

      .experience-project-list {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.75rem;
      }

      .experience-project-link,
      .button-link {
        border: 1px solid var(--app-border-color);
        color: var(--app-text-color);
        text-decoration: none;
      }

      .experience-project-link {
        display: flex;
        min-width: 0;
        align-items: center;
        gap: 0.7rem;
        padding: 0.75rem;
        border-radius: 0.85rem;
      }

      .experience-project-link:hover,
      .experience-project-link:focus-visible,
      .button-link:hover,
      .button-link:focus-visible {
        border-color: var(--app-link-color);
        color: var(--app-link-color);
        outline: none;
      }

      .experience-project-link__initials {
        display: inline-grid;
        width: 2.4rem;
        height: 2.4rem;
        flex: 0 0 2.4rem;
        place-items: center;
        border-radius: 999px;
        background: color-mix(in srgb, var(--app-link-color) 12%, transparent);
        color: var(--app-link-color);
        font-weight: 800;
      }

      .experience-project-link strong,
      .experience-project-link small {
        display: block;
      }

      .experience-project-link small {
        margin-top: 0.2rem;
        color: color-mix(in srgb, var(--app-text-color) 72%, transparent);
        font-size: 0.78rem;
        line-height: 1.25;
      }

      .experience-card__empty-project {
        color: color-mix(in srgb, var(--app-text-color) 72%, transparent);
        font-style: italic;
      }

      .experience-cta {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 1.5rem;
        align-items: center;
      }

      .experience-cta__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        justify-content: flex-end;
      }

      .button-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.7rem;
        padding: 0.65rem 1rem;
        border-radius: 999px;
        font-weight: 700;
      }

      .button-link--primary {
        border-color: var(--app-link-color);
        background: var(--app-link-color);
        color: var(--app-background-color);
      }

      .button-link--primary:hover,
      .button-link--primary:focus-visible {
        color: var(--app-background-color);
        filter: brightness(0.95);
      }

      @media (max-width: 820px) {
        .experience-card__grid,
        .experience-cta {
          grid-template-columns: 1fr;
        }

        .experience-card__block--context,
        .experience-card__block--projects {
          grid-column: auto;
        }

        .experience-project-list {
          grid-template-columns: 1fr;
        }

        .experience-cta__actions {
          justify-content: flex-start;
        }
      }

      @media (max-width: 560px) {
        .experience-section,
        .experience-cta {
          padding-inline: 1rem;
        }

        .experience-timeline::before {
          left: 0.55rem;
        }

        .experience-timeline__item {
          padding-left: 1.8rem;
        }

        .experience-card__marker {
          left: -1.73rem;
        }

        .experience-card__grid,
        .experience-card__header {
          padding: 1rem;
        }
      }
    `,
  ],
})
export class Experience {
  private readonly languageService = inject(LanguageService);

  protected readonly text = computed(() => this.languageService.uiText().pages.experience);
  protected readonly entries = computed(() =>
    getLocalizedData(EXPERIENCE_ENTRIES, this.languageService.currentLanguage()),
  );
  protected readonly ctaLinks = computed(() =>
    getLocalizedData(EXPERIENCE_CTA_LINKS, this.languageService.currentLanguage()),
  );
  private readonly projects = computed(() =>
    getLocalizedData(PROJECTS, this.languageService.currentLanguage()),
  );

  protected getRelatedProjects(entry: ExperienceEntry): Project[] {
    const projectsBySlug = new Map(this.projects().map((project) => [project.slug, project]));

    return entry.relatedProjectSlugs
      .map((slug) => projectsBySlug.get(slug))
      .filter((project): project is Project => Boolean(project));
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
}
