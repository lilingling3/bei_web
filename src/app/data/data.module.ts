/**
 * Created by Administrator on 2017/4/13.
 */
import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';

import { DataComponent } from './data.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { dataRoutes } from './data.routes';

import { DataOperateComponent } from './data-operate/data-operate.component';

@NgModule({
  imports: [
    RouterModule.forChild(dataRoutes),
    ChartsModule
  ],
  declarations: [
    DataComponent,
    DataOperateComponent
  ]
})
export class DataModule { }
