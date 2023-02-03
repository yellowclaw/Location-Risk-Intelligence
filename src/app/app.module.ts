import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgxsActionsExecutingModule } from '@ngxs-labs/actions-executing';
import { AppComponent } from './app.component';
import { ElevationChartComponent } from './components/elevation-chart/elevation-chart.component';
import { ElevationResultComponent } from './components/elevation-result/elevation-result.component';
import { ElevationDataState } from './store/states/elevation-data.state';

@NgModule({
  declarations: [
    AppComponent,
    ElevationChartComponent,
    ElevationResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleChartsModule,
    NgxsModule.forRoot([
      ElevationDataState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsActionsExecutingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
