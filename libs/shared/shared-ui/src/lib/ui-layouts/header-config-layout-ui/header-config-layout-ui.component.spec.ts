import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderConfigLayoutUiComponent } from './header-config-layout-ui.component';

describe('HeaderConfigLayoutUiComponent', () => {
  let component: HeaderConfigLayoutUiComponent;
  let fixture: ComponentFixture<HeaderConfigLayoutUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderConfigLayoutUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderConfigLayoutUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
