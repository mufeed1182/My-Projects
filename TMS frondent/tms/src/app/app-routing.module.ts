import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserDComponent } from './user-d/user-d.component';
import { AdminDComponent } from './admin-d/admin-d.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotComponent } from './forgot/forgot.component';
import { UserTableComponent } from './admin-user/user-table.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProjectComponent } from './admin-project/admin-project.component';
import { AdminTaskComponent } from './admin-task/admin-task.component';

const adminRoutes: Routes = [
  {
    path: 'admind',
    component: AdminDComponent,
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'users', component: UserTableComponent },
      { path: 'projects' , component: AdminProjectComponent},
      { path: 'tasks/:pid/:pname', component: AdminTaskComponent}
    ]
  }
];


const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"logout",component:LogoutComponent},
  {path:"login",component:LoginComponent},
  {path:"userd",component:UserDComponent},
  // {path:"admind",component:AdminDComponent},
  ...adminRoutes,
  // {path:"usert",component:UserTableComponent},
  {path:"forgot",component:ForgotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
