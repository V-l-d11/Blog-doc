import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollspyLayoutUiComponent } from './scrollspy-layout-ui.component';

describe('ScrollspyLayoutUiComponent', () => {
  let component: ScrollspyLayoutUiComponent;
  let fixture: ComponentFixture<ScrollspyLayoutUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollspyLayoutUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollspyLayoutUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
