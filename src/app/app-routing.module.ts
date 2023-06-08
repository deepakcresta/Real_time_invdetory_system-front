import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from "./auth_modules/components/user-login/user-login.component";
import {UserRegisterComponent} from "./auth_modules/components/user-register/user-register.component";

const routes: Routes = [
  {

    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: 'user-login',
    component: UserLoginComponent
  },
  {
    path: 'register',
    component: UserRegisterComponent
  },

  {path: '', loadChildren: () => import('./auth_modules/auth.module').then(m => m.AuthModule)},
  {path: 'feature-modules', loadChildren: () => import('./feature_modules/feature.module').then(m => m.FeatureModule)},
  {
    path: '**', redirectTo: 'user-login', pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
