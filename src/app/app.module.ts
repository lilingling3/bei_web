import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AlertModule,TabsModule  } from 'ng2-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';

import { HttpModule, JsonpModule, Http} from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { LoadingButton } from './common/loading/loading-button';
import { AppService } from './server/app.service';
import { TopMenuService } from './server/top-menu.service';
import { commonsInstances} from './models/Acommons';
import { AppErrorComponent } from './error/app.error.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingButton,
    AppErrorComponent,
],
  imports: [
    ChartsModule,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    SharedModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    AppService,
    TopMenuService,
    commonsInstances,
    {provide: LocationStrategy,useClass: HashLocationStrategy}
],
  bootstrap: [AppComponent]

})

export class AppModule { }
