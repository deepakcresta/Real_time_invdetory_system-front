import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeatureComponent} from './feature.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EntryStockComponent} from "./components/stock/entry-stock/entry-stock.component";
import {StockDisplayComponent} from "./components/stock/stock-display/stock-display.component";
import {SaleComponent} from "./components/sales/sale/sale.component";
import {BaseLayoutComponent} from "./base-layout/base-layout/base-layout.component";
import {CurrentStockComponent} from "./components/stock/current-stock/current-stock.component";
import {DangersStockComponent} from "./components/stock/dangers-stock/dangers-stock.component";
import {TotalStockComponent} from "./components/stock/total-stock/total-stock.component";
import {KitchenOrderComponent} from "./components/order/kitchen-order/kitchen-order.component";

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'home',
        component: DashboardComponent
      },
      {
        path: 'stock-entry',
        component: EntryStockComponent
      },
      {
        path: 'total-stock',
        component: TotalStockComponent
      },
      {
        path: 'current-stock',
        component: CurrentStockComponent
      },
      {
        path: 'danger-stock',
        component: DangersStockComponent
      },
      {
        path: 'sale',
        component: SaleComponent
      },
      {
        path:'kitchen-order',
        component:KitchenOrderComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
