import { Component, HostListener, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-tooltip',
  imports: [CommonModule],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
})
export class Tooltip {
  text = input<string>('');
  position = input<'top' | 'bottom' | 'left' | 'right'>('top');

  isVisible = signal(false);

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.isVisible.set(true);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.isVisible.set(false);
  }
}