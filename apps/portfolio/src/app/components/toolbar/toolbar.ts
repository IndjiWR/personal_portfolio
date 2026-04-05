import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../core/i18n/translation.service';

// Maps section IDs to their dedicated routes (if they have one)
// Sections not in this map are home-page only
const SECTION_ROUTES: Record<string, string> = {
  projects: '/projects',
  // Add future sections with dedicated pages here, e.g.:
  // blog: '/blog',
};

@Component({
  selector: 'app-toolbar',
  imports: [
    RouterModule,
    UpperCasePipe,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
  ],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {
  private router = inject(Router);
  translationService = inject(TranslationService);

  private scrollToElement(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private scrollToTop(): void {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }

  navigateToSection(sectionId: string): void {
    const currentPath = this.router.url.split('?')[0].split('#')[0];
    const dedicatedRoute = SECTION_ROUTES[sectionId];
    const isOnDedicatedPage = dedicatedRoute && currentPath.startsWith(dedicatedRoute);
    const isOnHome = currentPath === '/';

    if (isOnDedicatedPage) {
      // Already on the dedicated page for this section - scroll to top
      this.scrollToTop();
    } else if (isOnHome) {
      // On home page - scroll to the section
      this.scrollToElement(sectionId);
    } else {
      // Navigate to home with fragment, then scroll
      this.router.navigate(['/'], { fragment: sectionId }).then(() => {
        setTimeout(() => this.scrollToElement(sectionId), 100);
      });
    }
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }
}