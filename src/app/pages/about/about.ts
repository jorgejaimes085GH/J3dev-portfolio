import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ABOUT_PAGE_DATA } from '../../data/about.data';
import { getLocalizedData } from '../../data/localized-data';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="about-page" aria-labelledby="about-page-title">
      <section class="about-section about-introduction" aria-labelledby="about-page-title">
        <div class="about-introduction__content">
          <p class="about-section__eyebrow">{{ text().eyebrow }}</p>
          <h1 id="about-page-title">{{ aboutData().introduction.professionalTitle }}</h1>
          <p class="about-introduction__summary">
            {{ aboutData().introduction.shortIntroduction }}
          </p>
        </div>

        <figure
          class="about-profile-visual"
          [attr.aria-label]="aboutData().introduction.profileImageAlt"
        >
          <div class="about-profile-visual__frame">
            @if (aboutData().introduction.profileImageUrl) {
              <img
                class="about-profile-visual__image"
                [src]="aboutData().introduction.profileImageUrl"
                [alt]="aboutData().introduction.profileImageAlt"
                (error)="hideFailedAsset($event)"
              />
            }
          </div>
        </figure>
      </section>

      <section class="about-section" aria-labelledby="adaptability-title">
        <div class="about-section__header">
          <p class="about-section__eyebrow">{{ text().adaptabilityEyebrow }}</p>
          <h2 id="adaptability-title">{{ text().adaptabilityTitle }}</h2>
          <p>{{ aboutData().adaptability.summary }}</p>
        </div>

        <div class="about-card-grid about-card-grid--four">
          @for (item of aboutData().adaptability.evidence; track item.title) {
            <article class="about-card">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </article>
          }
        </div>
      </section>

      <section class="about-section" aria-labelledby="journey-overview-title">
        <div class="about-section__header">
          <p class="about-section__eyebrow">{{ text().journeyEyebrow }}</p>
          <h2 id="journey-overview-title">{{ text().journeyTitle }}</h2>
          <p>{{ text().journeyIntro }}</p>
        </div>

        <ol class="journey-timeline">
          @for (milestone of aboutData().journeyMilestones; track milestone.title) {
            <li class="journey-timeline__item">
              <article class="about-card about-card--timeline">
                <h3>{{ milestone.title }}</h3>
                <p>{{ milestone.description }}</p>
              </article>
            </li>
          }
        </ol>
      </section>

      <section class="about-section" aria-labelledby="how-jorge-works-title">
        <div class="about-section__header">
          <p class="about-section__eyebrow">{{ text().mindsetEyebrow }}</p>
          <h2 id="how-jorge-works-title">{{ text().mindsetTitle }}</h2>
          <p>{{ text().mindsetIntro }}</p>
        </div>

        <div class="about-card-grid about-card-grid--four">
          @for (item of aboutData().howJorgeWorks; track item.title) {
            <article class="about-card">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </article>
          }
        </div>
      </section>

      <section class="about-section" aria-labelledby="professional-values-title">
        <div class="about-section__header">
          <p class="about-section__eyebrow">{{ text().valuesEyebrow }}</p>
          <h2 id="professional-values-title">{{ text().valuesTitle }}</h2>
          <p>{{ text().valuesIntro }}</p>
        </div>

        <div class="about-card-grid about-card-grid--values">
          @for (value of aboutData().professionalValues; track value.title) {
            <article class="about-card">
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </article>
          }
        </div>
      </section>

      <section class="about-cta" aria-labelledby="about-cta-title">
        <div>
          <p class="about-section__eyebrow">{{ text().ctaEyebrow }}</p>
          <h2 id="about-cta-title">{{ text().ctaTitle }}</h2>
          <p>{{ text().ctaIntro }}</p>
        </div>

        <div class="about-cta__actions" [attr.aria-label]="text().ctaAria">
          <a class="button-link button-link--primary" routerLink="/why-hire-me">{{
            navText().value
          }}</a>
          <a class="button-link" routerLink="/projects">{{ navText().projects }}</a>
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .about-page {
        width: 100%;
      }

      .about-section,
      .about-cta {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .about-introduction,
      .about-cta {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        justify-content: space-between;
      }

      .about-introduction__content,
      .about-cta > div:first-child,
      .about-section__header {
        max-width: 48rem;
      }

      .about-section__header {
        margin-bottom: 1.5rem;
      }

      .about-section__eyebrow {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .about-section h1,
      .about-section h2,
      .about-cta h2 {
        margin: 0;
      }

      .about-introduction__summary {
        font-size: 1.15rem;
      }

      .about-profile-visual {
        flex: 0 0 min(34vw, 20rem);
        width: min(100%, 20rem);
        margin: 0;
      }

      .about-profile-visual__frame {
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

      .about-profile-visual__image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }

      .journey-timeline {
        display: grid;
        gap: 1rem;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .journey-timeline__item {
        position: relative;
        padding-left: 1.5rem;
      }

      .journey-timeline__item::before {
        position: absolute;
        top: 1.2rem;
        left: 0;
        width: 0.75rem;
        height: 0.75rem;
        border: 2px solid var(--app-link-color);
        border-radius: 999px;
        content: '';
      }

      .about-card-grid {
        display: grid;
        gap: 1rem;
      }

      .about-card-grid--four {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .about-card-grid--values {
        grid-template-columns: repeat(5, minmax(0, 1fr));
      }

      .about-card {
        padding: 1.25rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.75rem;
      }

      .about-card h3 {
        margin: 0;
      }

      .about-section__header p:last-child,
      .about-introduction__content p:last-child,
      .about-card p:last-child,
      .about-cta p:last-child {
        margin-bottom: 0;
      }

      .about-cta__actions {
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
        .about-introduction,
        .about-cta {
          align-items: flex-start;
          flex-direction: column;
        }

        .about-card-grid--four,
        .about-card-grid--values {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .about-cta__actions {
          justify-content: flex-start;
        }
      }

      @media (max-width: 600px) {
        .about-section,
        .about-cta {
          padding: 2.5rem 1rem;
        }

        .about-card-grid--four,
        .about-card-grid--values {
          grid-template-columns: 1fr;
        }

        .about-profile-visual {
          flex-basis: auto;
          width: 100%;
          max-width: 22rem;
        }

        .about-profile-visual__frame {
          max-height: none;
        }
      }
    `,
  ],
})
export class About {
  private readonly languageService = inject(LanguageService);

  protected readonly text = computed(() => this.languageService.uiText().pages.about);
  protected readonly navText = computed(() => this.languageService.uiText().nav);

  protected readonly aboutData = computed(() =>
    getLocalizedData(ABOUT_PAGE_DATA, this.languageService.currentLanguage()),
  );

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
