import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tooltip } from './tooltip';

describe('Tooltip', () => {
  let component: Tooltip;
  let fixture: ComponentFixture<Tooltip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tooltip],
    }).compileComponents();

    fixture = TestBed.createComponent(Tooltip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty text by default', () => {
    expect(component.text()).toBe('');
  });

  it('should have top position by default', () => {
    expect(component.position()).toBe('top');
  });

  it('should not be visible by default', () => {
    expect(component.isVisible()).toBe(false);
  });

  it('should accept text input', () => {
    fixture.componentRef.setInput('text', 'Tooltip text');
    fixture.detectChanges();
    expect(component.text()).toBe('Tooltip text');
  });

  it('should accept position input', () => {
    fixture.componentRef.setInput('position', 'bottom');
    fixture.detectChanges();
    expect(component.position()).toBe('bottom');
  });

  it('should show tooltip on mouseenter', () => {
    expect(component.isVisible()).toBe(false);

    fixture.debugElement.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();

    expect(component.isVisible()).toBe(true);
  });

  it('should hide tooltip on mouseleave', () => {
    component.isVisible.set(true);
    fixture.detectChanges();

    fixture.debugElement.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();

    expect(component.isVisible()).toBe(false);
  });

  it('should render tooltip with correct position class', () => {
    fixture.componentRef.setInput('text', 'Test');
    fixture.componentRef.setInput('position', 'bottom');
    component.isVisible.set(true);
    fixture.detectChanges();

    const tooltipElement = fixture.nativeElement.querySelector('.tooltip');
    expect(tooltipElement).toBeTruthy();
    expect(tooltipElement.classList).toContain('tooltip-bottom');
  });

  it('should render tooltip text', () => {
    fixture.componentRef.setInput('text', 'Hello World');
    component.isVisible.set(true);
    fixture.detectChanges();

    const tooltipElement = fixture.nativeElement.querySelector('.tooltip');
    expect(tooltipElement.textContent).toContain('Hello World');
  });
});