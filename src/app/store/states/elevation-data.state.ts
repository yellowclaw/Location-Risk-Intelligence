import { Action, Selector, State, StateContext } from '@ngxs/store';
import { max, mean } from 'lodash';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ElevationDataService } from '../../services/elevation-data.service';
import { GetElevationData } from '../actions/elevation-data.action';

export class ElevationDataStateModel {
  elevationData: number[][] | null = null;
}

@Injectable()
@State<ElevationDataStateModel>({
  name: 'elevationData',
  defaults: {
    elevationData: null
  }
})
export class ElevationDataState {
  constructor(private elevationDataService: ElevationDataService) {
  }

  @Selector()
  static getElevationData(state: ElevationDataStateModel) {
    return state.elevationData;
  }

  @Selector()
  static getAverageElevation(state: ElevationDataStateModel) {
    return mean(state.elevationData?.map(el => el[1])) || 0;
  }

  @Selector()
  static getMaxElevation(state: ElevationDataStateModel) {
    return max(state.elevationData?.map(el => el[1])) || 0;
  }

  @Action(GetElevationData)
  getElevationData({ getState, setState }: StateContext<ElevationDataStateModel>) {
    return this.elevationDataService.fetchElevationData()
      .pipe(tap((result: number[][]) => {
        const state = getState();
        setState({
          ...state,
          elevationData: result
        });
      }));
  }
}
