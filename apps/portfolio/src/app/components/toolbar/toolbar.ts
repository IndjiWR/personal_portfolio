import { Component, inject, signal, OnDestroy, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UpperCasePipe, isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  imports: [
    RouterModule,
    UpperCasePipe,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
  ],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar implements OnDestroy {
  private router = inject(Router);
  translationService = inject(TranslationService);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  private scrollSub: Subscription | null = null;

  constructor() {
    if (this.isBrowser) {
      this.scrollSub = fromEvent(window, 'scroll')
        .pipe(debounceTime(16))
        .subscribe(() => {
          this.isScrolled.set(window.scrollY > 50);
        });
    }
  }

  navigateToSection(sectionId: string): void {
    this.isMobileMenuOpen.set(false);
    const currentPath = this.router.url.split('?')[0].split('#')[0];
    const isOnHome = currentPath === '/';

    if (isOnHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      this.router.navigate(['/'], { fragment: sectionId }).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    }
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }

  ngOnDestroy(): void {
    this.scrollSub?.unsubscribe();
  }
}