import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Section } from './section';

describe('Section', () => {
  let component: Section;
  let fixture: ComponentFixture<Section>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section],
    }).compileComponents();

    fixture = TestBed.createComponent(Section);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty id by default', () => {
    expect(component.id()).toBe('');
  });

  it('should have empty title by default', () => {
    expect(component.title()).toBe('');
  });

  it('should accept id input', () => {
    // Set input via component inputs
    fixture.componentRef.setInput('id', 'test-section');
    fixture.detectChanges();
    expect(component.id()).toBe('test-section');
  });

  it('should accept title input', () => {
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.detectChanges();
    expect(component.title()).toBe('Test Title');
  });

  it('should render id attribute on section element', () => {
    fixture.componentRef.setInput('id', 'my-section');
    fixture.detectChanges();

    const sectionElement = fixture.nativeElement.querySelector('section');
    expect(sectionElement.getAttribute('id')).toBe('my-section');
  });

  it('should render title when provided', () => {
    fixture.componentRef.setInput('title', 'Section Title');
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('Section Title');
  });

  it('should not render title when empty', () => {
    fixture.componentRef.setInput('title', '');
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement).toBeFalsy();
  });

  it('should project content into ng-content', () => {
    const sectionElement = fixture.nativeElement.querySelector('section');
    expect(sectionElement).toBeTruthy();
  });
});