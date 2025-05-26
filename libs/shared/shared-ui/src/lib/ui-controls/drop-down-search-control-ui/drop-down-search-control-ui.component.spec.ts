import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropDownSearchControlUiComponent } from './drop-down-search-control-ui.component';

describe('DropDownSearchControlUiComponent', () => {
  let component: DropDownSearchControlUiComponent;
  let fixture: ComponentFixture<DropDownSearchControlUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropDownSearchControlUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropDownSearchControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
