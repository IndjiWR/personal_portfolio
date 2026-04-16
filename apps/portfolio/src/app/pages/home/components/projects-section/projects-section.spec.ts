import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsSection } from './projects-section';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { PROJECT_ENVIRONMENT } from 'projects';

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

describe('ProjectsSection', () => {
  let component: ProjectsSection;
  let fixture: ComponentFixture<ProjectsSection>;

  beforeEach(() => {
    (globalThis as unknown as Record<string, unknown>).IntersectionObserver = MockIntersectionObserver;

    TestBed.configureTestingModule({
      imports: [ProjectsSection, TranslateModule.forRoot()],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        { provide: PROJECT_ENVIRONMENT, useValue: { mode: 'local' } },
      ],
    });
    fixture = TestBed.createComponent(ProjectsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with "all" filter active', () => {
    expect(component.activeFilter()).toBe('all');
  });

  it('should update active filter', () => {
    component.setFilter('personal');
    expect(component.activeFilter()).toBe('personal');
  });
});