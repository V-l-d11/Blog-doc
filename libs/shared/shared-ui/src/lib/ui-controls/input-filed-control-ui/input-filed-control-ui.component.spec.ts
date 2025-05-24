import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputFiledControlUiComponent } from './input-filed-control-ui.component';

describe('InputFiledControlUiComponent', () => {
  let component: InputFiledControlUiComponent;
  let fixture: ComponentFixture<InputFiledControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputFiledControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputFiledControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
