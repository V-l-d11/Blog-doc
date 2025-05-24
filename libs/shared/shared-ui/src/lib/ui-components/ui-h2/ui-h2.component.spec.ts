import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiH2Component } from './ui-h2.component';

describe('UiH2Component', () => {
  let component: UiH2Component;
  let fixture: ComponentFixture<UiH2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiH2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(UiH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
