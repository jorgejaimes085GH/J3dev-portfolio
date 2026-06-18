import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  computed,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../../core/services/language.service';
import { HeroSlide } from '../../../models/hero-slide.model';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section
      class="hero-slider"
      [attr.aria-label]="heroText().overviewAria"
      (mouseenter)="pauseAutoPlay()"
      (mouseleave)="resumeAutoPlay()"
      (focusin)="pauseAutoPlay()"
      (focusout)="resumeAutoPlay()"
    >
      @if (currentSlide; as slide) {
        @if (shouldShowBackground(slide)) {
          <img
            class="hero-slider__background-image"
            [src]="slide.backgroundImageUrl"
            alt=""
            aria-hidden="true"
            (error)="hideFailedAsset(slide)"
          />
        }
        <div class="hero-slider__motion-layer" aria-hidden="true">
          <span class="hero-slider__motion-orb hero-slider__motion-orb--primary"></span>
          <span class="hero-slider__motion-orb hero-slider__motion-orb--secondary"></span>
          <span class="hero-slider__motion-line hero-slider__motion-line--one"></span>
          <span class="hero-slider__motion-line hero-slider__motion-line--two"></span>
        </div>
        <div class="hero-slider__content" [attr.aria-live]="isAutoPlaying ? 'off' : 'polite'">
          <div class="hero-slider__copy">
            <p class="hero-slider__eyebrow">{{ slide.eyebrow }}</p>
            <h1>{{ slide.title }}</h1>
            <p class="hero-slider__subtitle">{{ slide.subtitle }}</p>
            <p class="hero-slider__description">{{ slide.description }}</p>

            <div class="hero-slider__actions" [attr.aria-label]="heroText().actionsAria">
              <a
                class="btn btn--primary hero-slider__cta hero-slider__cta--primary"
                [routerLink]="slide.primaryActionRoute"
              >
                {{ slide.primaryActionLabel }}
              </a>
              <a
                class="btn btn--secondary hero-slider__cta hero-slider__cta--secondary"
                [routerLink]="slide.secondaryActionRoute"
              >
                {{ slide.secondaryActionLabel }}
              </a>
            </div>
          </div>

          <div class="hero-slider__visual" [attr.aria-label]="heroText().visualAria">
            @if (shouldShowBackground(slide)) {
              <img
                class="hero-slider__image"
                [src]="slide.backgroundImageUrl"
                [alt]="slide.visualLabel || slide.title"
                (error)="hideFailedAsset(slide)"
              />
            } @else {
              <div class="hero-slider__placeholder" aria-hidden="true">
                @if (slide.visualLabel || heroText().placeholder) {
                  <span>{{ slide.visualLabel || heroText().placeholder }}</span>
                }
              </div>
              @if (slide.visualLabel || heroText().caption) {
                <div class="hero-slider__visual-caption">
                  <span>{{ slide.visualLabel || heroText().caption }}</span>
                </div>
              }
            }
          </div>
        </div>

        <div class="hero-slider__navigation" [attr.aria-label]="heroText().navigationAria">
          <button
            type="button"
            class="hero-slider__control"
            (click)="showPrevious(true)"
            [attr.aria-label]="uiText().common.previous"
          >
            {{ uiText().common.previous }}
          </button>

          <div class="hero-slider__indicators" [attr.aria-label]="heroText().indicatorsAria">
            @for (heroSlide of slides; track heroSlide.id; let index = $index) {
              <button
                type="button"
                class="hero-slider__indicator"
                [class.hero-slider__indicator--active]="index === currentIndex"
                [attr.aria-label]="heroText().showSlidePrefix + ' ' + (index + 1)"
                [attr.aria-current]="index === currentIndex ? 'true' : null"
                (click)="showSlide(index, true)"
              >
                <span>{{ index + 1 }}</span>
              </button>
            }
          </div>

          <button
            type="button"
            class="hero-slider__control"
            (click)="showNext(true)"
            [attr.aria-label]="uiText().common.next"
          >
            {{ uiText().common.next }}
          </button>
        </div>
      } @else {
        <div class="hero-slider__empty" role="status">{{ heroText().empty }}</div>
      }
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .hero-slider {
        min-height: min(720px, calc(100vh - 6rem));
        padding: 4rem 1.5rem;
        border-bottom: 1px solid var(--app-border-color);
        background:
          radial-gradient(
            circle at 18% 18%,
            color-mix(in srgb, var(--app-link-color) 12%, transparent),
            transparent 28rem
          ),
          var(--app-background-color);
      }

      .hero-slider__content {
        display: grid;
        grid-template-columns: minmax(0, 1.3fr) minmax(16rem, 0.7fr);
        gap: 2rem;
        align-items: center;
        max-width: 1120px;
        min-height: 26rem;
        margin: 0 auto;
      }

      .hero-slider__copy {
        max-width: 46rem;
      }

      .hero-slider__eyebrow {
        margin: 0 0 0.75rem;
        color: var(--app-link-color);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .hero-slider h1 {
        margin: 0;
      }

      .hero-slider__subtitle {
        margin: 1.25rem 0 0;
        font-size: clamp(1.125rem, 2vw, 1.5rem);
        font-weight: 700;
      }

      .hero-slider__description {
        margin: 1rem 0 0;
        max-width: 40rem;
      }

      .hero-slider__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 2rem;
      }

      .hero-slider__cta {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.75rem;
        padding: 0.7rem 1rem;
        border: 1px solid var(--app-border-color);
        border-radius: 0.5rem;
        text-decoration: none;
      }

      .hero-slider__cta--primary {
        color: var(--app-background-color);
        background: var(--app-link-color);
        border-color: var(--app-link-color);
      }

      .hero-slider__visual {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 18rem;
        overflow: hidden;
        padding: 1.5rem;
        border: 1px solid var(--app-border-color);
        border-radius: 1rem;
        background:
          linear-gradient(
            135deg,
            color-mix(in srgb, var(--app-link-color) 14%, transparent),
            transparent 52%
          ),
          color-mix(in srgb, var(--app-background-color) 92%, var(--app-link-color));
        text-align: center;
        isolation: isolate;
      }

      .hero-slider__placeholder {
        position: relative;
        z-index: 1;
        display: grid;
        width: min(100%, 18rem);
        min-height: 10rem;
        place-items: center;
        padding: 1.5rem;
        border: 1px dashed var(--app-border-color);
        border-radius: 0.75rem;
        color: var(--app-text-color);
        background: color-mix(in srgb, var(--app-background-color) 78%, transparent);
      }

      .hero-slider__image {
        z-index: 2;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.86;
        transform: scale(1.01);
        transition:
          opacity 320ms ease,
          transform 700ms ease;
      }

      .hero-slider__visual::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 3;
        background:
          linear-gradient(
            90deg,
            color-mix(in srgb, var(--app-background-color) 72%, transparent),
            transparent 58%
          ),
          linear-gradient(
            180deg,
            transparent,
            color-mix(in srgb, var(--app-background-color) 42%, transparent)
          );
        pointer-events: none;
      }

      .hero-slider__visual-caption {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        left: 1rem;
        z-index: 4;
        padding: 0.6rem 0.75rem;
        border: 1px solid color-mix(in srgb, var(--app-border-color) 72%, transparent);
        border-radius: 0.75rem;
        color: var(--app-text-color);
        background: color-mix(in srgb, var(--app-background-color) 86%, transparent);
        backdrop-filter: blur(8px);
        font-size: 0.9rem;
        font-weight: 700;
      }

      .hero-slider__navigation {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        max-width: 1120px;
        margin: 2rem auto 0;
      }

      .hero-slider__control,
      .hero-slider__indicator {
        color: var(--app-text-color);
        background: transparent;
        border: 1px solid var(--app-border-color);
        cursor: pointer;
      }

      .hero-slider__control {
        min-height: 2.5rem;
        padding: 0.5rem 0.9rem;
        border-radius: 0.5rem;
      }

      .hero-slider__indicators {
        display: flex;
        gap: 0.5rem;
      }

      .hero-slider__indicator {
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 999px;
      }

      .hero-slider__control:hover,
      .hero-slider__control:focus-visible,
      .hero-slider__indicator:hover,
      .hero-slider__indicator:focus-visible {
        border-color: var(--app-link-color);
        outline: 2px solid color-mix(in srgb, var(--app-link-color) 38%, transparent);
        outline-offset: 2px;
      }

      .hero-slider__indicator--active {
        color: var(--app-background-color);
        background: var(--app-link-color);
        border-color: var(--app-link-color);
      }

      .hero-slider__empty {
        max-width: 1120px;
        margin: 0 auto;
      }

      @media (max-width: 760px) {
        .hero-slider {
          padding: 3rem 1rem;
        }

        .hero-slider__content {
          grid-template-columns: 1fr;
          min-height: auto;
        }

        .hero-slider__visual {
          min-height: 14rem;
        }

        .hero-slider__visual-caption {
          right: 0.75rem;
          bottom: 0.75rem;
          left: 0.75rem;
        }
      }
    `,
  ],
})
export class HeroSlider implements OnChanges, OnDestroy {
  private readonly languageService = inject(LanguageService);

  @Input() slides: readonly HeroSlide[] = [];

  readonly uiText = this.languageService.uiText;
  protected readonly heroText = computed(() => this.languageService.uiText().pages.hero);

  currentIndex = 0;
  isAutoPlaying = false;

  private readonly autoPlayDelay = 6500;
  private autoPlayTimer: ReturnType<typeof setInterval> | null = null;
  private readonly failedBackgrounds = new Set<string>();

  get currentSlide(): HeroSlide | undefined {
    return this.slides[this.currentIndex];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('slides' in changes) {
      this.currentIndex =
        this.slides.length > 0 ? Math.min(this.currentIndex, this.slides.length - 1) : 0;
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  showPrevious(userInitiated = false): void {
    if (this.slides.length === 0) {
      return;
    }

    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.handleUserInteraction(userInitiated);
  }

  showNext(userInitiated = false): void {
    if (this.slides.length === 0) {
      return;
    }

    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.handleUserInteraction(userInitiated);
  }

  showSlide(index: number, userInitiated = false): void {
    if (index < 0 || index >= this.slides.length) {
      return;
    }

    this.currentIndex = index;
    this.handleUserInteraction(userInitiated);
  }

  pauseAutoPlay(): void {
    this.stopAutoPlay();
  }

  resumeAutoPlay(): void {
    this.startAutoPlay();
  }

  shouldShowBackground(slide: HeroSlide): boolean {
    return Boolean(
      slide.backgroundImageUrl && !this.failedBackgrounds.has(slide.backgroundImageUrl),
    );
  }

  hideFailedAsset(slide: HeroSlide): void {
    if (slide.backgroundImageUrl) {
      this.failedBackgrounds.add(slide.backgroundImageUrl);
    }
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();

    if (this.slides.length <= 1) {
      return;
    }

    this.isAutoPlaying = true;
    this.autoPlayTimer = setInterval(() => this.showNext(), this.autoPlayDelay);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }

    this.isAutoPlaying = false;
  }

  private handleUserInteraction(userInitiated: boolean): void {
    if (userInitiated) {
      this.stopAutoPlay();
    }
  }
}
