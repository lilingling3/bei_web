import { SystemComponent } from './system.component';
import { SystemDictionaryComponent } from './system-dictionary/system-dictionary.component';
import { SystemCompanyComponent } from './system-company/system-company.component';
import { SystemMenuComponent } from './system-menu/system-menu.component';
import { SystemPositionComponent } from './system-position/system-position.component';
import { SystemRightComponent } from './system-right/system-right.component';
import { DictionaryEditComponent } from './system-dictionary/dictionary-edit/dictionary-edit.component';
import { CompanyEditComponent } from './system-company/company-edit/company-edit.component';
import { PositionEditComponent } from './system-position/position-edit/position-edit.component';
import { MenuEditComponent } from './system-menu/menu-edit/menu-edit.component';
import { EditRightComponent} from './system-right/edit-right/edit-right.component';
import { ShowRightComponent } from './system-right/show-right/show-right.component';
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
    { path: 'menu',
      children:[
      {path:'', redirectTo:'page/1',pathMatch:'full'},
      { path:'page/:page',component: SystemMenuComponent},
      { path:'edit',component: MenuEditComponent},
      { path:'edit/:id',component: MenuEditComponent}
    ]},
    { path: 'position',
      children:[
      {path:'', redirectTo:'page/1',pathMatch:'full'},
      { path:'page/:page',component: SystemPositionComponent},
      { path:'edit',component: PositionEditComponent},
      { path:'edit/:id',component: PositionEditComponent}
    ]},
    { path: 'right',
      children:[
      {path:'', redirectTo:'page/1',pathMatch:'full'},
      { path:'page/:page',component: SystemRightComponent},
      { path:'edit',component: EditRightComponent},
      { path:'edit/:id',component: EditRightComponent},
      { path:'show/:id',component: ShowRightComponent}
    ]},
  ]
}];

