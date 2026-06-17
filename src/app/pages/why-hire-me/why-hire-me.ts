import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { VALUE_PAGE_DATA } from '../../data/value.data';
import { getLocalizedData } from '../../data/localized-data';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-why-hire-me',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="value-page" aria-labelledby="value-page-title">
      <section class="value-section value-introduction" aria-labelledby="value-page-title">
        <div class="value-section__header value-introduction__content">
          <p class="value-section__eyebrow">{{ text().impactEyebrow }}</p>
          <h1 id="value-page-title">{{ valueData().introduction.title }}</h1>
          <p class="value-introduction__summary">{{ valueData().introduction.introduction }}</p>
          <p>{{ valueData().introduction.supportingStatement }}</p>
        </div>

        <figure
          class="value-introduction__visual"
          [attr.aria-label]="valueData().introduction.visualImageAlt"
        >
          <div class="value-introduction__visual-frame">
            @if (valueData().introduction.visualImageUrl) {
              <img
                class="value-introduction__visual-image"
                [src]="valueData().introduction.visualImageUrl"
                [alt]="valueData().introduction.visualImageAlt"
                (error)="hideFailedAsset($event)"
              />
            }
          </div>
        </figure>
      </section>

      <section class="value-section" aria-labelledby="value-pillars-title">
        <div class="value-section__header">
          <p class="value-section__eyebrow">{{ text().pillarsEyebrow }}</p>
          <h2 id="value-pillars-title">{{ text().pillarsTitle }}</h2>
          <p>{{ text().pillarsIntro }}</p>
        </div>

        <div class="value-card-grid value-card-grid--three">
          @for (pillar of valueData().valuePillars; track pillar.title) {
            <article class="value-card">
              @if (pillar.categoryLabel) {
                <p class="value-card__label">{{ pillar.categoryLabel }}</p>
              }
              <h3>{{ pillar.title }}</h3>
              <p>{{ pillar.description }}</p>
            </article>
          }
        </div>
      </section>

      <section class="value-section" aria-labelledby="contribution-areas-title">
        <div class="value-section__header">
          <p class="value-section__eyebrow">{{ text().areasEyebrow }}</p>
          <h2 id="contribution-areas-title">{{ text().areasTitle }}</h2>
          <p>{{ text().areasIntro }}</p>
        </div>

        <div class="value-card-grid value-card-grid--three">
          @for (area of valueData().contributionAreas; track area.title) {
            <article class="value-card">
              <h3>{{ area.title }}</h3>
              <p>{{ area.description }}</p>
            </article>
          }
        </div>
      </section>

      <section class="value-section" aria-labelledby="team-contribution-title">
        <div class="value-section__header">
          <p class="value-section__eyebrow">{{ text().teamEyebrow }}</p>
          <h2 id="team-contribution-title">{{ text().teamTitle }}</h2>
          <p>{{ text().teamIntro }}</p>
        </div>

        <div class="value-card-grid value-card-grid--four">
          @for (contribution of valueData().teamContributions; track contribution.title) {
            <article class="value-card">
              <h3>{{ contribution.title }}</h3>
              <p>{{ contribution.description }}</p>
            </article>
          }
        </div>
      </section>

      <section class="value-section value-highlight" aria-labelledby="philosophy-summary-title">
        <div class="value-highlight__content">
          <p class="value-section__eyebrow">{{ text().philosophyEyebrow }}</p>
          <h2 id="philosophy-summary-title">{{ valueData().philosophySummary.title }}</h2>
          <p>{{ valueData().philosophySummary.description }}</p>
        </div>

        <ul class="philosophy-list" [attr.aria-label]="text().philosophyAria">
          @for (principle of valueData().philosophySummary.principles; track principle) {
            <li>{{ principle }}</li>
          }
        </ul>
      </section>

      <section class="value-cta" aria-labelledby="evidence-navigation-title">
        <div>
          <p class="value-section__eyebrow">{{ text().evidenceEyebrow }}</p>
          <h2 id="evidence-navigation-title">{{ text().evidenceTitle }}</h2>
          <p>{{ text().evidenceIntro }}</p>
        </div>

        <nav class="value-cta__actions" [attr.aria-label]="text().evidenceAria">
          @for (link of valueData().evidenceLinks; track link.route) {
            <a class="btn button-link" [class.btn--primary]="$first" [class.btn--secondary]="!$first" [class.button-link--primary]="$first" [routerLink]="link.route">
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

      .value-section,
      .value-cta {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .value-introduction {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        justify-content: space-between;
        padding-top: 4rem;
      }

      .value-section__header {
        max-width: 48rem;
        margin-bottom: 1.5rem;
      }

      .value-introduction__content {
        margin-bottom: 0;
      }

      .value-introduction__visual {
        flex: 0 0 min(34vw, 20rem);
        width: min(100%, 20rem);
        margin: 0;
      }

      .value-introduction__visual-frame {
        display: grid;
        width: 100%;
        aspect-ratio: 4 / 5;
        max-height: 30rem;
        overflow: hidden;
        place-items: center;
        border: 1px solid var(--app-border-color);
        border-radius: 1rem;
        background:
          linear-gradient(
            135deg,
            color-mix(in srgb, var(--app-link-color) 10%, transparent),
            transparent 48%
          ),
          color-mix(in srgb, var(--app-surface-color) 92%, var(--app-link-color) 8%);
        box-shadow: 0 1rem 2.5rem color-mix(in srgb, var(--app-text-color) 12%, transparent);
      }

      .value-introduction__visual-image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }

      .value-section__eyebrow,
      .value-card__label {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .value-card__label {
        font-size: 0.85rem;
      }

      .value-section h1,
      .value-section h2,
      .value-cta h2 {
        margin: 0;
      }

      .value-introduction__summary {
        font-size: 1.15rem;
      }

      .value-card-grid {
        display: grid;
        gap: 1rem;
      }

      .value-card-grid--three {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .value-card-grid--four {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .value-card {
        padding: 1.25rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.75rem;
      }

      .value-card h3 {
        margin: 0;
      }

      .value-highlight {
        display: grid;
        grid-template-columns: minmax(0, 1.5fr) minmax(16rem, 0.8fr);
        gap: 1.5rem;
        align-items: start;
        border: 1px solid var(--app-border-color);
        border-radius: 1rem;
      }

      .value-highlight__content {
        max-width: 44rem;
      }

      .philosophy-list {
        display: grid;
        gap: 0.75rem;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .philosophy-list li {
        padding: 0.75rem 1rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
      }

      .value-section__header p:last-child,
      .value-introduction__content p:last-child,
      .value-card p:last-child,
      .value-highlight p:last-child,
      .value-cta p:last-child {
        margin-bottom: 0;
      }

      .value-cta {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        justify-content: space-between;
      }

      .value-cta > div:first-child {
        max-width: 44rem;
      }

      .value-cta__actions {
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
        .value-introduction {
          align-items: flex-start;
          flex-direction: column;
        }

        .value-introduction__visual {
          flex-basis: auto;
          width: 100%;
          max-width: 22rem;
        }

        .value-introduction__visual-frame {
          max-height: none;
        }

        .value-card-grid--three,
        .value-card-grid--four,
        .value-highlight {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .value-cta {
          align-items: flex-start;
          flex-direction: column;
        }

        .value-cta__actions {
          justify-content: flex-start;
        }
      }

      @media (max-width: 600px) {
        .value-section,
        .value-cta {
          padding: 2.5rem 1rem;
        }

        .value-card-grid--three,
        .value-card-grid--four,
        .value-highlight {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class WhyHireMe {
  private readonly languageService = inject(LanguageService);

  protected readonly text = computed(() => this.languageService.uiText().pages.value);

  protected readonly valueData = computed(() =>
    getLocalizedData(VALUE_PAGE_DATA, this.languageService.currentLanguage()),
  );

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
