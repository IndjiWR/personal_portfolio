import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollReveal } from './scroll-reveal';

// Mock IntersectionObserver for jsdom environment
class MockIntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  private callback: IntersectionObserverCallback;
  private elements: Element[] = [];

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  observe(element: Element): void {
    this.elements.push(element);
  }

  unobserve(): void {}
  disconnect(): void {
    this.elements = [];
  }

  /** Simulate intersection — triggers the observer callback */
  triggerIntersect(): void {
    const entries: IntersectionObserverEntry[] = this.elements.map((el) => ({
      target: el,
      isIntersecting: true,
      boundingClientRect: el.getBoundingClientRect(),
      intersectionRatio: 1,
      intersectionRect: el.getBoundingClientRect(),
      rootBounds: null,
      time: Date.now(),
    }));
    this.callback(entries, this as unknown as IntersectionObserver);
  }
}

@Component({
  template: '<div scrollReveal [staggerIndex]="0">Content</div>',
  imports: [ScrollReveal],
})
class TestHost {}

describe('ScrollReveal', () => {
  let fixture: ComponentFixture<TestHost>;
  let mockObserver: MockIntersectionObserver;

  beforeEach(() => {
    // Install mock before any directive is created
    const originalIO = (globalThis as unknown as Record<string, unknown>).IntersectionObserver;
    mockObserver = new MockIntersectionObserver(() => {});
    (globalThis as unknown as Record<string, unknown>).IntersectionObserver = class {
      constructor(cb: IntersectionObserverCallback) {
        mockObserver = new MockIntersectionObserver(cb);
        return mockObserver;
      }
    };

    TestBed.configureTestingModule({
      imports: [TestHost],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the directive', () => {
    const directive = fixture.debugElement.query(
      (el) => el.nativeElement.getAttribute('scrollReveal') !== null
    );
    expect(directive).toBeTruthy();
  });

  it('should start with scroll-reveal class and not revealed', () => {
    const el = fixture.debugElement.query(
      (el) => el.nativeElement.getAttribute('scrollReveal') !== null
    ).nativeElement as HTMLElement;
    expect(el.classList.contains('scroll-reveal')).toBe(true);
    expect(el.classList.contains('revealed')).toBe(false);
  });

  it('should add revealed class when IntersectionObserver triggers', () => {
    // Trigger the observer callback
    mockObserver.triggerIntersect();
    fixture.detectChanges();

    const el = fixture.debugElement.query(
      (el) => el.nativeElement.getAttribute('scrollReveal') !== null
    ).nativeElement as HTMLElement;
    expect(el.classList.contains('revealed')).toBe(true);
  });
});