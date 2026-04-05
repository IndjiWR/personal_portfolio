import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer, TranslateModule.forRoot()],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have three social links defined', () => {
    expect(component.socialLinks.length).toBe(3);
  });

  it('should have correct Instagram link', () => {
    const instagramLink = component.socialLinks.find((l) => l.nameKey === 'footer.instagram');
    expect(instagramLink).toBeTruthy();
    expect(instagramLink?.url).toContain('instagram.com');
    expect(instagramLink?.icon).toBe('photo_camera');
  });

  it('should have correct GitHub link', () => {
    const githubLink = component.socialLinks.find((l) => l.nameKey === 'footer.github');
    expect(githubLink).toBeTruthy();
    expect(githubLink?.url).toContain('github.com');
    expect(githubLink?.icon).toBe('code');
  });

  it('should have correct LinkedIn link', () => {
    const linkedinLink = component.socialLinks.find((l) => l.nameKey === 'footer.linkedin');
    expect(linkedinLink).toBeTruthy();
    expect(linkedinLink?.url).toContain('linkedin.com');
    expect(linkedinLink?.icon).toBe('work');
  });

  it('should have isAtBottom signal initialized to false', () => {
    expect(component.isAtBottom()).toBe(false);
  });

  it('should have isExpanded signal initialized to false', () => {
    expect(component.isExpanded()).toBe(false);
  });

  describe('toggleExpand', () => {
    it('should toggle isExpanded from false to true', () => {
      expect(component.isExpanded()).toBe(false);
      component.toggleExpand();
      expect(component.isExpanded()).toBe(true);
    });

    it('should toggle isExpanded from true to false', () => {
      component.isExpanded.set(true);
      component.toggleExpand();
      expect(component.isExpanded()).toBe(false);
    });
  });
});