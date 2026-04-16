import { Directive, inject, ElementRef, HostListener, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[tiltCard]',
  standalone: true,
  host: {
    class: 'tilt-card',
  },
})
export class TiltCard implements OnDestroy {
  private readonly el = inject(ElementRef).nativeElement as HTMLElement;
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly maxTilt = 5; // degrees
  private resetTimeout: ReturnType<typeof setTimeout> | null = null;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isBrowser) return;

    const rect = this.el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -this.maxTilt;
    const rotateY = ((x - centerX) / centerX) * this.maxTilt;

    this.el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    this.el.style.willChange = 'transform';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!this.isBrowser) return;
    this.el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    this.el.style.willChange = 'auto';
  }

  ngOnDestroy(): void {
    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout);
    }
  }
}