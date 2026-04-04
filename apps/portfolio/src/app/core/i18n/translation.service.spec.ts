import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './translation.service';
import { provideTranslateService } from '@ngx-translate/core';

describe('TranslationService', () => {
  let service: TranslationService;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideTranslateService({
          defaultLanguage: 'en',
        }),
      ],
    });
    service = TestBed.inject(TranslationService);
    translateService = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial language as "en"', () => {
    expect(service.currentLang()).toBe('en');
  });

  it('should toggle language from en to it', () => {
    service.toggleLanguage();
    expect(service.currentLang()).toBe('it');
  });

  it('should toggle language back from it to en', () => {
    service.toggleLanguage(); // en -> it
    service.toggleLanguage(); // it -> en
    expect(service.currentLang()).toBe('en');
  });

  it('should switch to specific language', () => {
    service.switchLanguage('it');
    expect(service.currentLang()).toBe('it');
  });

  it('should not switch to unsupported language', () => {
    service.switchLanguage('fr');
    expect(service.currentLang()).toBe('en'); // should remain unchanged
  });

  it('should return supported languages', () => {
    expect(service.getSupportedLanguages()).toEqual(['en', 'it']);
  });

  it('should translate text when language changes', (done) => {
    // Set translations manually for testing
    translateService.setTranslation('en', { toolbar: { projects: 'Projects' } });
    translateService.setTranslation('it', { toolbar: { projects: 'Progetti' } });

    translateService.use('en');
    translateService.get('toolbar.projects').subscribe((text: string) => {
      expect(text).toBe('Projects');
    });

    service.toggleLanguage();

    translateService.get('toolbar.projects').subscribe((text: string) => {
      expect(text).toBe('Progetti');
      done();
    });
  });
});