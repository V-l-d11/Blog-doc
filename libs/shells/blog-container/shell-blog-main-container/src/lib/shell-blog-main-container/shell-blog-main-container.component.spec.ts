import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellBlogMainContainerComponent } from './shell-blog-main-container.component';

describe('ShellBlogMainContainerComponent', () => {
  let component: ShellBlogMainContainerComponent;
  let fixture: ComponentFixture<ShellBlogMainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellBlogMainContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellBlogMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
