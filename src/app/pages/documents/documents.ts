import { Component, computed, inject } from '@angular/core';

import { DOCUMENT_GROUPS } from '../../data/documents.data';
import { getLocalizedData } from '../../data/localized-data';
import { LanguageService } from '../../core/services/language.service';
import { DocumentGroupSection, ProfessionalDocument } from '../../models/document.model';

@Component({
  selector: 'app-documents',
  standalone: true,
  template: `
    <main class="documents-page" aria-labelledby="documents-page-title">
      <section class="documents-section documents-hero" aria-labelledby="documents-page-title">
        <div class="documents-section__header">
          <p class="documents-section__eyebrow">{{ text().eyebrow }}</p>
          <h1 id="documents-page-title">{{ text().title }}</h1>
          <p class="documents-hero__summary">{{ text().summary }}</p>
        </div>
      </section>

      @for (group of documentGroups(); track group.id) {
        <section class="documents-section" [attr.aria-labelledby]="group.id + '-title'">
          <div class="documents-section__header">
            <p class="documents-section__eyebrow">{{ group.title }}</p>
            <h2 [id]="group.id + '-title'">{{ group.title }}</h2>
            <p>{{ group.intro }}</p>
          </div>

          <div class="document-grid" [attr.aria-label]="group.title + ' document cards'">
            @for (document of group.documents; track document.id) {
              <article class="document-card" [attr.aria-labelledby]="document.id + '-title'">
                <div class="document-card__header">
                  <div class="document-card__title-group">
                    <span class="document-card__icon" aria-hidden="true">
                      <span>{{ document.type.slice(0, 2).toUpperCase() }}</span>
                      @if (document.iconUrl) {
                        <img
                          class="document-card__icon-image"
                          [src]="document.iconUrl"
                          [alt]="''"
                          (error)="hideFailedAsset($event)"
                        />
                      }
                    </span>
                    <div>
                      <p class="document-card__type">{{ document.type }}</p>
                      <h3 [id]="document.id + '-title'">{{ document.title }}</h3>
                    </div>
                  </div>
                  <span class="document-card__status">{{ document.statusLabel }}</span>
                </div>

                <p class="document-card__description">{{ document.description }}</p>

                <dl class="document-meta" [attr.aria-label]="text().detailsAria">
                  <div>
                    <dt>{{ text().language }}</dt>
                    <dd>{{ document.language }}</dd>
                  </div>
                  <div>
                    <dt>{{ text().group }}</dt>
                    <dd>{{ document.group }}</dd>
                  </div>
                </dl>

                @if (document.note) {
                  <p class="document-card__note">{{ document.note }}</p>
                }

                <div class="document-actions" [attr.aria-label]="text().actionsAria">
                  <a
                    class="document-action document-action--primary"
                    [href]="document.filePath"
                    target="_blank"
                    rel="noopener noreferrer"
                    [attr.aria-label]="document.viewLabel + ' ' + uiCommon().inNewTab"
                  >
                    <img
                      class="document-action__icon"
                      [src]="viewActionIconUrl"
                      [alt]="''"
                      aria-hidden="true"
                      (error)="hideFailedAsset($event)"
                    />
                    {{ text().viewOnline }}
                  </a>
                  <a
                    class="document-action"
                    [href]="document.filePath"
                    [attr.download]="downloadFileName(document)"
                    [attr.aria-label]="document.downloadLabel"
                  >
                    <img
                      class="document-action__icon"
                      [src]="downloadActionIconUrl"
                      [alt]="''"
                      aria-hidden="true"
                      (error)="hideFailedAsset($event)"
                    />
                    {{ text().downloadPdf }}
                  </a>
                  <button
                    class="document-action"
                    type="button"
                    (click)="openForPrint(document)"
                    [attr.aria-label]="document.printLabel + ' ' + uiCommon().inNewTab"
                  >
                    <img
                      class="document-action__icon"
                      [src]="printActionIconUrl"
                      [alt]="''"
                      aria-hidden="true"
                      (error)="hideFailedAsset($event)"
                    />
                    {{ text().print }}
                  </button>
                </div>
              </article>
            }
          </div>
        </section>
      }

      <section class="documents-section documents-note" aria-labelledby="documents-note-title">
        <h2 id="documents-note-title">{{ text().noteTitle }}</h2>
        <p>{{ text().noteBody }}</p>
      </section>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .documents-section {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .documents-hero {
        padding-top: 4rem;
      }

      .documents-section__header {
        max-width: 54rem;
        margin-bottom: 1.5rem;
      }

      .documents-section__eyebrow,
      .document-card__type {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .documents-section h1,
      .documents-section h2,
      .document-card h3 {
        margin: 0;
      }

      .documents-hero__summary {
        font-size: 1.15rem;
      }

      .document-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
      }

      .document-card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.25rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.85rem;
        background: color-mix(in srgb, var(--app-background-color) 92%, var(--app-text-color) 8%);
      }

      .document-card__header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1rem;
      }

      .document-card__title-group {
        display: flex;
        gap: 0.85rem;
        align-items: flex-start;
      }

      .document-card__icon {
        position: relative;
        display: inline-grid;
        flex: 0 0 auto;
        width: 3rem;
        height: 3rem;
        place-items: center;
        overflow: hidden;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        color: var(--app-link-color);
        font-weight: 700;
      }

      .document-card__icon-image {
        position: absolute;
        inset: 0.65rem;
        width: calc(100% - 1.3rem);
        height: calc(100% - 1.3rem);
        object-fit: contain;
      }

      .document-card__status {
        flex: 0 0 auto;
        padding: 0.25rem 0.55rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        font-size: 0.85rem;
      }

      .document-card__description,
      .document-card__note,
      .documents-note p {
        margin: 0;
      }

      .document-card__note {
        padding: 0.75rem;
        border-left: 3px solid var(--app-link-color);
        background: color-mix(in srgb, var(--app-link-color) 10%, transparent);
      }

      .document-meta {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.75rem;
        margin: 0;
      }

      .document-meta div {
        display: grid;
        gap: 0.15rem;
      }

      .document-meta dt {
        color: var(--app-link-color);
        font-size: 0.85rem;
        font-weight: 700;
      }

      .document-meta dd {
        margin: 0;
      }

      .document-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: auto;
      }

      .document-action {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        min-height: 2.6rem;
        padding: 0.6rem 0.9rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        color: inherit;
        background: transparent;
        text-decoration: none;
        cursor: pointer;
      }

      .document-action--primary {
        border-color: var(--app-link-color);
        color: var(--app-link-color);
        font-weight: 700;
      }

      .document-action__icon {
        width: 1rem;
        height: 1rem;
      }

      .document-action:hover,
      .document-action:focus-visible {
        border-color: var(--app-link-color);
        outline: 2px solid transparent;
      }

      .documents-note {
        margin-bottom: 2rem;
      }

      @media (max-width: 760px) {
        .documents-section {
          padding: 2.25rem 1rem;
        }

        .document-grid,
        .document-meta {
          grid-template-columns: 1fr;
        }

        .document-card__header {
          flex-direction: column;
        }

        .document-actions {
          flex-direction: column;
        }

        .document-action {
          width: 100%;
        }
      }
    `,
  ],
})
export class Documents {
  private readonly languageService = inject(LanguageService);

  protected readonly text = computed(() => this.languageService.uiText().pages.documents);
  protected readonly uiCommon = computed(() => this.languageService.uiText().common);

  readonly documentGroups = computed(() =>
    getLocalizedData(DOCUMENT_GROUPS, this.languageService.currentLanguage()),
  );
  protected readonly viewActionIconUrl = 'assets/images/icons/actions/open-external.svg';
  protected readonly downloadActionIconUrl = 'assets/images/icons/actions/download.svg';
  protected readonly printActionIconUrl = 'assets/images/icons/actions/print.svg';

  downloadFileName(document: ProfessionalDocument): string {
    return document.filePath.split('/').pop() ?? `${document.id}.pdf`;
  }

  openForPrint(document: ProfessionalDocument): void {
    window.open(document.filePath, '_blank', 'noopener,noreferrer');
  }

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
