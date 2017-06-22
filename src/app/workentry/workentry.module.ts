import { NgModule } from '@angular/core';
import { SharedCommonModule } from '../shared/shared.module';
import { RouterModule} from '@angular/router';
import { ModalModule } from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';
import { WorkentryComponent } from './workentry.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { DefaultComponent } from '../default/dufault.component';
import { workentryRoutes } from './workentry.routes';
@NgModule({
  imports: [
    SharedCommonModule,
    FormsModule,
  //  ModalModule.forRoot(),
    RouterModule.forChild(workentryRoutes)
  ],
  exports: [],
  declarations: [
    WorkentryComponent,
    TopMenuComponent,
    DefaultComponent
  ],
  providers: []
})
export class WorkentryModule { }
