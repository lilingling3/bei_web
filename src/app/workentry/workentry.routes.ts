/**
 * Created by Administrator on 2017/4/13.
 */
import { WorkentryComponent } from './workentry.component';
import { DefaultComponent } from '../default/dufault.component';

export const workentryRoutes = [
  {
    path: '',
    component: WorkentryComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: DefaultComponent },
      { path: 'user', loadChildren: '../users/users.module#UsersModule' },
      { path: 'data', loadChildren: '../data/data.module#DataModule' },
      { path: 'station', loadChildren: '../stations/stations.module#StationsModule' },
      { path: 'system', loadChildren: '../system/system.module#SystemModule' }
    ]
  }
];
