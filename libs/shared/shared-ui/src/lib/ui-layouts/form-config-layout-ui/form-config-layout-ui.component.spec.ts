import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormConfigLayoutUiComponent } from './form-config-layout-ui.component';

describe('FormConfigLayoutUiComponent', () => {
  let component: FormConfigLayoutUiComponent;
  let fixture: ComponentFixture<FormConfigLayoutUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormConfigLayoutUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormConfigLayoutUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
