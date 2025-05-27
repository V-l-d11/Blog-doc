import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NestedFormGroupeControlUiComponent } from './nested-form-groupe-control-ui.component';

describe('NestedFormGroupeControlUiComponent', () => {
  let component: NestedFormGroupeControlUiComponent;
  let fixture: ComponentFixture<NestedFormGroupeControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedFormGroupeControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NestedFormGroupeControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
