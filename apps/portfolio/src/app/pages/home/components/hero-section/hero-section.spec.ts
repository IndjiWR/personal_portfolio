import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroSection } from './hero-section';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';

describe('HeroSection', () => {
  let fixture: ComponentFixture<HeroSection>;
  let component: HeroSection;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeroSection, TranslateModule.forRoot()],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(HeroSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have taglines array with 3 entries', () => {
    expect(component.taglines.length).toBe(3);
  });

  it('should start with tagline index 0', () => {
    expect(component.currentTaglineIndex()).toBe(0);
  });

  it('should cycle taglines', (done) => {
    component.TAGLINE_DISPLAY_MS = 100;
    component.startTaglineCycle();
    setTimeout(() => {
      expect(component.currentTaglineIndex()).toBeGreaterThan(0);
      component.ngOnDestroy();
      done();
    }, 250);
  });
});