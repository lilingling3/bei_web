import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule } from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SystemRoutes } from './system.routes';
import { SystemComponent } from './system.component';
import { SystemDictionaryComponent } from './system-dictionary/system-dictionary.component';
import { SystemCompanyComponent } from './system-company/system-company.component';
import { SystemMenuComponent } from './system-menu/system-menu.component';
import { SystemPositionComponent } from './system-position/system-position.component';
import { SystemRightComponent } from './system-right/system-right.component';

import { SystemDictionaryService } from './system-dictionary/service/system-dictionary.service';
import { DictionaryEditComponent } from './system-dictionary/dictionary-edit/dictionary-edit.component';
@NgModule({
  imports: [
    SharedModule,
     FormsModule,
    CommonModule,
    PaginationModule.forRoot(),
    RouterModule.forChild(SystemRoutes),
  ],
  declarations: [
    SystemComponent,
    SystemDictionaryComponent,
    SystemCompanyComponent,
    SystemMenuComponent,
    SystemPositionComponent,
    SystemRightComponent,
    DictionaryEditComponent
  ],
  providers:[SystemDictionaryService]
})
export class SystemModule { }
