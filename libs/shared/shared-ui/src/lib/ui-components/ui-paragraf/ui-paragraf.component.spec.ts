import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiParagrafComponent } from './ui-paragraf.component';

describe('UiParagrafComponent', () => {
  let component: UiParagrafComponent;
  let fixture: ComponentFixture<UiParagrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiParagrafComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiParagrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
