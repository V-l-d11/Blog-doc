import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiH1Component } from './ui-h1.component';

describe('UiH1Component', () => {
  let component: UiH1Component;
  let fixture: ComponentFixture<UiH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiH1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(UiH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
