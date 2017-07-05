import { LoginComponent } from './login/login.component';
import { AppErrorComponent } from './error/app.error.component';
// 测试 组件
import { ZtreeDemoComponent } from './z-tree/z-tree.component';
import { PrimengComponent } from './primeng/primeng.component'
import { TestHttpComponent } from './test-http/test-http.component';
import { UtilsComponent } from './utils/utils.component';

import {AuthGuard} from './demo-guard/auth.guard';
import { DemoGuardComponent } from './demo-guard/demo-guard.component';

import { LayerComponent } from './layer/layer.component';
export const appRoutes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	// {
	// 	path: '',
	// 	redirectTo: 'workentry',
	// 	pathMatch: 'full'
	// },
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'guard',
		component: DemoGuardComponent
	},
	{
		path: 'tree',
		component: ZtreeDemoComponent,
		canActivate: [AuthGuard],
	},

	{
		path: 'primeng',
		component: PrimengComponent
	},
	{
		path: 'http',
		component: TestHttpComponent
	},
	{
		path: 'utils',
		component: UtilsComponent
	},
	{
			path:'layer',
			component:LayerComponent
	},
	{
		path: 'workentry',
    loadChildren: './workentry/workentry.module#WorkentryModule'
	},
  {
    path: "error/:message",
    component: AppErrorComponent
  },
  {
    path: '**', // fallback router must in the last
    component: LoginComponent
  }
];
