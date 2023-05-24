import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from "./auth_modules/components/user-login/user-login.component";
import {UserRegisterComponent} from "./auth_modules/components/user-register/user-register.component";
import {DashboardComponent} from "./feature_modules/dashboard/dashboard.component";
import {EntryStockComponent} from "./feature_modules/components/stock/entry-stock/entry-stock.component";
import {StockDisplayComponent} from "./feature_modules/components/stock/stock-display/stock-display.component";
import {SaleComponent} from "./feature_modules/components/sales/sale/sale.component";
import {ContactUsComponent} from "./feature_modules/components/contact-us/contact-us.component";
import {StockLevlelComponent} from "./feature_modules/components/stock/stock-levlel/stock-levlel.component";

const routes: Routes = [
  {

    path: '', redirectTo: 'user-login', pathMatch: 'full'
  },
  {
    path: 'user-login',
    component: UserLoginComponent
  },
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'stock-entry',
    component: EntryStockComponent
  },
  {
    path: 'display-stock',
    component: StockDisplayComponent
  },
  {
    path:'stock-label',
    component:StockLevlelComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {path: 'auth-modules', loadChildren: () => import('./auth_modules/auth.module').then(m => m.AuthModule)},
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
