import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EntryStockComponent} from "./components/stock/entry-stock/entry-stock.component";
import {SaleComponent} from "./components/sales/sale/sale.component";
import {BaseLayoutComponent} from "./base-layout/base-layout/base-layout.component";
import {CurrentStockComponent} from "./components/stock/current-stock/current-stock.component";
import {DangersStockComponent} from "./components/stock/dangers-stock/dangers-stock.component";
import {TotalStockComponent} from "./components/stock/total-stock/total-stock.component";
import {KitchenOrderComponent} from "./components/order/kitchen-order/kitchen-order.component";
import {OrderListComponent} from "./components/order/order-list/order-list.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {AddMenuComponent} from "./components/menu/add-menu/add-menu.component";
import {MenuListComponent} from "./components/menu/menu-list/menu-list.component";
import {
  AddRespectiveMenuCredentialsComponent
} from "./components/menu/add-respective-menu-credentials/add-respective-menu-credentials.component";
import {AlgorithmComponent} from "./components/algorithms/algorithm/algorithm.component";

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
        path: 'kitchen-order',
        component: KitchenOrderComponent
      },
      {
        path: 'order-list',
        component: OrderListComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path:'menu',
        component:AddMenuComponent
      },
      {
        path:'menu-list',
        component:MenuListComponent
      },
      {
        path:'menu-credentials',
        component:AddRespectiveMenuCredentialsComponent
      },
      {
        path:'arima-algorithm',
        component:AlgorithmComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
