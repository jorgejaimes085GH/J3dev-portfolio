import { Component, computed, inject, signal } from '@angular/core';

import {
  PROFESSIONAL_AVAILABILITY,
  PROFESSIONAL_CONTACT_METHODS,
  TECHNICAL_INTERESTS,
} from '../../data/contact.data';
import { getLocalizedData } from '../../data/localized-data';
import { LanguageService } from '../../core/services/language.service';
import { ContactMethod } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <main class="contact-page" aria-labelledby="contact-page-title">
      <section class="contact-section contact-hero" aria-labelledby="contact-page-title">
        <div class="contact-section__header">
          <p class="contact-section__eyebrow">{{ text().eyebrow }}</p>
          <h1 id="contact-page-title">{{ text().title }}</h1>
          <p class="contact-hero__subtitle">{{ text().subtitle }}</p>
          <p class="contact-hero__intro">{{ text().intro }}</p>
        </div>
      </section>

      <section class="contact-section" aria-labelledby="contact-methods-title">
        <div class="contact-section__header">
          <p class="contact-section__eyebrow">{{ text().methodsEyebrow }}</p>
          <h2 id="contact-methods-title">{{ text().methodsTitle }}</h2>
          <p>{{ text().methodsIntro }}</p>
        </div>

        <div class="contact-method-grid" [attr.aria-label]="text().methodsAria">
          @for (method of contactMethods(); track method.id) {
            <article class="contact-method-card" [attr.aria-labelledby]="method.id + '-title'">
              <div class="contact-method-card__icon" aria-hidden="true">
                @if (method.iconUrl && !hasIconFailed(method.id)) {
                  <img
                    class="contact-method-card__icon-image"
                    [src]="method.iconUrl"
                    [alt]="''"
                    (error)="markIconFailed(method.id)"
                  />
                } @else {
                  <span>{{ method.title.charAt(0) }}</span>
                }
              </div>

              <div class="contact-method-card__content">
                <h3 [id]="method.id + '-title'">{{ method.title }}</h3>
                <p>{{ method.description }}</p>
                <p class="contact-method-card__value">{{ method.value }}</p>

                @if (method.note) {
                  <p class="contact-method-card__note">{{ method.note }}</p>
                }
              </div>

              <a
                class="btn btn--primary button-link contact-action contact-action--primary contact-method-card__action"
                [href]="method.actionUrl"
                [attr.target]="isExternalUrl(method) ? '_blank' : null"
                [attr.rel]="isExternalUrl(method) ? 'noopener noreferrer' : null"
                [attr.aria-label]="getContactActionLabel(method)"
              >
                {{ method.actionLabel }}
              </a>
            </article>
          }
        </div>
      </section>

      <section class="contact-section" aria-labelledby="availability-title">
        <div class="contact-section__header">
          <p class="contact-section__eyebrow">{{ text().availabilityEyebrow }}</p>
          <h2 id="availability-title">{{ text().availabilityTitle }}</h2>
          <p>{{ text().availabilityIntro }}</p>
        </div>

        <ul class="contact-badge-list" [attr.aria-label]="text().availabilityAria">
          @for (item of professionalAvailability(); track item.id) {
            <li>{{ item.label }}</li>
          }
        </ul>
      </section>

      <section class="contact-section" aria-labelledby="technical-interests-title">
        <div class="contact-section__header">
          <p class="contact-section__eyebrow">{{ text().interestsEyebrow }}</p>
          <h2 id="technical-interests-title">{{ text().interestsTitle }}</h2>
          <p>{{ text().interestsIntro }}</p>
        </div>

        <ul class="contact-badge-list" [attr.aria-label]="text().interestsAria">
          @for (topic of technicalInterests(); track topic.id) {
            <li>{{ topic.label }}</li>
          }
        </ul>
      </section>

      <section class="contact-section contact-final-cta" aria-labelledby="contact-final-cta-title">
        <div class="contact-final-cta__content">
          <p class="contact-section__eyebrow">{{ text().ctaEyebrow }}</p>
          <h2 id="contact-final-cta-title">{{ text().ctaTitle }}</h2>
          <p>{{ text().ctaIntro }}</p>
          <p>{{ text().ctaDetail }}</p>
        </div>

        <nav class="contact-final-cta__actions" [attr.aria-label]="text().ctaAria">
          @for (method of contactMethods(); track method.id) {
            <a
              class="btn btn--primary button-link contact-action contact-action--primary"
              [href]="method.actionUrl"
              [attr.target]="isExternalUrl(method) ? '_blank' : null"
              [attr.rel]="isExternalUrl(method) ? 'noopener noreferrer' : null"
              [attr.aria-label]="getContactActionLabel(method)"
            >
              {{ method.actionLabel }}
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

      .contact-section {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .contact-hero {
        padding-top: 4rem;
      }

      .contact-section__header,
      .contact-final-cta__content {
        max-width: 54rem;
      }

      .contact-section__header {
        margin-bottom: 1.5rem;
      }

      .contact-section__eyebrow {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .contact-section h1,
      .contact-section h2,
      .contact-method-card h3 {
        margin: 0;
      }

      .contact-hero__subtitle {
        max-width: 46rem;
        font-size: 1.2rem;
      }

      .contact-hero__intro {
        max-width: 48rem;
      }

      .contact-method-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
      }

      .contact-method-card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.25rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.85rem;
        background: color-mix(in srgb, var(--app-background-color) 94%, var(--app-text-color) 6%);
      }

      .contact-method-card__icon {
        position: relative;
        display: grid;
        width: 3rem;
        height: 3rem;
        place-items: center;
        overflow: hidden;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        color: var(--app-link-color);
        font-weight: 700;
      }

      .contact-method-card__icon-image {
        position: absolute;
        inset: 0.65rem;
        width: calc(100% - 1.3rem);
        height: calc(100% - 1.3rem);
        object-fit: contain;
      }

      .contact-method-card__content {
        flex: 1;
      }

      .contact-method-card__value {
        margin-bottom: 0;
        color: var(--app-link-color);
        font-weight: 700;
        overflow-wrap: anywhere;
      }

      .contact-method-card__note {
        font-size: 0.95rem;
      }

      .contact-method-card .contact-method-card__action {
        align-self: center;
        width: 75%;
        max-width: 320px;
      }

      .contact-action {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        min-height: 2.75rem;
        padding: 0.75rem 1rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        color: var(--app-text-color);
        font-weight: 700;
        text-decoration: none;
      }

      .contact-action--primary {
        border-color: var(--app-link-color);
        color: var(--app-background-color);
        background: var(--app-link-color);
      }

      .contact-action:focus-visible {
        outline: 3px solid var(--app-link-color);
        outline-offset: 3px;
      }

      .contact-badge-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .contact-badge-list li {
        padding: 0.75rem 1rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        background: color-mix(in srgb, var(--app-background-color) 96%, var(--app-text-color) 4%);
        font-weight: 700;
      }

      .contact-final-cta {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        justify-content: space-between;
      }

      .contact-final-cta__actions {
        display: flex;
        flex: 0 0 auto;
        flex-wrap: wrap;
        gap: 0.75rem;
        justify-content: flex-end;
      }

      @media (max-width: 900px) {
        .contact-method-grid {
          grid-template-columns: 1fr;
        }

        .contact-final-cta {
          align-items: flex-start;
          flex-direction: column;
        }

        .contact-final-cta__actions {
          justify-content: flex-start;
        }
      }

      @media (max-width: 600px) {
        .contact-section {
          padding: 2.5rem 1rem;
        }

        .contact-hero {
          padding-top: 3rem;
        }

        .contact-action {
          width: 100%;
        }

        .contact-final-cta__actions {
          width: 100%;
          flex-direction: column;
        }
      }
    `,
  ],
})
export class Contact {
  private readonly languageService = inject(LanguageService);

  protected readonly text = computed(() => this.languageService.uiText().pages.contact);
  private readonly failedIconIds = signal<ReadonlySet<string>>(new Set());

  protected hasIconFailed(methodId: string): boolean {
    return this.failedIconIds().has(methodId);
  }

  protected markIconFailed(methodId: string): void {
    this.failedIconIds.update((failedIds) => new Set(failedIds).add(methodId));
  }

  protected readonly contactMethods = computed(() =>
    getLocalizedData(PROFESSIONAL_CONTACT_METHODS, this.languageService.currentLanguage()),
  );
  protected readonly professionalAvailability = computed(() =>
    getLocalizedData(PROFESSIONAL_AVAILABILITY, this.languageService.currentLanguage()),
  );
  protected readonly technicalInterests = computed(() =>
    getLocalizedData(TECHNICAL_INTERESTS, this.languageService.currentLanguage()),
  );

  protected isExternalUrl(method: ContactMethod): boolean {
    return method.actionUrl.startsWith('https://');
  }

  protected getContactActionLabel(method: ContactMethod): string {
    if (this.isExternalUrl(method)) {
      return `${method.actionLabel} ${method.title} ${this.text().actionExternalSuffix}`;
    }

    return `${method.actionLabel} ${this.text().actionTo} ${method.value}`;
  }

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
