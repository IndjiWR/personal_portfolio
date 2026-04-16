import { Directive, input, effect, inject, ElementRef, PLATFORM_ID, signal, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[scrollReveal]',
  standalone: true,
  host: {
    class: 'scroll-reveal',
    '[class.revealed]': 'isRevealed()',
    '[style.--stagger-delay]': 'staggerIndex() ? staggerIndex() * 80 + "ms" : "0ms"',
  },
})
export class ScrollReveal implements OnDestroy {
  staggerIndex = input<number>(0);

  isRevealed = signal(false);

  private observer: IntersectionObserver | null = null;
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly el = inject(ElementRef).nativeElement as HTMLElement;

  constructor() {
    effect(() => {
      if (this.isBrowser) {
        this.setupObserver();
      } else {
        this.isRevealed.set(true);
      }
    });
  }

  private setupObserver(): void {
    if (this.observer) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.onIntersect();
            this.observer?.disconnect();
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    this.observer.observe(this.el);
  }

  onIntersect(): void {
    this.isRevealed.set(true);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}