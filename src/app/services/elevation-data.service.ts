import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ElevationDataRequestParams } from '../constants/elevation-data-request-params';
import { ElevationDataModel } from '../models/elevation-data.model';

@Injectable({
  providedIn: 'root'
})
export class ElevationDataService {
  private readonly elevationDataRequestParams = ElevationDataRequestParams;
  private readonly profileDataUrl = 'https://elevation.arcgis.com/arcgis/rest/services/Tools/ElevationSync/GPServer/Profile/execute';

  constructor(private http: HttpClient) {
  }

  fetchElevationData(): Observable<number[][]> {
    return this.http.get<ElevationDataModel>(this.profileDataUrl, { params: this.buildElevationDataParams() })
      .pipe(map((res: ElevationDataModel) => res.results[0].value.features[0].geometry.paths[0].map((res: number[]) => [res[3], res[2]])));
  }

  private buildElevationDataParams(): HttpParams {
    let params = new HttpParams();

    Object.entries(this.elevationDataRequestParams).forEach((entry: [string, string | number | boolean]) => {
      const [key, value] = entry;
      params = params.append(key, value)
    })

    return params;
  }
}
