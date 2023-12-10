import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { StockLevlelComponent } from './components/stock/stock-levlel/stock-levlel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryStockComponent } from './components/stock/entry-stock/entry-stock.component';
import { StockDisplayComponent } from './components/stock/stock-display/stock-display.component';
import { SaleComponent } from './components/sales/sale/sale.component';
import {BaseModule} from "../base_modules/base.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {BaseLayoutComponent} from "./base-layout/base-layout/base-layout.component";
import { CurrentStockComponent } from './components/stock/current-stock/current-stock.component';
import { DangersStockComponent } from './components/stock/dangers-stock/dangers-stock.component';
import { TotalStockComponent } from './components/stock/total-stock/total-stock.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { AddMenuComponent } from './components/menu/add-menu/add-menu.component';
import {NgSelectModule} from "@ng-select/ng-select";
import { MenuListComponent } from './components/menu/menu-list/menu-list.component';
import { AddRespectiveMenuCredentialsComponent } from './components/menu/add-respective-menu-credentials/add-respective-menu-credentials.component';
import {CoreModule} from "../core_modules/components/common/core.module";
import { AlgorithmComponent } from './components/algorithms/algorithm/algorithm.component';



@NgModule({
  declarations: [
    FeatureComponent,
    StockLevlelComponent,
    DashboardComponent,
    EntryStockComponent,
    StockDisplayComponent,
    SaleComponent,
    ContactUsComponent,
    BaseLayoutComponent,
    CurrentStockComponent,
    DangersStockComponent,
    TotalStockComponent,
    OrderListComponent,
    AddMenuComponent,
    MenuListComponent,
    AddRespectiveMenuCredentialsComponent,
    AlgorithmComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    BaseModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgSelectModule,
    CoreModule,
  ],
  providers: [
    DatePipe,]
})
export class FeatureModule { }
