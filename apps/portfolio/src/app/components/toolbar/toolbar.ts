import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../core/i18n/translation.service';

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
  translationService = inject(TranslationService);

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }
}