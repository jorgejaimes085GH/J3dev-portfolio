import { Component, computed, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { PROJECTS } from '../../../data/projects.data';
import { getLocalizedData } from '../../../data/localized-data';
import { LanguageService } from '../../../core/services/language.service';
import { Project } from '../../../models/project.model';
import { getProjectStatusDisplay } from '../project-status.util';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="project-detail-page" aria-labelledby="project-detail-title">
      <nav class="project-detail-nav" [attr.aria-label]="text().navAria">
        <a
          class="btn btn--secondary btn--compact button-link button-link--compact"
          routerLink="/projects"
          >{{ text().back }}</a
        >
      </nav>

      @if (project(); as selectedProject) {
        <section class="project-detail-hero" aria-labelledby="project-detail-title">
          <div class="project-detail-hero__content">
            <p class="project-detail-page__eyebrow">{{ text().detailEyebrow }}</p>
            <h1 id="project-detail-title">{{ selectedProject.title }}</h1>
            <div class="project-detail-status" [attr.aria-label]="selectedProject.typeStatus">
              <p class="project-detail-status__category">
                {{ projectStatus(selectedProject).category }}
              </p>
              <div class="project-detail-status__lines">
                @for (line of projectStatus(selectedProject).lines; track line) {
                  <span>{{ line }}</span>
                }
              </div>
            </div>
            <p class="project-detail-summary">{{ selectedProject.shortDescription }}</p>
          </div>

          <div
            class="project-detail-visual"
            role="img"
            [attr.aria-label]="selectedProject.visualLabel"
          >
            <span aria-hidden="true">{{ selectedProject.title.slice(0, 2).toUpperCase() }}</span>
            <p>{{ selectedProject.visualLabel }}</p>
            @if (selectedProject.overviewImageUrl) {
              <img
                class="project-detail-visual__image"
                [src]="selectedProject.overviewImageUrl"
                [alt]="selectedProject.title + ' ' + text().visualAltSuffix"
                (error)="hideFailedAsset($event)"
              />
            }
            @if (selectedProject.logoUrl) {
              <img
                class="project-detail-visual__logo"
                [src]="selectedProject.logoUrl"
                [alt]="selectedProject.title + ' ' + text().logoAltSuffix"
                (error)="hideFailedAsset($event)"
              />
            }
          </div>
        </section>

        <section class="project-detail-section" aria-labelledby="project-context-title">
          <div class="project-detail-section__header">
            <p class="project-detail-page__eyebrow">{{ text().contextEyebrow }}</p>
            <h2 id="project-context-title">{{ text().contextTitle }}</h2>
          </div>

          <ul class="project-detail-list">
            @for (contextItem of selectedProject.context; track contextItem) {
              <li>{{ contextItem }}</li>
            }
          </ul>
        </section>

        <section class="project-detail-section" aria-labelledby="project-architecture-title">
          <div class="project-detail-section__header">
            <p class="project-detail-page__eyebrow">{{ text().architectureEyebrow }}</p>
            <h2 id="project-architecture-title">{{ text().architectureTitle }}</h2>
          </div>

          <ul class="project-detail-list">
            @for (architectureNote of selectedProject.architectureNotes; track architectureNote) {
              <li>{{ architectureNote }}</li>
            }
          </ul>
        </section>

        <section class="project-detail-section" aria-labelledby="project-technologies-title">
          <div class="project-detail-section__header">
            <p class="project-detail-page__eyebrow">{{ text().stackEyebrow }}</p>
            <h2 id="project-technologies-title">{{ text().stackTitle }}</h2>
          </div>

          <div class="project-detail-badges" [attr.aria-label]="text().technologiesAria">
            @for (technology of selectedProject.technologies; track technology) {
              <span class="project-detail-badge">{{ technology }}</span>
            }
          </div>
        </section>

        <section class="project-detail-section" aria-labelledby="project-time-title">
          <div class="project-detail-section__header">
            <p class="project-detail-page__eyebrow">{{ text().timeEyebrow }}</p>
            <h2 id="project-time-title">{{ text().timeTitle }}</h2>
            <p>{{ text().timeIntro }}</p>
          </div>

          <div class="project-time-grid">
            @for (timeBlock of selectedProject.timeBlocks; track timeBlock.label) {
              <article class="project-time-card">
                <h3>{{ timeBlock.label }}</h3>
                <p class="project-time-card__duration">{{ timeBlock.duration }}</p>
                @if (timeBlock.note) {
                  <p>{{ timeBlock.note }}</p>
                }
              </article>
            }
          </div>
        </section>

        <section class="project-detail-section" aria-labelledby="project-links-title">
          <div class="project-detail-section__header">
            <p class="project-detail-page__eyebrow">{{ text().linksEyebrow }}</p>
            <h2 id="project-links-title">{{ text().linksTitle }}</h2>
          </div>

          @if (selectedProject.links?.length) {
            <div class="project-link-list">
              @for (
                projectLink of selectedProject.links;
                track projectLink.type + projectLink.label
              ) {
                <article class="project-link-card">
                  <p class="project-link-card__type">
                    {{ projectLink.typeLabel || projectLink.type }}
                  </p>
                  <h3>{{ projectLink.label }}</h3>
                  @if (projectLink.description) {
                    <p class="project-link-card__description">{{ projectLink.description }}</p>
                  }

                  @if (projectLink.url && !projectLink.isPlaceholder) {
                    <a
                      class="btn btn--secondary btn--compact button-link button-link--compact"
                      [href]="projectLink.url"
                      [attr.target]="projectLink.isExternal ? '_blank' : null"
                      [attr.rel]="projectLink.isExternal ? 'noopener noreferrer' : null"
                    >
                      {{ projectLink.actionLabel || defaultActionLabel(projectLink.type) }}
                    </a>
                  } @else if (projectLink.embedUrl) {
                    <div class="project-link-card__embed" [attr.aria-label]="projectLink.label">
                      <iframe
                        [src]="safeEmbedUrl(projectLink.embedUrl)"
                        [title]="projectLink.label"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    @if (projectLink.supportText) {
                      <p class="project-link-card__support-text">{{ projectLink.supportText }}</p>
                    }
                  } @else if (projectLink.videoSrc) {
                    @if (!isFailedVideo(projectLink.videoSrc)) {
                      <video
                        class="project-link-card__video"
                        controls
                        preload="metadata"
                        [attr.aria-label]="projectLink.label"
                        (error)="markFailedVideo(projectLink.videoSrc)"
                      >
                        <source [src]="projectLink.videoSrc" type="video/mp4" />
                      </video>
                    }
                    @if (isFailedVideo(projectLink.videoSrc)) {
                      <p
                        class="project-link-card__placeholder project-link-card__placeholder--video"
                      >
                        {{ projectLink.placeholderMessage || text().defaultPlaceholder }}
                      </p>
                    }
                  } @else {
                    <p class="project-link-card__placeholder">
                      {{ projectLink.placeholderMessage || text().defaultPlaceholder }}
                    </p>
                  }
                </article>
              }
            </div>
          } @else {
            <p class="project-detail-note">{{ text().noLinks }}</p>
          }
        </section>

        @if (selectedProject.referencePlaceholders; as referencePlaceholders) {
          <section class="project-detail-section" aria-labelledby="project-reference-title">
            <div class="project-detail-section__header">
              <p class="project-detail-page__eyebrow">{{ text().referenceEyebrow }}</p>
              <h2 id="project-reference-title">{{ text().referenceTitle }}</h2>
            </div>

            <dl class="project-reference-list">
              <div>
                <dt>{{ text().companyName }}</dt>
                <dd>{{ referencePlaceholders.companyName }}</dd>
              </div>
              <div>
                <dt>{{ text().address }}</dt>
                <dd>{{ referencePlaceholders.companyAddress }}</dd>
              </div>
              <div>
                <dt>{{ text().phone }}</dt>
                <dd>{{ referencePlaceholders.companyPhone }}</dd>
              </div>
            </dl>
          </section>
        }

        <nav
          class="project-detail-nav project-detail-nav--bottom"
          [attr.aria-label]="text().navAria"
        >
          <a
            class="btn btn--secondary btn--compact button-link button-link--compact"
            routerLink="/projects"
            >{{ text().back }}</a
          >
        </nav>
      } @else {
        <section
          class="project-detail-section project-not-found"
          aria-labelledby="project-detail-title"
        >
          <p class="project-detail-page__eyebrow">{{ text().detailEyebrow }}</p>
          <h1 id="project-detail-title">{{ text().notFoundTitle }}</h1>
          <p>{{ text().notFoundBody }}</p>
          <a
            class="btn btn--secondary btn--compact button-link button-link--compact project-not-found__link"
            routerLink="/projects"
            >{{ text().back }}</a
          >
        </section>
      }
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .project-detail-page {
        width: 100%;
      }

      .project-detail-nav,
      .project-detail-hero,
      .project-detail-section {
        max-width: 1120px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
      }

      .project-detail-nav {
        padding-top: 2rem;
        padding-bottom: 1rem;
        border-bottom: 0;
      }

      .project-detail-nav--bottom {
        padding-top: 1.5rem;
        padding-bottom: 3rem;
      }

      .button-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.75rem;
        padding: 0.7rem 1rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.5rem;
        color: var(--app-link-color);
        background: transparent;
        font-weight: 700;
        text-align: center;
        text-decoration: none;
      }

      .button-link--compact {
        min-height: 2.25rem;
        padding: 0.5rem 0.75rem;
        font-size: 0.92rem;
        line-height: 1.2;
      }

      .project-link-card .button-link--compact {
        align-self: center;
        min-height: 40px;
        margin-top: 1.25rem;
        padding-right: 1.25rem;
        padding-left: 1.25rem;
      }

      .project-detail-hero {
        display: grid;
        grid-template-columns: minmax(0, 1.3fr) minmax(18rem, 0.7fr);
        gap: 2rem;
        align-items: stretch;
        padding-top: 2rem;
      }

      .project-detail-hero__content,
      .project-detail-section__header {
        max-width: 52rem;
      }

      .project-detail-page__eyebrow,
      .project-detail-status,
      .project-link-card__type {
        margin: 0 0 0.5rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .project-detail-status,
      .project-link-card__type {
        font-size: 0.85rem;
      }

      .project-detail-status {
        display: grid;
        gap: 0.25rem;
      }

      .project-detail-status__category {
        margin: 0;
      }

      .project-detail-status__lines {
        display: grid;
        gap: 0.1rem;
        color: var(--app-muted-color);
        font-size: 0.95rem;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.35;
        text-transform: none;
      }

      .project-detail-hero h1,
      .project-detail-section h1,
      .project-detail-section h2,
      .project-time-card h3,
      .project-link-card h3 {
        margin: 0;
      }

      .project-detail-summary {
        max-width: 56rem;
        font-size: 1.15rem;
      }

      .project-detail-visual {
        position: relative;
        display: grid;
        min-height: 18rem;
        align-content: center;
        justify-items: center;
        gap: 1rem;
        overflow: hidden;
        padding: 1.5rem;
        border: 1px dashed var(--app-border-color);
        border-radius: 0.875rem;
        text-align: center;
      }

      .project-detail-visual span,
      .project-detail-visual p {
        position: relative;
        z-index: 1;
      }

      .project-detail-visual span {
        display: inline-grid;
        width: 5rem;
        height: 5rem;
        place-items: center;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        color: var(--app-link-color);
        font-size: 1.5rem;
        font-weight: 700;
      }

      .project-detail-visual__image {
        z-index: 2;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .project-detail-visual__logo {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        z-index: 3;
        width: 4rem;
        max-height: 4rem;
        object-fit: contain;
      }

      .project-detail-list,
      .project-time-grid,
      .project-link-list,
      .project-reference-list {
        margin: 1.5rem 0 0;
      }

      .project-detail-list {
        display: grid;
        gap: 0.75rem;
        padding-left: 1.25rem;
      }

      .project-detail-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1.5rem;
      }

      .project-detail-badge {
        display: inline-flex;
        align-items: center;
        min-height: 2rem;
        padding: 0.35rem 0.65rem;
        border: 1px solid var(--app-border-color);
        border-radius: 999px;
        font-size: 0.9rem;
        line-height: 1.2;
      }

      .project-time-grid,
      .project-link-list,
      .project-reference-list {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
      }

      .project-time-card,
      .project-link-card,
      .project-reference-list div,
      .project-detail-note {
        padding: 1rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.75rem;
      }

      .project-link-card {
        display: flex;
        flex-direction: column;
      }

      .project-link-card__description,
      .project-link-card__support-text {
        margin: 0.75rem 0 0;
      }

      .project-link-card__video,
      .project-link-card__embed {
        width: 100%;
        margin-top: 1.25rem;
        border-radius: 0.75rem;
        background: var(--app-surface-muted);
        aspect-ratio: 16 / 9;
      }

      .project-link-card__embed {
        overflow: hidden;
      }

      .project-link-card__embed iframe {
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
      }

      .project-time-card__duration,
      .project-link-card__placeholder {
        font-weight: 700;
      }

      .project-link-card__placeholder--video {
        display: grid;
        min-height: 9rem;
        margin-top: 1.25rem;
        place-items: center;
        border: 1px dashed var(--app-border-color);
        border-radius: 0.75rem;
        text-align: center;
      }

      .project-reference-list {
        padding: 0;
      }

      .project-reference-list dt {
        color: var(--app-link-color);
        font-weight: 700;
      }

      .project-reference-list dd {
        margin: 0.25rem 0 0;
      }

      .project-not-found {
        padding-top: 4rem;
      }

      @media (max-width: 900px) {
        .project-detail-hero,
        .project-time-grid,
        .project-link-list,
        .project-reference-list {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 640px) {
        .project-detail-nav,
        .project-detail-hero,
        .project-detail-section {
          padding-right: 1rem;
          padding-left: 1rem;
        }
      }
    `,
  ],
})
export class ProjectDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly languageService = inject(LanguageService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly projectId = this.route.snapshot.paramMap.get('projectId');
  private readonly failedVideoSources = new Set<string>();

  protected readonly text = computed(() => this.languageService.uiText().pages.projectDetail);

  protected readonly project = computed(() =>
    getLocalizedData(PROJECTS, this.languageService.currentLanguage()).find(
      (project) => project.slug === this.projectId || project.id === this.projectId,
    ),
  );

  protected safeEmbedUrl(embedUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  protected defaultActionLabel(type: string): string {
    return [this.text().openLinkPrefix, type, this.text().openLinkSuffix].filter(Boolean).join(' ');
  }

  protected isFailedVideo(videoSrc: string): boolean {
    return this.failedVideoSources.has(videoSrc);
  }

  protected markFailedVideo(videoSrc: string): void {
    this.failedVideoSources.add(videoSrc);
  }

  protected projectStatus(project: Project): { category: string; lines: string[] } {
    return getProjectStatusDisplay(project, this.languageService.currentLanguage());
  }

  protected hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
