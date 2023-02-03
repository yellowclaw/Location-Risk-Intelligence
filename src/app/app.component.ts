import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';
import { GetElevationData } from './store/actions/elevation-data.action';
import { ElevationDataState } from './store/states/elevation-data.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(ElevationDataState.getElevationData) elevationData$?: Observable<[number[]]>;
  @Select(ElevationDataState.getAverageElevation) averageElevation$?: Observable<number>;
  @Select(ElevationDataState.getMaxElevation) maxElevation$?: Observable<number>;
  @Select(actionsExecuting([GetElevationData])) getElevationDataLoading$?: Observable<ActionsExecuting>;
  isChartReady = false;

  constructor(private store: Store) {
  }

  requestData(): void {
    this.store.dispatch(new GetElevationData());
  }
}
