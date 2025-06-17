import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoadMapSectionComponent } from './road-map-section.component';

describe('RoadMapSectionComponent', () => {
  let component: RoadMapSectionComponent;
  let fixture: ComponentFixture<RoadMapSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadMapSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoadMapSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
