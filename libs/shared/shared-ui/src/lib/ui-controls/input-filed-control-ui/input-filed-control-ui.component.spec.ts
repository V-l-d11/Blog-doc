import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputFiledControlUiComponent } from './input-filed-control-ui.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('InputFiledControlUiComponent', () => {
  let component: InputFiledControlUiComponent;
  let fixture: ComponentFixture<InputFiledControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputFiledControlUiComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputFiledControlUiComponent);
    component = fixture.componentInstance;

    component.parentForm = new FormGroup({
      name: new FormControl('initial value'),
    });
    component.fieldName = 'name';
    component.label = 'Test Label';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show label', () => {
    const labelElement = fixture.debugElement.query(By.css('label span'));
    expect(labelElement.nativeElement.textContent).toContain('Test Label');
  });

  it('Should show actyally value input', () => {
    component.writeValue('12345');
    fixture.detectChanges();
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputEl.value).toBe('12345');
  });

  it('Should call onChnged for writing', () => {
    const mockFn = jest.fn();
    component.registerOnChange(mockFn);
    fixture.detectChanges();

    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    inputEl.value = 'new value';
    inputEl.dispatchEvent(new Event('input'));
    expect(mockFn).toHaveBeenCalledWith('new value');
  });

  it('Should call touched for blur', () => {
    const touchedFn = jest.fn();
    component.registerOnTouched(touchedFn);
    fixture.detectChanges();
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    inputEl.dispatchEvent(new Event('blur'));
    expect(touchedFn).toHaveBeenCalled();
  });

  it('должен добавлять класс has-error при ошибке', () => {
    const control = component.formField;
    control.setErrors({ required: true });
    control.markAsDirty();
    fixture.detectChanges();

    const inputEl = fixture.debugElement.query(By.css('input'));
    expect(inputEl.nativeElement.classList).toContain('has-error');
  });
});
