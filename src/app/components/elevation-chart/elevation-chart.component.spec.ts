import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevationChartComponent } from './elevation-chart.component';

describe('ElevationChartComponent', () => {
  let component: ElevationChartComponent;
  let fixture: ComponentFixture<ElevationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElevationChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
