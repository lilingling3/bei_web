import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { SharedCommonModule } from '../shared/shared.module';
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
import { DictionaryEditComponent } from './system-dictionary/dictionary-edit/dictionary-edit.component';
import { MenuEditComponent } from './system-menu/menu-edit/menu-edit.component';
import { CompanyEditComponent } from './system-company/company-edit/company-edit.component';
import { PositionEditComponent } from './system-position/position-edit/position-edit.component';
import { EditRightComponent} from './system-right/edit-right/edit-right.component';
import { ShowRightComponent } from './system-right/show-right/show-right.component';
import { SystemDictionaryService } from './system-dictionary/service/system-dictionary.service';
import { SystemCompanyService } from './system-company/service/system-company.service';
import { PositionServiceService } from './system-position/service/position-service.service';
import { MenuServiceService } from './system-menu/service/menu-service.service';
import { RightServiceService } from './system-right/service/right-service.service';
@NgModule({
  imports: [
    SharedCommonModule,
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
    DictionaryEditComponent,
    CompanyEditComponent,
    PositionEditComponent,
    EditRightComponent,
    MenuEditComponent,
    ShowRightComponent
  ],
  providers:[SystemDictionaryService,SystemCompanyService,PositionServiceService,MenuServiceService,RightServiceService]
})
export class SystemModule { }
