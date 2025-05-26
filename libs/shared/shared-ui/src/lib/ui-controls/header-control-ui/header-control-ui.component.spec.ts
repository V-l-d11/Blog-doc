import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderControlUiComponent } from './header-control-ui.component';

describe('HeaderControlUiComponent', () => {
  let component: HeaderControlUiComponent;
  let fixture: ComponentFixture<HeaderControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
