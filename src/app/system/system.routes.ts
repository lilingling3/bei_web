import { SystemComponent } from './system.component';
import { SystemDictionaryComponent } from './system-dictionary/system-dictionary.component';
import { SystemCompanyComponent } from './system-company/system-company.component';
import { SystemMenuComponent } from './system-menu/system-menu.component';
import { SystemPositionComponent } from './system-position/system-position.component';
import { SystemRightComponent } from './system-right/system-right.component';
import { DictionaryEditComponent } from './system-dictionary/dictionary-edit/dictionary-edit.component';
import { CompanyEditComponent } from './system-company/company-edit/company-edit.component';
export const SystemRoutes = [{
  path: '',
  component: SystemComponent,
  children: [
    { path: '', redirectTo: 'dictionary', pathMatch: 'full' },
    { path: 'dictionary',
      children:[
      {path:'', redirectTo:'page/1',pathMatch:'full'},
      { path:'page/:page',component: SystemDictionaryComponent},
      { path:'edit',component: DictionaryEditComponent},
      { path:'edit/:id',component: DictionaryEditComponent}
    ]},
    { path: 'company',
      children:[
        {path:'', redirectTo:'page/1',pathMatch:'full'},
        { path:'page/:page',component: SystemCompanyComponent},
        { path:'edit',component: CompanyEditComponent},
        { path:'edit/:id',component: CompanyEditComponent}
      ]},
    { path: 'menu', component:SystemMenuComponent},
    { path: 'position', component:SystemPositionComponent},
    { path: 'right', component:SystemRightComponent},
  ]
}];

