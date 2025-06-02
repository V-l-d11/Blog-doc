import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavSectionCardControlUiComponent } from './nav-section-card-control-ui.component';

describe('NavSectionCardControlUiComponent', () => {
  let component: NavSectionCardControlUiComponent;
  let fixture: ComponentFixture<NavSectionCardControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavSectionCardControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavSectionCardControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
