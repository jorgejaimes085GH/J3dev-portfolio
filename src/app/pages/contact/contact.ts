import { Component } from '@angular/core';

import {
  PROFESSIONAL_AVAILABILITY,
  PROFESSIONAL_CONTACT_METHODS,
  TECHNICAL_INTERESTS,
} from '../../data/contact.data';
import { ContactMethod } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <main class="contact-page" aria-labelledby="contact-page-title">
      <section class="contact-section contact-hero" aria-labelledby="contact-page-title">
        <div class="contact-section__header">
          <p class="contact-section__eyebrow">Professional Communication</p>
          <h1 id="contact-page-title">Let's Connect</h1>
          <p class="contact-hero__subtitle">
            Interested in discussing backend development, software architecture, .NET
            opportunities, or modern fullstack solutions?
          </p>
          <p class="contact-hero__intro">
            Professional communication channels for recruiters, hiring managers, technical leaders,
            and engineering teams.
          </p>
        </div>
      </section>

      <section class="contact-section" aria-labelledby="contact-methods-title">
        <div class="contact-section__header">
          <p class="contact-section__eyebrow">Contact Methods</p>
          <h2 id="contact-methods-title">Professional Contact Methods</h2>
          <p>Choose the channel that best fits your professional conversation or scheduling need.</p>
        </div>

        <div class="contact-method-grid" aria-label="Professional contact method cards">
          @for (method of contactMethods; track method.id) {
            <article class="contact-method-card" [attr.aria-labelledby]="method.id + '-title'">
              <div class="contact-method-card__icon" aria-hidden="true">
                <span>{{ method.title.charAt(0) }}</span>
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
                class="contact-action contact-action--primary"
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
          <p class="contact-section__eyebrow">Availability</p>
          <h2 id="availability-title">Professional Availability</h2>
          <p>
            Jorge is interested in long-term professional growth and meaningful software engineering
            challenges where maintainable systems, practical architecture, and team collaboration
            matter.
          </p>
        </div>

        <ul class="contact-badge-list" aria-label="Professional availability options">
          @for (item of professionalAvailability; track item.id) {
            <li>{{ item.label }}</li>
          }
        </ul>
      </section>

      <section class="contact-section" aria-labelledby="technical-interests-title">
        <div class="contact-section__header">
          <p class="contact-section__eyebrow">Topics I Enjoy Discussing</p>
          <h2 id="technical-interests-title">Technical Interests</h2>
          <p>Topics frequently explored through projects, professional work, and continuous learning.</p>
        </div>

        <ul class="contact-badge-list" aria-label="Technical interest topics">
          @for (topic of technicalInterests; track topic.id) {
            <li>{{ topic.label }}</li>
          }
        </ul>
      </section>

      <section class="contact-section contact-final-cta" aria-labelledby="contact-final-cta-title">
        <div class="contact-final-cta__content">
          <p class="contact-section__eyebrow">Next Conversation</p>
          <h2 id="contact-final-cta-title">Interested in Working Together?</h2>
          <p>
            Feel free to reach out through email, WhatsApp, or LinkedIn.
          </p>
          <p>
            I am always open to discussing engineering opportunities, software architecture, backend
            development, and long-term technology projects.
          </p>
        </div>

        <nav class="contact-final-cta__actions" aria-label="Contact call to action links">
          @for (method of contactMethods; track method.id) {
            <a
              class="contact-action"
              [class.contact-action--primary]="$first"
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
        line-height: 1.15;
      }

      .contact-section h1 {
        font-size: clamp(2.25rem, 6vw, 4.5rem);
      }

      .contact-section h2 {
        font-size: clamp(1.75rem, 4vw, 2.75rem);
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
        display: grid;
        width: 3rem;
        height: 3rem;
        place-items: center;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        color: var(--app-link-color);
        font-weight: 700;
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
        color: var(--app-link-color);
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
  protected readonly contactMethods = PROFESSIONAL_CONTACT_METHODS;
  protected readonly professionalAvailability = PROFESSIONAL_AVAILABILITY;
  protected readonly technicalInterests = TECHNICAL_INTERESTS;

  protected isExternalUrl(method: ContactMethod): boolean {
    return method.actionUrl.startsWith('https://');
  }

  protected getContactActionLabel(method: ContactMethod): string {
    if (this.isExternalUrl(method)) {
      return `${method.actionLabel} for ${method.title} in a new tab`;
    }

    return `${method.actionLabel} to ${method.value}`;
  }
}
