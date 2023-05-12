import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuardService} from "./shared/auth.service";
import {UserFilterPipe} from "./dashboard/userFilter.pipe";


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    UserFilterPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
