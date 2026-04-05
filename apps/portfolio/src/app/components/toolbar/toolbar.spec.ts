import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Toolbar } from './toolbar';
import { TranslationService } from '../../core/i18n/translation.service';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { Signal, signal } from '@angular/core';

describe('Toolbar', () => {
  let component: Toolbar;
  let fixture: ComponentFixture<Toolbar>;
  let router: Router;
  let translationServiceMock: { toggleLanguage: jest.Mock; currentLang: Signal<string> };

  beforeEach(async () => {
    const currentLangSignal = signal('en');

    translationServiceMock = {
      toggleLanguage: jest.fn(),
      currentLang: currentLangSignal,
    };

    await TestBed.configureTestingModule({
      imports: [Toolbar, TranslateModule.forRoot()],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        { provide: TranslationService, useValue: translationServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Toolbar);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have translationService injected', () => {
    expect(component.translationService).toBeTruthy();
  });

  describe('navigateToSection', () => {
    it('should scroll to element when on home page', fakeAsync(() => {
      jest.spyOn(router, 'url', 'get').mockReturnValue('/');
      const scrollSpy = jest.spyOn(component as any, 'scrollToElement').mockImplementation();

      component.navigateToSection('about');
      tick();

      expect(scrollSpy).toHaveBeenCalledWith('about');
    }));

    it('should scroll to element when on home page with query params', fakeAsync(() => {
      jest.spyOn(router, 'url', 'get').mockReturnValue('/?param=value');
      const scrollSpy = jest.spyOn(component as any, 'scrollToElement').mockImplementation();

      component.navigateToSection('about');
      tick();

      expect(scrollSpy).toHaveBeenCalledWith('about');
    }));

    it('should scroll to top when on dedicated page for that section', fakeAsync(() => {
      jest.spyOn(router, 'url', 'get').mockReturnValue('/projects');
      const scrollTopSpy = jest.spyOn(component as any, 'scrollToTop').mockImplementation();

      component.navigateToSection('projects');
      tick();

      expect(scrollTopSpy).toHaveBeenCalled();
    }));

    it('should scroll to top when on dedicated page sub-route', fakeAsync(() => {
      jest.spyOn(router, 'url', 'get').mockReturnValue('/projects/collaborations/project-alpha');
      const scrollTopSpy = jest.spyOn(component as any, 'scrollToTop').mockImplementation();

      component.navigateToSection('projects');
      tick();

      expect(scrollTopSpy).toHaveBeenCalled();
    }));

    it('should navigate to home with fragment when on different page', fakeAsync(() => {
      jest.spyOn(router, 'url', 'get').mockReturnValue('/projects');
      const navigateSpy = jest.spyOn(router, 'navigate').mockResolvedValue(true);
      const scrollSpy = jest.spyOn(component as any, 'scrollToElement').mockImplementation();

      component.navigateToSection('about');
      tick();

      expect(navigateSpy).toHaveBeenCalledWith(['/'], { fragment: 'about' });
    }));
  });

  describe('scrollToElement', () => {
    it('should call scrollIntoView when element exists', () => {
      const mockElement = {
        scrollIntoView: jest.fn(),
      };
      jest.spyOn(document, 'getElementById').mockReturnValue(mockElement as any);

      (component as any).scrollToElement('test-id');

      expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start',
      });
    });

    it('should not throw when element does not exist', () => {
      jest.spyOn(document, 'getElementById').mockReturnValue(null);

      expect(() => (component as any).scrollToElement('non-existent')).not.toThrow();
    });
  });

  describe('scrollToTop', () => {
    it('should call window.scrollTo with smooth behavior', () => {
      const scrollSpy = jest.spyOn(window, 'scrollTo').mockImplementation();

      (component as any).scrollToTop();

      expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth', top: 0 });
    });
  });

  describe('toggleLanguage', () => {
    it('should call translationService.toggleLanguage', () => {
      component.toggleLanguage();
      expect(translationServiceMock.toggleLanguage).toHaveBeenCalled();
    });
  });
});