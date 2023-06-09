import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuardService} from "./shared/auth.service";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    // canActivate: [AuthGuardService],
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: ':id', component: ProfileComponent}
    ]
  },

  {path: 'profile/:id', component: ProfileComponent},
  {path: '', redirectTo: '/auth/login', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
