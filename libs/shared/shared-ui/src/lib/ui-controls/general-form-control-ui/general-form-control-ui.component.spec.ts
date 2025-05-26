import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralFormControlUiComponent } from './general-form-control-ui.component';

describe('GeneralFormControlUiComponent', () => {
  let component: GeneralFormControlUiComponent;
  let fixture: ComponentFixture<GeneralFormControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralFormControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralFormControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
