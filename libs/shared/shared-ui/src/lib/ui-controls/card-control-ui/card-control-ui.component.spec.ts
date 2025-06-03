import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardControlUiComponent } from './card-control-ui.component';

describe('CardControlUiComponent', () => {
  let component: CardControlUiComponent;
  let fixture: ComponentFixture<CardControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
