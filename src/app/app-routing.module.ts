import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from "./auth_modules/components/user-login/user-login.component";

const routes: Routes = [
  {
    path:'',
    component:UserLoginComponent
  },
  { path: 'aut-modules', loadChildren: () => import('./auth_modules/auth.module').then(m => m.AuthModule) },
  { path: 'feature-modules', loadChildren: () => import('./feature_modules/feature.module').then(m => m.FeatureModule) },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
