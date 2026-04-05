import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutSection } from './about-section';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

describe('AboutSection', () => {
  let component: AboutSection;
  let fixture: ComponentFixture<AboutSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSection, TranslateModule.forRoot()],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section with id "about"', () => {
    const sectionElement = fixture.nativeElement.querySelector('lib-section');
    expect(sectionElement).toBeTruthy();
  });

  it('should render avatar image', () => {
    const avatarImg = fixture.nativeElement.querySelector('.avatar img');
    expect(avatarImg).toBeTruthy();
    expect(avatarImg.getAttribute('src')).toBe('assets/images/profile.png');
    expect(avatarImg.getAttribute('alt')).toBe('Profile');
  });

  it('should render bio section', () => {
    const bioElement = fixture.nativeElement.querySelector('.bio');
    expect(bioElement).toBeTruthy();
  });
});