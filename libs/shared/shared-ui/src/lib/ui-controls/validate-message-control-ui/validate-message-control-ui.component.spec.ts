import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidateMessageControlUiComponent } from './validate-message-control-ui.component';

describe('ValidateMessageControlUiComponent', () => {
  let component: ValidateMessageControlUiComponent;
  let fixture: ComponentFixture<ValidateMessageControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidateMessageControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidateMessageControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
