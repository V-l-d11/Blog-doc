import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiH3Component } from './ui-h3.component';

describe('UiH3Component', () => {
  let component: UiH3Component;
  let fixture: ComponentFixture<UiH3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiH3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(UiH3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
