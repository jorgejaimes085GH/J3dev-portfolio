import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/services/language.service';
import { ThemeService } from '../../core/services/theme.service';
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
    <main
      class="experience-page"
      [class.experience-page--premium]="isPremiumTheme()"
      aria-labelledby="experience-page-title"
    >
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
                <div
                  class="experience-card__header"
                  [attr.data-company-watermark]="
                    entry.companyInitials || getCompanyInitials(entry.company)
                  "
                >
                  <div class="experience-card__identity">
                    <span class="experience-card__logo" aria-hidden="true">
                      @if (getCompanyLogoUrl(entry) && !hasAssetFailed(getCompanyAssetId(entry))) {
                        <img
                          class="experience-card__logo-image"
                          [src]="getCompanyLogoUrl(entry)"
                          [alt]="getCompanyLogoAlt(entry)"
                          loading="lazy"
                          decoding="async"
                          (error)="markAssetFailed(getCompanyAssetId(entry))"
                        />
                      } @else {
                        <span>{{ entry.companyInitials || getCompanyInitials(entry.company) }}</span>
                      }
                    </span>
                    <div>
                      <p class="experience-card__period">{{ entry.period }}</p>
                      <h3 [id]="entry.id + '-title'">
                        @if (entry.companyUrl) {
                          <a
                            class="experience-card__company-link"
                            [href]="entry.companyUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {{ entry.company }}
                            <span aria-hidden="true">↗</span>
                          </a>
                        } @else {
                          {{ entry.company }}
                        }
                      </h3>
                      <p class="experience-card__role">{{ entry.role }}</p>
                    </div>
                  </div>
                </div>

                <div class="experience-card__body">
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
                                @if (getProjectThumbnailUrl(project) && !hasAssetFailed(getProjectAssetId(project))) {
                                  <img
                                    class="experience-project-link__thumbnail"
                                    style="width:80%;height:80%;object-fit:contain"
                                    [src]="getProjectThumbnailUrl(project)"
                                    [alt]="''"
                                    loading="lazy"
                                    decoding="async"
                                    (error)="markAssetFailed(getProjectAssetId(project))"
                                  />
                                } @else {
                                  {{ getProjectInitials(project.title) }}
                                }
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

                  <div class="experience-card__evidence">
                    <a
                      class="experience-recommendation-link"
                      routerLink="/documents"
                      [fragment]="entry.recommendationAnchor"
                    >
                      {{ entry.recommendationLabel }}
                    </a>
                  </div>
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

      :is(.experience-section, .experience-card, .experience-cta) :is(h1, h2, h3, h4) {
        margin: 0;
      }

      .experience-hero__summary {
        font-size: 1.15rem;
      }

      .experience-timeline {
        position: relative;
        display: grid;
        gap: 1rem;
        margin: 0;
        padding: 0 0 0 1.5rem;
        list-style: none;
      }

      .experience-timeline::before {
        position: absolute;
        top: 0.75rem;
        bottom: 0.75rem;
        left: 0.35rem;
        width: 1px;
        background: var(--app-border-color);
        content: '';
      }

      .experience-timeline__item {
        position: relative;
      }

      .experience-timeline__item::before {
        position: absolute;
        top: 1.75rem;
        left: -1.35rem;
        width: 0.7rem;
        height: 0.7rem;
        border: 2px solid var(--app-link-color);
        border-radius: 999px;
        background: var(--app-background-color);
        content: '';
      }

      .experience-card {
        position: relative;
        display: grid;
        grid-template-columns: minmax(10rem, 0.35fr) minmax(0, 1fr);
        gap: 1.25rem;
        padding: 1.25rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.875rem;
        background: var(--app-background-color);
      }

      .experience-card__header {
        min-width: 0;
      }

      .experience-card__identity {
        display: grid;
        gap: 0.75rem;
      }

      .experience-card__logo {
        position: relative;
        display: inline-grid;
        width: 3.15rem;
        height: 3.15rem;
        flex: 0 0 3.15rem;
        place-items: center;
        overflow: hidden;
        border: 1px solid color-mix(in srgb, var(--app-link-color) 36%, var(--app-border-color));
        border-radius: 0.9rem;
        background:
          linear-gradient(
            135deg,
            color-mix(in srgb, var(--app-link-color) 14%, transparent),
            transparent
          ),
          var(--app-background-color);
        color: var(--app-link-color);
        font-weight: 900;
        letter-spacing: 0.04em;
      }

      .experience-card__logo-image {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 0.45rem;
        background: var(--app-background-color);
      }

      .experience-card__company-link {
        color: inherit;
        text-decoration: none;
      }

      .experience-card__company-link:hover,
      .experience-card__company-link:focus-visible {
        color: var(--app-link-color);
        outline: none;
        text-decoration: underline;
        text-underline-offset: 0.18em;
      }

      .experience-card__period {
        display: block;
        color: var(--app-text-color);
        font-size: clamp(1.35rem, 3vw, 2rem);
        font-weight: 800;
        letter-spacing: -0.03em;
        line-height: 1;
        text-transform: none;
      }

      .experience-card__role {
        margin: 0.35rem 0 0;
        font-weight: 700;
      }

      .experience-page--premium .experience-card {
        overflow: hidden;
        gap: 1rem;
        border-color: color-mix(in srgb, var(--app-link-color) 26%, var(--app-border-color));
      }

      .experience-page--premium .experience-card__header,
      .experience-page--premium .experience-card__body {
        grid-column: 1 / -1;
      }

      .experience-page--premium .experience-card__header {
        padding: clamp(1rem, 2.6vw, 1.45rem);
        border: 1px solid color-mix(in srgb, var(--app-link-color) 22%, rgba(255, 255, 255, 0.16));
        border-radius: 0.875rem;
        background: color-mix(in srgb, var(--app-link-color) 10%, var(--app-background-color));
      }

      .experience-page--premium .experience-card__identity {
        position: relative;
        z-index: 1;
        grid-template-columns: auto minmax(0, 1fr);
        align-items: center;
        max-width: min(100%, 38rem);
      }

      .experience-card__body {
        display: grid;
        gap: 1rem;
        min-width: 0;
      }

      .experience-card__grid {
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
        gap: 1rem;
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

      :is(.experience-project-link, .experience-recommendation-link, .button-link) {
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

      :is(.experience-project-link, .experience-recommendation-link, .button-link):is(
        :hover,
        :focus-visible
      ) {
        border-color: var(--app-link-color);
        color: var(--app-link-color);
        outline: none;
      }

      .experience-project-link__initials {
        position: relative;
        display: inline-grid;
        width: 2.4rem;
        height: 2.4rem;
        flex: 0 0 2.4rem;
        place-items: center;
        overflow: hidden;
        border-radius: 0.72rem;
        background: color-mix(in srgb, var(--app-link-color) 12%, transparent);
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

      .experience-card__evidence {
        display: flex;
        justify-content: flex-end;
      }

      .experience-recommendation-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.45rem;
        padding: 0.58rem 0.9rem;
        border-radius: 999px;
        background: color-mix(in srgb, var(--app-link-color) 8%, transparent);
        font-weight: 800;
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

      .button-link--primary:is(:hover, :focus-visible) {
        color: var(--app-background-color);
        filter: brightness(0.95);
      }

      @media (max-width: 640px) {
        .experience-page,
        .experience-page * {
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
          overflow-wrap: anywhere;
        }

        .experience-section,
        .experience-cta {
          width: 100%;
          padding: 2.25rem 1rem;
        }

        .experience-section__header {
          width: 100%;
          margin-bottom: 1.25rem;
        }

        .experience-timeline {
          display: block;
          width: 100%;
          padding-left: 0.75rem;
        }

        .experience-timeline::before {
          left: 0.1rem;
        }

        .experience-timeline__item {
          display: block;
          width: 100%;
          margin-bottom: 1rem;
        }

        .experience-timeline__item:last-child {
          margin-bottom: 0;
        }

        .experience-timeline__item::before {
          left: -0.95rem;
          width: 0.55rem;
          height: 0.55rem;
        }

        :is(
          .experience-card,
          .experience-card__body,
          .experience-card__grid,
          .experience-card__block,
          .experience-project-list,
          .experience-cta,
          .experience-cta__actions
        ) {
          display: flex;
          flex-direction: column;
          width: 100%;
          grid-template-columns: 1fr;
        }

        .experience-card {
          gap: 1rem;
          padding: 1rem;
        }

        :is(
          .experience-card__header,
          .experience-card__body,
          .experience-card__block--context,
          .experience-card__block--key,
          .experience-card__block--projects,
          .experience-page--premium .experience-card__header,
          .experience-page--premium .experience-card__body
        ) {
          grid-column: auto;
          width: 100%;
        }

        .experience-card__identity {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          gap: 0.75rem;
        }

        .experience-card__logo {
          width: 2.9rem;
          height: 2.9rem;
          flex: 0 0 2.9rem;
        }

        .experience-card__period {
          font-size: clamp(1.25rem, 9vw, 1.65rem);
          line-height: 1.08;
        }

        .experience-card__learned-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          width: 100%;
        }

        .experience-card__learned-list li {
          white-space: normal;
        }

        .experience-project-list {
          gap: 0.65rem;
        }

        .experience-project-link {
          width: 100%;
          flex-direction: row;
          align-items: center;
        }

        .experience-card__evidence {
          width: 100%;
          justify-content: flex-start;
        }

        :is(.experience-recommendation-link, .button-link) {
          width: 100%;
          justify-content: center;
          text-align: center;
        }

        .experience-cta {
          align-items: stretch;
          gap: 1rem;
        }

        .experience-cta__actions {
          align-items: stretch;
          justify-content: flex-start;
        }

        .experience-page--premium .experience-card__identity {
          grid-template-columns: 1fr;
        }

        .experience-page--premium .experience-card__header {
          padding: 1rem;
        }
      }
    `,
  ],
})
export class Experience {
  private readonly languageService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);

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

  protected getProjectAssetId(project: Project): string {
    return `experience-project-${project.id}`;
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

  protected getProjectThumbnailUrl(project: Project): string | undefined {
    return project.thumbnailUrl || project.logoUrl || project.overviewImageUrl;
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
