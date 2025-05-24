import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldErrorsInptControlUiComponent } from './field-errors-inpt-control-ui.component';

describe('FieldErrorsInptControlUiComponent', () => {
  let component: FieldErrorsInptControlUiComponent;
  let fixture: ComponentFixture<FieldErrorsInptControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldErrorsInptControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldErrorsInptControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
