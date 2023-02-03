import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Select } from '@ngxs/store';
import { ElevationDataState } from '../../store/states/elevation-data.state';

@Component({
  selector: 'app-elevation-chart',
  templateUrl: './elevation-chart.component.html',
  styleUrls: ['./elevation-chart.component.scss']
})
export class ElevationChartComponent implements OnInit, OnDestroy {
  @Output() isChartReady = new EventEmitter<boolean>();
  @Select(ElevationDataState.getElevationData) elevationData$?: Observable<[number[]]>;

  chartOptions = {
    type: ChartType.LineChart,
    columnNames: ['elevation', 'distance'],
    data: [] as number[][],
    options: {
      curveType: 'function',
      colors: ['#e0440e'],
      is3D: true,
      hAxis: {
        title: 'Distance',
        viewWindowMode: 'explicit'
      },
      vAxis: {
        title: 'Elevation',
        viewWindowMode: 'explicit'
      }
    }
  };

  private destroy: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.elevationData$?.pipe(takeUntil(this.destroy))
      .subscribe((res: number[][]) => this.chartOptions.data = res);
  }

  handleChartReady(): void {
    this.isChartReady.emit(true);
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
