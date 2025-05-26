import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiH4h5h6Component } from './ui-h4h5h6.component';

describe('UiH4h5h6Component', () => {
  let component: UiH4h5h6Component;
  let fixture: ComponentFixture<UiH4h5h6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiH4h5h6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(UiH4h5h6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
