import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HeroSlide } from '../../../models/hero-slide.model';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero-slider" aria-label="Professional overview">
      @if (currentSlide; as slide) {
        <div class="hero-slider__content">
          <div class="hero-slider__copy">
            <p class="hero-slider__eyebrow">{{ slide.eyebrow }}</p>
            <h1>{{ slide.title }}</h1>
            <p class="hero-slider__subtitle">{{ slide.subtitle }}</p>
            <p class="hero-slider__description">{{ slide.description }}</p>

            <div class="hero-slider__actions" aria-label="Hero actions">
              <a
                class="hero-slider__cta hero-slider__cta--primary"
                [routerLink]="slide.primaryActionRoute"
              >
                {{ slide.primaryActionLabel }}
              </a>
              <a
                class="hero-slider__cta hero-slider__cta--secondary"
                [routerLink]="slide.secondaryActionRoute"
              >
                {{ slide.secondaryActionLabel }}
              </a>
            </div>
          </div>

          <div class="hero-slider__visual" aria-label="Slide visual reference">
            <span>{{ slide.visualLabel || 'Hero visual reference pending final asset' }}</span>
            @if (slide.backgroundImageUrl) {
              <img
                class="hero-slider__image"
                [src]="slide.backgroundImageUrl"
                [alt]="slide.visualLabel || slide.title"
                (error)="hideFailedAsset($event)"
              />
            }
          </div>
        </div>

        <div class="hero-slider__navigation" aria-label="Slide navigation">
          <button
            type="button"
            class="hero-slider__control"
            (click)="showPrevious()"
            aria-label="Show previous hero slide"
          >
            Previous
          </button>

          <div class="hero-slider__indicators" aria-label="Hero slide indicators">
            @for (heroSlide of slides; track heroSlide.id; let index = $index) {
              <button
                type="button"
                class="hero-slider__indicator"
                [class.hero-slider__indicator--active]="index === currentIndex"
                [attr.aria-label]="'Show hero slide ' + (index + 1)"
                [attr.aria-current]="index === currentIndex ? 'true' : null"
                (click)="showSlide(index)"
              >
                <span>{{ index + 1 }}</span>
              </button>
            }
          </div>

          <button
            type="button"
            class="hero-slider__control"
            (click)="showNext()"
            aria-label="Show next hero slide"
          >
            Next
          </button>
        </div>
      } @else {
        <div class="hero-slider__empty" role="status">Hero content is being prepared.</div>
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
        border: 1px dashed var(--app-border-color);
        border-radius: 1rem;
        text-align: center;
      }

      .hero-slider__visual span {
        position: relative;
        z-index: 1;
      }

      .hero-slider__image {
        z-index: 2;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
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
      }
    `,
  ],
})
export class HeroSlider {
  @Input() slides: readonly HeroSlide[] = [];

  currentIndex = 0;

  get currentSlide(): HeroSlide | undefined {
    return this.slides[this.currentIndex];
  }

  showPrevious(): void {
    if (this.slides.length === 0) {
      return;
    }

    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  showNext(): void {
    if (this.slides.length === 0) {
      return;
    }

    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  showSlide(index: number): void {
    if (index < 0 || index >= this.slides.length) {
      return;
    }

    this.currentIndex = index;
  }

  hideFailedAsset(event: Event): void {
    (event.target as HTMLImageElement).hidden = true;
  }
}
