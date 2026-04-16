import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TiltCard } from './tilt-card';

@Component({
  template: '<div tiltCard class="card">Card</div>',
  imports: [TiltCard],
})
class TestHost {}

describe('TiltCard', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHost],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should create the directive', () => {
    const directive = fixture.debugElement.query(
      (el) => el.nativeElement.hasAttribute('tiltcard') || el.nativeElement.getAttribute('ng-reflect-tilt-card') !== null || el.nativeElement.classList.contains('tilt-card')
    );
    expect(directive).toBeTruthy();
  });

  it('should apply transform on mousemove', () => {
    const el = fixture.debugElement.query((d) => d.nativeElement.classList.contains('card')).nativeElement as HTMLElement;
    const rect = { left: 0, top: 0, width: 200, height: 100 };
    jest.spyOn(el, 'getBoundingClientRect').mockReturnValue(rect as DOMRect);

    const event = new MouseEvent('mousemove', { clientX: 100, clientY: 50 });
    el.dispatchEvent(event);
    fixture.detectChanges();

    expect(el.style.transform).toContain('perspective');
  });

  it('should remove transform on mouseleave', () => {
    const el = fixture.debugElement.query((d) => d.nativeElement.classList.contains('card')).nativeElement as HTMLElement;
    el.dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();

    expect(el.style.transform).toContain('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  });
});