import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipsControlUiComponent } from './chips-control-ui.component';

describe('ChipsControlUiComponent', () => {
  let component: ChipsControlUiComponent;
  let fixture: ComponentFixture<ChipsControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipsControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipsControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
