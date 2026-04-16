import { Component, signal, inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  templateUrl: './scroll-progress.html',
  styleUrl: './scroll-progress.scss',
})
export class ScrollProgress implements OnDestroy {
  progress = signal(0);

  private subscription: Subscription | null = null;
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly document = inject(DOCUMENT);

  constructor() {
    if (this.isBrowser) {
      const window = this.document.defaultView;
      if (window) {
        this.subscription = fromEvent(window, 'scroll')
          .pipe(debounceTime(16))
          .subscribe(() => this.updateProgressFromWindow());
      }
    }
  }

  private updateProgressFromWindow(): void {
    const window = this.document.defaultView;
    if (!window) return;

    this.updateProgress({
      scrollY: window.scrollY,
      scrollHeight: this.document.documentElement.scrollHeight,
      innerHeight: window.innerHeight,
    });
  }

  updateProgress(params: { scrollY: number; scrollHeight: number; innerHeight: number }): void {
    const { scrollY, scrollHeight, innerHeight } = params;
    const maxScroll = scrollHeight - innerHeight;
    const pct = maxScroll > 0 ? Math.round((scrollY / maxScroll) * 100) : 0;
    this.progress.set(Math.min(100, Math.max(0, pct)));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}