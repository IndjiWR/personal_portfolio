import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Toolbar } from './components/toolbar/toolbar';
import { Footer } from './components/footer/footer';
import { TranslationService } from './core/i18n/translation.service';

@Component({
  imports: [RouterModule, Toolbar, Footer],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private translationService = inject(TranslationService);
}