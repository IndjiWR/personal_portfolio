import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly supportedLanguages = ['en', 'it'];
  currentLang = signal<string>('en');

  constructor(private translate: TranslateService) {
    // Initialize with default language
    this.translate.use('en');

    // Subscribe to language changes to update the signal
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang.set(event.lang);
    });
  }

  getSupportedLanguages(): string[] {
    return this.supportedLanguages;
  }

  switchLanguage(lang: string): void {
    if (this.supportedLanguages.includes(lang)) {
      this.translate.use(lang);
    }
  }

  toggleLanguage(): void {
    const current = this.translate.getCurrentLang() ?? 'en';
    const next = current === 'en' ? 'it' : 'en';
    this.translate.use(next);
  }
}