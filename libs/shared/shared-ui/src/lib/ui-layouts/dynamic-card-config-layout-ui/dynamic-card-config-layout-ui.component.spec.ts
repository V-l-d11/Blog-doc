import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicCardConfigLayoutUiComponent } from './dynamic-card-config-layout-ui.component';

describe('DynamicCardConfigLayoutUiComponent', () => {
  let component: DynamicCardConfigLayoutUiComponent;
  let fixture: ComponentFixture<DynamicCardConfigLayoutUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicCardConfigLayoutUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicCardConfigLayoutUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
