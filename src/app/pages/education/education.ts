import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  CONTINUOUS_LEARNING,
  EDUCATION_CTA_LINKS,
  EDUCATION_HIGHLIGHTS,
  FORMAL_EDUCATION,
  SELF_TAUGHT_EDUCATION,
} from '../../data/education.data';
import { getLocalizedData } from '../../data/localized-data';
import { LanguageService } from '../../core/services/language.service';
import {
  ContinuousLearningEntry,
  EducationCtaLink,
  EducationHighlight,
  FormalEducationEntry,
  SelfTaughtEducationEntry,
} from '../../models/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="education-page" aria-labelledby="education-page-title">
      <section class="education-section education-hero" aria-labelledby="education-page-title">
        <div class="education-section__header">
          <p class="education-section__eyebrow">{{ text().eyebrow }}</p>
          <h1 id="education-page-title">{{ text().title }}</h1>
          <p class="education-hero__summary">{{ text().summary }}</p>
        </div>
      </section>

      <section class="education-section" aria-labelledby="formal-education-title">
        <div class="education-section__header">
          <p class="education-section__eyebrow">{{ text().formalEyebrow }}</p>
          <h2 id="formal-education-title">{{ text().formalTitle }}</h2>
          <p>{{ text().formalIntro }}</p>
        </div>

        <div class="formal-education-list" [attr.aria-label]="text().formalAria">
          @for (entry of formalEducation(); track entry.id) {
            <article
              class="education-card"
              [class.education-card--cedefoc]="isCedefocInstitution(entry)"
              [class.education-card--unad]="isUnadInstitution(entry)"
              [attr.aria-labelledby]="entry.id + '-title'"
            >
              <span class="education-card__watermark" aria-hidden="true">
                @if (entry.institutionLogoSrc && !hasLogoFailed(entry.id)) {
                  <img [src]="entry.institutionLogoSrc" [alt]="" />
                } @else {
                  <span>{{ getInstitutionInitials(entry.institution) }}</span>
                }
              </span>

              <div class="education-card__meta">
                @if (entry.year) {
                  <span>{{ entry.year }}</span>
                }
                @if (entry.period) {
                  <span>{{ entry.period }}</span>
                }
              </div>

              <div class="education-card__institution">
                @if (entry.institutionUrl) {
                  <a
                    class="institution-link"
                    [href]="entry.institutionUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    [attr.aria-label]="entry.institution + ' - ' + text().externalWebsiteAria"
                  >
                    <span class="institution-logo">
                      @if (entry.institutionLogoSrc && !hasLogoFailed(entry.id)) {
                        <img
                          [src]="entry.institutionLogoSrc"
                          [alt]="entry.institutionLogoAlt ?? entry.institution"
                          (error)="markLogoFailed(entry.id)"
                        />
                      } @else {
                        <span aria-hidden="true">{{ getInstitutionInitials(entry.institution) }}</span>
                      }
                    </span>

                    <h3 [id]="entry.id + '-title'">{{ entry.institution }}</h3>
                  </a>
                } @else {
                  <div class="institution-link institution-link--static">
                    <span class="institution-logo">
                      @if (entry.institutionLogoSrc && !hasLogoFailed(entry.id)) {
                        <img
                          [src]="entry.institutionLogoSrc"
                          [alt]="entry.institutionLogoAlt ?? entry.institution"
                          (error)="markLogoFailed(entry.id)"
                        />
                      } @else {
                        <span aria-hidden="true">{{ getInstitutionInitials(entry.institution) }}</span>
                      }
                    </span>

                    <h3 [id]="entry.id + '-title'">{{ entry.institution }}</h3>
                  </div>
                }
              </div>

              <p class="education-card__location">{{ entry.location }}</p>

              <dl class="education-details">
                @if (entry.achievement) {
                  <div>
                    <dt>{{ text().achievement }}</dt>
                    <dd>{{ entry.achievement }}</dd>
                  </div>
                }

                @if (entry.program) {
                  <div>
                    <dt>{{ text().program }}</dt>
                    <dd>{{ entry.program }}</dd>
                  </div>
                }

                @if (entry.status) {
                  <div>
                    <dt>{{ text().status }}</dt>
                    <dd>{{ entry.status }}</dd>
                  </div>
                }
              </dl>

              <p>{{ entry.summary }}</p>
            </article>
          }
        </div>
      </section>

      <section class="education-section" aria-labelledby="self-taught-education-title">
        <div class="education-section__header">
          <p class="education-section__eyebrow">{{ text().selfTaughtEyebrow }}</p>
          <h2 id="self-taught-education-title">{{ text().selfTaughtTitle }}</h2>
          <p>{{ text().selfTaughtIntro }}</p>
        </div>

        <div class="self-taught-grid" [attr.aria-label]="text().selfTaughtAria">
          @for (entry of selfTaughtEducation(); track entry.id) {
            <article class="learning-card" [attr.aria-labelledby]="entry.id + '-title'">
              <p class="education-card__meta">{{ entry.period }}</p>
              <h3 [id]="entry.id + '-title'">{{ entry.title }}</h3>
              <p>{{ entry.description }}</p>

              <div class="learning-card__focus" [attr.aria-label]="text().focusAria">
                <h4>{{ text().focus }}</h4>
                <ul class="tag-list">
                  @for (focusArea of entry.focusAreas; track focusArea) {
                    <li>{{ focusArea }}</li>
                  }
                </ul>
              </div>

              <div class="learning-card__focus">
                <h4>{{ text().keyLearning }}</h4>
                <p>{{ entry.keyLearning }}</p>
              </div>
            </article>
          }
        </div>
      </section>

      <section class="education-section" aria-labelledby="continuous-learning-title">
        <div class="education-section__header">
          <p class="education-section__eyebrow">{{ text().learningEyebrow }}</p>
          <h2 id="continuous-learning-title">{{ text().learningTitle }}</h2>
          <p>{{ text().learningIntro }}</p>
        </div>

        <div class="learning-grid" [attr.aria-label]="text().learningAria">
          @for (learning of continuousLearning(); track learning.id) {
            <article class="learning-card" [attr.aria-labelledby]="learning.id + '-title'">
              <h3 [id]="learning.id + '-title'">{{ learning.title }}</h3>
              <p>{{ learning.summary }}</p>

              <div class="learning-card__focus" [attr.aria-label]="text().focusAria">
                <h4>{{ text().focus }}</h4>
                <ul class="tag-list">
                  @for (focusArea of learning.focusAreas; track focusArea) {
                    <li>{{ focusArea }}</li>
                  }
                </ul>
              </div>
            </article>
          }
        </div>
      </section>

      <section class="education-section" aria-labelledby="learning-philosophy-title">
        <div class="education-section__header">
          <p class="education-section__eyebrow">{{ text().philosophyEyebrow }}</p>
          <h2 id="learning-philosophy-title">{{ text().philosophyTitle }}</h2>
        </div>

        <div class="philosophy-card">
          <p>{{ text().philosophyBodyOne }}</p>
          <p>{{ text().philosophyBodyTwo }}</p>
        </div>
      </section>

      <section class="education-section" aria-labelledby="education-highlights-title">
        <div class="education-section__header">
          <p class="education-section__eyebrow">{{ text().highlightsEyebrow }}</p>
          <h2 id="education-highlights-title">{{ text().highlightsTitle }}</h2>
        </div>

        <div class="highlight-grid" [attr.aria-label]="text().highlightsAria">
          @for (highlight of highlights(); track highlight.title) {
            <article class="highlight-card">
              <h3>{{ highlight.title }}</h3>
              <p>{{ highlight.description }}</p>
            </article>
          }
        </div>
      </section>

      <section class="education-cta" aria-labelledby="education-next-title">
        <div>
          <p class="education-section__eyebrow">{{ text().ctaEyebrow }}</p>
          <h2 id="education-next-title">{{ text().ctaTitle }}</h2>
          <p>{{ text().ctaBody }}</p>
        </div>

        <nav class="education-cta__actions" [attr.aria-label]="text().ctaAria">
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

      .education-section,
      .education-cta {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .education-hero {
        padding-top: 4rem;
      }

      .education-section__header {
        max-width: 54rem;
        margin-bottom: 1.5rem;
      }

      .education-section__eyebrow,
      .education-card__meta {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .education-section h1,
      .education-section h2,
      .education-section h3,
      .education-cta h2 {
        margin: 0;
      }

      .education-hero__summary {
        font-size: 1.15rem;
      }

      .formal-education-list,
      .self-taught-grid,
      .learning-grid,
      .highlight-grid {
        display: grid;
        gap: 1rem;
      }

      .formal-education-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .self-taught-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .learning-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .highlight-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .education-card,
      .learning-card,
      .highlight-card,
      .philosophy-card {
        padding: 1.25rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.875rem;
        background: color-mix(in srgb, var(--app-background-color) 92%, var(--app-link-color));
      }

      .education-card,
      .learning-card,
      .highlight-card {
        display: grid;
        align-content: start;
        gap: 0.85rem;
      }

      .education-card__meta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 0;
        font-size: 0.8rem;
      }

      .education-card__institution {
        min-width: 0;
      }

      .institution-link {
        display: inline-grid;
        grid-template-columns: auto minmax(0, 1fr);
        gap: 0.85rem;
        align-items: center;
        color: inherit;
        text-decoration: none;
      }

      .institution-link:not(.institution-link--static):hover h3,
      .institution-link:not(.institution-link--static):focus-visible h3 {
        color: var(--app-link-color);
        text-decoration: underline;
        text-underline-offset: 0.18em;
      }

      .institution-link:focus-visible {
        border-radius: 0.5rem;
        outline: 2px solid var(--app-link-color);
        outline-offset: 0.25rem;
      }

      .institution-logo {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        overflow: hidden;
        border: 1px solid var(--app-border-color);
        border-radius: 0.75rem;
        background: color-mix(in srgb, var(--app-background-color) 84%, var(--app-link-color));
        color: var(--app-link-color);
        flex: 0 0 auto;
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.04em;
      }

      .institution-logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 0.35rem;
      }

      .education-card__location {
        margin: 0;
        font-weight: 700;
      }

      .education-details {
        display: grid;
        gap: 0.5rem;
        margin: 0;
      }

      .education-details div {
        display: grid;
        gap: 0.2rem;
      }

      .education-details dt,
      .learning-card h4 {
        color: var(--app-link-color);
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .education-details dd,
      .education-card p,
      .learning-card p,
      .highlight-card p,
      .philosophy-card p,
      .education-cta p {
        margin: 0;
      }

      .learning-card__focus {
        display: grid;
        gap: 0.75rem;
      }

      .learning-card h4 {
        margin: 0;
      }

      .tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .tag-list li {
        padding: 0.35rem 0.6rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        font-size: 0.9rem;
      }

      .philosophy-card {
        display: grid;
        gap: 1rem;
        max-width: 54rem;
      }

      .education-cta {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 1.5rem;
        align-items: center;
      }

      .education-cta__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        justify-content: flex-end;
      }

      .education-card__watermark {
        display: none;
      }

      .button-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.75rem;
        padding: 0.75rem 1rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        color: inherit;
        font-weight: 700;
        text-decoration: none;
      }

      .button-link--primary,
      .button-link:hover,
      .button-link:focus-visible {
        border-color: var(--app-link-color);
        color: var(--app-background-color);
        background: var(--app-link-color);
        outline: 2px solid transparent;
      }

      @media (max-width: 900px) {
        .formal-education-list,
        .self-taught-grid,
        .highlight-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .education-cta {
          grid-template-columns: 1fr;
        }

        .education-cta__actions {
          justify-content: flex-start;
        }
      }

      @media (max-width: 700px) {
        .education-section,
        .education-cta {
          padding: 2.5rem 1rem;
        }

        .formal-education-list,
        .self-taught-grid,
        .learning-grid,
        .highlight-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class Education {
  private readonly languageService = inject(LanguageService);
  private readonly failedInstitutionLogoIds = signal<ReadonlySet<string>>(new Set());

  protected readonly text = computed(() => this.languageService.uiText().pages.education);

  protected readonly formalEducation = computed(() =>
    getLocalizedData(FORMAL_EDUCATION, this.languageService.currentLanguage()),
  );
  protected readonly selfTaughtEducation = computed(() =>
    getLocalizedData(SELF_TAUGHT_EDUCATION, this.languageService.currentLanguage()),
  );
  protected readonly continuousLearning = computed(() =>
    getLocalizedData(CONTINUOUS_LEARNING, this.languageService.currentLanguage()),
  );
  protected readonly highlights = computed(() =>
    getLocalizedData(EDUCATION_HIGHLIGHTS, this.languageService.currentLanguage()),
  );
  protected readonly ctaLinks = computed(() =>
    getLocalizedData(EDUCATION_CTA_LINKS, this.languageService.currentLanguage()),
  );

  protected hasLogoFailed(entryId: string): boolean {
    return this.failedInstitutionLogoIds().has(entryId);
  }

  protected isUnadInstitution(entry: FormalEducationEntry): boolean {
    return entry.institution.toLowerCase().includes('unad');
  }

  protected isCedefocInstitution(entry: FormalEducationEntry): boolean {
    return entry.institution.toLowerCase().includes('cedefoc');
  }

  protected markLogoFailed(entryId: string): void {
    this.failedInstitutionLogoIds.update((failedIds) => {
      const nextFailedIds = new Set(failedIds);
      nextFailedIds.add(entryId);
      return nextFailedIds;
    });
  }

  protected getInstitutionInitials(institution: string): string {
    const abbreviationMatch = institution.match(/\(([^)]+)\)/);

    if (abbreviationMatch?.[1]) {
      return abbreviationMatch[1].slice(0, 5).toUpperCase();
    }

    return institution
      .split(/\s+/)
      .filter((word) => /^[A-ZÁÉÍÓÚÑ]/.test(word))
      .map((word) => word[0])
      .join('')
      .slice(0, 5)
      .toUpperCase();
  }
}
