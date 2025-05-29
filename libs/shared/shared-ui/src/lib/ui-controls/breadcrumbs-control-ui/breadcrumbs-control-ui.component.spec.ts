import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbsControlUiComponent } from './breadcrumbs-control-ui.component';

describe('BreadcrumbsControlUiComponent', () => {
  let component: BreadcrumbsControlUiComponent;
  let fixture: ComponentFixture<BreadcrumbsControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbsControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
