import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from '@angular/router';
import { PaginationModule } from 'ng2-bootstrap';
import { UsersComponent } from './users.component';

import { usersRoutes } from './users.routes';
import { UsersAuthComponent } from './users-auth/users-auth.component';
import { UsersBlackComponent } from './users-black/users-black.component';
import { UsersHeaderComponent } from './users-auth/users-header/users-header.component';
import { UsersAuthDataComponent } from './users-auth/users-auth-data/users-auth-data.component';

import { UsersAuthService } from './users-auth/users-auth-data/services/users-auth-data.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes),
    PaginationModule.forRoot(),
  ],
  declarations: [
    UsersComponent,
    UsersAuthComponent,
    UsersBlackComponent,
    UsersHeaderComponent,
    UsersAuthDataComponent,
  ],
  providers:[UsersAuthService]
})
export class UsersModule { }
