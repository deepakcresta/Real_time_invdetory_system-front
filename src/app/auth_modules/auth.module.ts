import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        AuthComponent,
        UserRegisterComponent,
        UserLoginComponent
    ],
    exports: [
        AuthComponent
    ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }