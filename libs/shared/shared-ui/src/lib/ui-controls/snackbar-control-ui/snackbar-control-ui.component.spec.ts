import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnackbarControlUiComponent } from './snackbar-control-ui.component';

describe('SnackbarControlUiComponent', () => {
  let component: SnackbarControlUiComponent;
  let fixture: ComponentFixture<SnackbarControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnackbarControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SnackbarControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
