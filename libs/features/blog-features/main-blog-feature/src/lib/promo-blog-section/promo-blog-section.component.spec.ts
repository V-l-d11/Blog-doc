import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromoBlogSectionComponent } from './promo-blog-section.component';

describe('PromoBlogSectionComponent', () => {
  let component: PromoBlogSectionComponent;
  let fixture: ComponentFixture<PromoBlogSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoBlogSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PromoBlogSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
