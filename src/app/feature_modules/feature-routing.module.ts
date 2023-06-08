import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EntryStockComponent} from "./components/stock/entry-stock/entry-stock.component";
import {StockDisplayComponent} from "./components/stock/stock-display/stock-display.component";
import {SaleComponent} from "./components/sales/sale/sale.component";
import {BaseLayoutComponent} from "./base-layout/base-layout/base-layout.component";

const routes: Routes = [
  { path: '',
  component: BaseLayoutComponent,
    children:[
  {
    path:'home',
    component:DashboardComponent
  },
  {
    path:'stock-entry',
    component: EntryStockComponent
  },
  {
    path:'display-stock',
    component:StockDisplayComponent
  },
  {
    path:'sale',
    component:SaleComponent
  }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
