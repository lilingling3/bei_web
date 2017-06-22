import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
// import { AlertModule,TabsModule  } from 'ng2-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';

import { HttpModule, JsonpModule, Http} from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './app.routes';
import { SharedCommonModule } from './shared/shared.module';
import { LoadingButton } from './common/loading/loading-button';
import { UtilsModule } from './utils/utils.module'
// 组件
import { PrimengComponent } from './primeng/primeng.component';
import { AppErrorComponent } from './error/app.error.component';
import { ZtreeDemoComponent } from './z-tree/z-tree.component';
import { TestHttpComponent } from './test-http/test-http.component';
import { UtilsComponent } from './utils/utils.component';
// UI 插件加载
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule,FileUploadModule,CalendarModule,PaginatorModule,TreeTableModule,TreeNode,SharedModule,Header,
  Footer,ContextMenuModule,MenuModule,MenuItem,ConfirmDialogModule,ConfirmationService,ScheduleModule,
  TabMenuModule,ChartModule,MessagesModule,GrowlModule} from 'primeng/primeng';
// 服务
import {PrimengService } from './primeng/primeng.service';
// import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import { TestHttpService } from './test-http/test-http.service';
import { HttpService } from './server/common.service';
import { AppService } from './server/app.service';
import { TopMenuService } from './server/top-menu.service';
import { commonsInstances} from './models/Acommons';
// // 工具类
// import {OneDirective } from './utils/directive/beauty.directive';
// import {BeautyDirective } from './utils/directive/color.directive';
// import {BeautyInputDirective } from './utils/directive/input.directive';
// import {MyUnlessDirective } from './utils/directive/unClass.directive';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingButton,
    AppErrorComponent,
    ZtreeDemoComponent,
    PrimengComponent,
    TestHttpComponent,
    // UtilsComponent,
    // OneDirective,
    // BeautyDirective,
    // BeautyInputDirective,
    // MyUnlessDirective
],
  imports: [
    ChartsModule,
    //AlertModule.forRoot(),
    //TabsModule.forRoot(),
    SharedModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    FileUploadModule,
    CalendarModule,
    PaginatorModule,
    TreeTableModule,
    // TreeNode,
    SharedModule,
    ContextMenuModule,
    ConfirmDialogModule,
    MenuModule,
    ScheduleModule,
    TabMenuModule,
    ChartModule,
    MessagesModule,
    GrowlModule,
    UtilsModule
  ],
  providers: [
    AppService,
    TopMenuService,
    commonsInstances,
    PrimengService,
    ConfirmationService,
    TestHttpService,
    HttpService,
    {provide: LocationStrategy,useClass: HashLocationStrategy}
],
  bootstrap: [AppComponent]

})

export class AppModule { }
