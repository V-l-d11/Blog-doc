import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainBlogFeatureComponent } from './main-blog-feature.component';

describe('MainBlogFeatureComponent', () => {
  let component: MainBlogFeatureComponent;
  let fixture: ComponentFixture<MainBlogFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBlogFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainBlogFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
