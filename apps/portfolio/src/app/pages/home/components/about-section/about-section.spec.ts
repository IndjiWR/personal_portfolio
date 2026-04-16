import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutSection } from './about-section';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';

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

describe('AboutSection', () => {
  let component: AboutSection;
  let fixture: ComponentFixture<AboutSection>;

  beforeEach(() => {
    (globalThis as unknown as Record<string, unknown>).IntersectionObserver = MockIntersectionObserver;

    TestBed.configureTestingModule({
      imports: [AboutSection, TranslateModule.forRoot()],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(AboutSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have tech stack with 12 items', () => {
    expect(component.techStack.length).toBe(12);
  });

  it('should have languages and frameworks in tech stack', () => {
    const languages = component.techStack.filter((t) => t.type === 'language');
    const frameworks = component.techStack.filter((t) => t.type === 'framework');
    expect(languages.length).toBeGreaterThan(0);
    expect(frameworks.length).toBeGreaterThan(0);
  });
});