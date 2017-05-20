/**
 * Created by Administrator on 2017/4/13.
 */
import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule } from 'ng2-bootstrap';
import { StationsComponent } from './stations.component';
import { stationsRoutes } from './stations.routes';

import { StationsMapComponent } from './stations-map/stations-map.component';
import { StationManageComponent } from './station-manage/station-manage.component';
import { StationDetailComponent } from './station-manage/station-detail/station-detail.component';

import { StationService } from '../stations/service/station.service';
@NgModule({
  imports: [
    SharedModule,
    PaginationModule.forRoot(),
    RouterModule.forChild(stationsRoutes)
  ],
  declarations: [
    StationsComponent,
    StationsMapComponent,
    StationManageComponent,
    StationDetailComponent
  ],
  providers:[StationService]
})
export class StationsModule { }
