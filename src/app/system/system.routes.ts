import { SystemComponent } from './system.component';
import { SystemDictionaryComponent } from './system-dictionary/system-dictionary.component';
import { SystemCompanyComponent } from './system-company/system-company.component';
import { SystemMenuComponent } from './system-menu/system-menu.component';
import { SystemPositionComponent } from './system-position/system-position.component';
import { SystemRightComponent } from './system-right/system-right.component';

export const SystemRoutes = [{
  path: '',
  component: SystemComponent,
  children: [
    { path: '', redirectTo: 'dictionary', pathMatch: 'full' },
    { path: 'dictionary',
      children:[
      {path:'', redirectTo:'page/1',pathMatch:'full'},
      { path:'page/:page',component: SystemDictionaryComponent}
    ]},
    { path: 'company', component: SystemCompanyComponent},
    { path: 'menu', component:SystemMenuComponent},
    { path: 'position', component:SystemPositionComponent},
    { path: 'right', component:SystemRightComponent},
  ]
}];

