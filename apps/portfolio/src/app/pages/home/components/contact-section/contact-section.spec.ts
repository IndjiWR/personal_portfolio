import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactSection } from './contact-section';
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

describe('ContactSection', () => {
  let component: ContactSection;
  let fixture: ComponentFixture<ContactSection>;

  beforeEach(() => {
    (globalThis as unknown as Record<string, unknown>).IntersectionObserver = MockIntersectionObserver;

    TestBed.configureTestingModule({
      imports: [ContactSection, TranslateModule.forRoot()],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(ContactSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 social links', () => {
    expect(component.socialLinks.length).toBe(3);
  });
});