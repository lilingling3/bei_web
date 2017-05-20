import { StationsComponent } from './stations.component';
import { StationsMapComponent } from './stations-map/stations-map.component';
import { StationManageComponent } from './station-manage/station-manage.component';
import { StationDetailComponent } from './station-manage/station-detail/station-detail.component';

export const stationsRoutes = [{
  path: '',
  component: StationsComponent,
  children: [
    { path: '', redirectTo: 'manage', pathMatch: 'full' },
    { path: 'map', component: StationsMapComponent },
    { path: 'manage',
      children:[
        {path:'', redirectTo:'page/1',pathMatch:'full'},
        { path:'page/:page',component: StationManageComponent},
        {path:'show/:id',component:StationDetailComponent}
      ]
    }
  ]
}];
