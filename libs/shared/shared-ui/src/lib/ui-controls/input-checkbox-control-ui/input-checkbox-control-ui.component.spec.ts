import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputCheckboxControlUiComponent } from './input-checkbox-control-ui.component';

describe('InputCheckboxControlUiComponent', () => {
  let component: InputCheckboxControlUiComponent;
  let fixture: ComponentFixture<InputCheckboxControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputCheckboxControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputCheckboxControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
