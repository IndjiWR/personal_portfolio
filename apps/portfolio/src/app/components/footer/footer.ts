import { Component, inject, signal, effect } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { Tooltip } from 'ui';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, MatButtonModule, TranslateModule, Tooltip],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private document = inject(DOCUMENT);

  readonly socialLinks = [
    {
      nameKey: 'footer.instagram',
      url: 'https://www.instagram.com/indji_00/',
      icon: 'photo_camera',
    },
    {
      nameKey: 'footer.github',
      url: 'https://github.com/IndjiWR?tab=repositories',
      icon: 'code',
    },
    {
      nameKey: 'footer.linkedin',
      url: 'https://it.linkedin.com/in/indji-israel-gbohou-78097a223/it',
      icon: 'work',
    },
  ];

  isAtBottom = signal(false);
  isExpanded = signal(false);

  constructor() {
    // Check if scrolled to bottom
    fromEvent(this.document, 'scroll')
      .pipe(debounceTime(50))
      .subscribe(() => this.checkScrollPosition());
  }

  private checkScrollPosition(): void {
    const window = this.document.defaultView;
    if (!window) return;

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = this.document.documentElement.scrollHeight;

    // Consider "at bottom" when within 100px of bottom
    const atBottom = scrollTop + windowHeight >= docHeight - 100;
    this.isAtBottom.set(atBottom);
  }

  toggleExpand(): void {
    this.isExpanded.update((v) => !v);
  }
}

import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';