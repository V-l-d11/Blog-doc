import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectControlUiComponent } from './select-control-ui.component';

describe('SelectControlUiComponent', () => {
  let component: SelectControlUiComponent;
  let fixture: ComponentFixture<SelectControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
