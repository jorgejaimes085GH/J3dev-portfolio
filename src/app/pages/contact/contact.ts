import { Component, computed, inject, signal } from '@angular/core';

import {
  CONTACT_HERO_IMAGE_URL,
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
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly languageService = inject(LanguageService);

  protected readonly heroImageUrl = CONTACT_HERO_IMAGE_URL;
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
