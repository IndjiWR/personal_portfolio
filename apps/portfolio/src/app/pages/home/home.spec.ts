import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Home } from './home';
import { ActivatedRoute } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { ProjectService } from 'projects';

// Mock canvas getContext for jsdom (not natively supported)
HTMLCanvasElement.prototype.getContext = jest.fn().mockReturnValue(null);

// Mock IntersectionObserver for jsdom environment
class MockIntersectionObserver {
  private callback: IntersectionObserverCallback;
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    (globalThis as unknown as Record<string, unknown>).IntersectionObserver = MockIntersectionObserver;
    await TestBed.configureTestingModule({
      imports: [Home, TranslateModule.forRoot()],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        {
          provide: ActivatedRoute,
          useValue: {
            fragment: of(null),
          },
        },
        {
          provide: ProjectService,
          useValue: {
            getVisibleProjects: () => of([]),
            getCategories: () => of([]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngAfterViewInit', () => {
    it('should scroll to element when fragment is provided', fakeAsync(() => {
      const mockElement = {
        scrollIntoView: jest.fn(),
      };
      jest.spyOn(document, 'getElementById').mockReturnValue(mockElement as any);

      // Create component with fragment
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [Home, TranslateModule.forRoot()],
        providers: [
          provideRouter([]),
          provideHttpClient(),
          {
            provide: ActivatedRoute,
            useValue: {
              fragment: of('about'),
            },
          },
          {
            provide: ProjectService,
            useValue: {
              getVisibleProjects: () => of([]),
              getCategories: () => of([]),
            },
          },
        ],
      });

      const newFixture = TestBed.createComponent(Home);
      newFixture.componentInstance.ngAfterViewInit();
      tick(150);

      expect(document.getElementById).toHaveBeenCalledWith('about');
      expect(mockElement.scrollIntoView).toHaveBeenCalled();
    }));

    it('should not scroll when fragment is null', fakeAsync(() => {
      // The beforeEach already set up fragment as null
      // We need to reset and test again with explicit null
      jest.clearAllMocks();
      const scrollSpy = jest.spyOn(document, 'getElementById').mockReturnValue(null);

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [Home, TranslateModule.forRoot()],
        providers: [
          provideRouter([]),
          provideHttpClient(),
          {
            provide: ActivatedRoute,
            useValue: {
              fragment: of(null),
            },
          },
          {
            provide: ProjectService,
            useValue: {
              getVisibleProjects: () => of([]),
              getCategories: () => of([]),
            },
          },
        ],
      });

      const newFixture = TestBed.createComponent(Home);
      newFixture.detectChanges();
      newFixture.componentInstance.ngAfterViewInit();
      tick(150);

      // Since fragment is null, Home should not trigger scrolling
      // Note: HeroSection calls getElementById('hero-canvas') for canvas init, which is expected
      const calls = scrollSpy.mock.calls.map(call => call[0]);
      const scrollTargets = calls.filter(id => id !== 'hero-canvas');
      expect(scrollTargets).toEqual([]);
    }));

    it('should handle missing element gracefully', fakeAsync(() => {
      jest.spyOn(document, 'getElementById').mockReturnValue(null);

      // Should not throw
      expect(() => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
          imports: [Home, TranslateModule.forRoot()],
          providers: [
            provideRouter([]),
            provideHttpClient(),
            {
              provide: ActivatedRoute,
              useValue: {
                fragment: of('non-existent'),
              },
            },
            {
              provide: ProjectService,
              useValue: {
                getVisibleProjects: () => of([]),
                getCategories: () => of([]),
              },
            },
          ],
        });

        const newFixture = TestBed.createComponent(Home);
        newFixture.componentInstance.ngAfterViewInit();
        tick(150);
      }).not.toThrow();
    }));
  });
});