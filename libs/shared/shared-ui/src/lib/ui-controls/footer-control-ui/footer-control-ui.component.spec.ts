import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterControlUiComponent } from './footer-control-ui.component';

describe('FooterControlUiComponent', () => {
  let component: FooterControlUiComponent;
  let fixture: ComponentFixture<FooterControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
