import { UsersComponent } from './users.component';
import { UsersAuthComponent } from './users-auth/users-auth.component';
import { UsersBlackComponent } from './users-black/users-black.component';

export const usersRoutes = [{
  path: '',
  component: UsersComponent,
  children: [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth',
      //redirectTo: 'page/1',
      //component: UsersAuthComponent ,
      children:[
        {path:'', redirectTo:'page/1',pathMatch:'full'},
        { path:'page/1',component: UsersAuthComponent},
        { path:'page/:page',component: UsersAuthComponent}
        ]
    },
    { path: 'black',
      component: UsersBlackComponent
      // children:{
      //   path:'page/1',
      //   component: UsersAuthComponent ,
      // }
    }
  ]
}];
