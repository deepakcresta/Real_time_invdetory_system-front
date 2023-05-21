import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {UserLoginComponent} from "./components/user-login/user-login.component";
import {UserRegisterComponent} from "./components/user-register/user-register.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'user-login',
        pathMatch: 'full',
      },
      {
        path: 'user-login',
        component: UserLoginComponent,
        data: {title: 'User Login Details', ModuleName: 'Auth Module'}
      },
      {
        path: 'user-register',
        component: UserRegisterComponent,
        data: {title: 'User Register Details', ModuleName: 'Auth Module'}
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
