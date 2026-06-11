import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  CONTINUOUS_LEARNING,
  EDUCATION_CTA_LINKS,
  EDUCATION_HIGHLIGHTS,
  FORMAL_EDUCATION,
} from '../../data/education.data';
import { getLocalizedData } from '../../data/localized-data';
import { LanguageService } from '../../core/services/language.service';
import {
  ContinuousLearningEntry,
  EducationCtaLink,
  EducationHighlight,
  FormalEducationEntry,
} from '../../models/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="education-page" aria-labelledby="education-page-title">
      <section class="education-section education-hero" aria-labelledby="education-page-title">
        <div class="education-section__header">
          <p class="education-section__eyebrow">Education and Growth</p>
          <h1 id="education-page-title">Education</h1>
          <p class="education-hero__summary">
            Jorge's professional growth combines formal academic foundations with continuous
            self-directed learning, production experience, technical reading, online training,
            experimentation, and long-term skill development.
          </p>
        </div>
      </section>

      <section class="education-section" aria-labelledby="formal-education-title">
        <div class="education-section__header">
          <p class="education-section__eyebrow">Formal Education</p>
          <h2 id="formal-education-title">Academic foundations</h2>
          <p>
            Formal studies provided the foundations for logical reasoning, programming fundamentals,
            systems analysis, databases, software engineering, and systems design.
          </p>
        </div>

        <div class="formal-education-list" aria-label="Formal education entries">
          @for (entry of formalEducation(); track entry.id) {
            <article class="education-card" [attr.aria-labelledby]="entry.id + '-title'">
              <div class="education-card__meta">
                @if (entry.year) {
                  <span>{{ entry.year }}</span>
                }
                @if (entry.period) {
                  <span>{{ entry.period }}</span>
                }
              </div>

              <h3 [id]="entry.id + '-title'">{{ entry.institution }}</h3>
              <p class="education-card__location">{{ entry.location }}</p>

              <dl class="education-details">
                @if (entry.achievement) {
                  <div>
                    <dt>Achievement</dt>
                    <dd>{{ entry.achievement }}</dd>
                  </div>
                }

                @if (entry.program) {
                  <div>
                    <dt>Program</dt>
                    <dd>{{ entry.program }}</dd>
                  </div>
                }

                @if (entry.status) {
                  <div>
                    <dt>Status</dt>
                    <dd>{{ entry.status }}</dd>
                  </div>
                }
              </dl>

              <p>{{ entry.summary }}</p>
            </article>
          }
        </div>
      </section>

      <section class="education-section" aria-labelledby="continuous-learning-title">
        <div class="education-section__header">
          <p class="education-section__eyebrow">Continuous Learning</p>
          <h2 id="continuous-learning-title">Growth beyond formal education</h2>
          <p>
            Most professional growth has come from combining academic foundations with independent
            study, books, research, online training, experimentation, and lessons learned while
            supporting real software in production environments.
          </p>
        </div>

        <div class="learning-grid" aria-label="Continuous learning areas">
          @for (learning of continuousLearning(); track learning.id) {
            <article class="learning-card" [attr.aria-labelledby]="learning.id + '-title'">
              <h3 [id]="learning.id + '-title'">{{ learning.title }}</h3>
              <p>{{ learning.summary }}</p>

              <div class="learning-card__focus" aria-label="Learning focus areas">
                <h4>Focus</h4>
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
          <p class="education-section__eyebrow">Learning Philosophy</p>
          <h2 id="learning-philosophy-title">Learning Never Stops</h2>
        </div>

        <div class="philosophy-card">
          <p>
            Technology changes constantly, so professional development cannot depend on formal
            education alone. Academic study provides durable foundations, professional experience
            provides context, and independent learning creates the growth needed to keep improving.
          </p>
          <p>
            Jorge treats continuous learning as part of his professional identity: reading,
            researching, practicing, reviewing decisions, and adapting new approaches while keeping
            maintainability, business value, and usability in focus.
          </p>
        </div>
      </section>

      <section class="education-section" aria-labelledby="education-highlights-title">
        <div class="education-section__header">
          <p class="education-section__eyebrow">Education Highlights</p>
          <h2 id="education-highlights-title">Evidence of long-term development</h2>
        </div>

        <div class="highlight-grid" aria-label="Education highlights">
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
          <p class="education-section__eyebrow">Continue Exploring</p>
          <h2 id="education-next-title">Connect learning to skills, projects, and documents</h2>
          <p>
            Use these links to review practical capabilities, public-safe project evidence,
            professional evolution, and supporting documents.
          </p>
        </div>

        <nav class="education-cta__actions" aria-label="Education related navigation links">
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
      .learning-grid,
      .highlight-grid {
        display: grid;
        gap: 1rem;
      }

      .formal-education-list {
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

  protected readonly formalEducation = computed(() =>
    getLocalizedData(FORMAL_EDUCATION, this.languageService.currentLanguage()),
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
}
