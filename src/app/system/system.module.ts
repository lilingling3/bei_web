import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule } from 'ng2-bootstrap';

import { SystemRoutes } from './system.routes';
import { SystemComponent } from './system.component';
import { SystemDictionaryComponent } from './system-dictionary/system-dictionary.component';
import { SystemCompanyComponent } from './system-company/system-company.component';
import { SystemMenuComponent } from './system-menu/system-menu.component';
import { SystemPositionComponent } from './system-position/system-position.component';
import { SystemRightComponent } from './system-right/system-right.component';

import { SystemService } from './service/system.service';
@NgModule({
  imports: [
    SharedModule,
    PaginationModule.forRoot(),
    RouterModule.forChild(SystemRoutes),
  ],
  declarations: [
    SystemComponent,
    SystemDictionaryComponent,
    SystemCompanyComponent,
    SystemMenuComponent,
    SystemPositionComponent,
    SystemRightComponent
  ],
  providers:[SystemService]
})
export class SystemModule { }
