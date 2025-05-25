import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldErrorsInptControlUiComponent } from './field-errors-inpt-control-ui.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('FieldErrorsInptControlUiComponent', () => {
  let component: FieldErrorsInptControlUiComponent;
  let fixture: ComponentFixture<FieldErrorsInptControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldErrorsInptControlUiComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldErrorsInptControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Don`t show errors, if field not dirty', () => {
    component.formField = new FormControl('');
    fixture.detectChanges();
    const errorElements = fixture.debugElement.queryAll(By.css('.field-error'));
    expect(errorElements.length).toBe(0);
  });
});
