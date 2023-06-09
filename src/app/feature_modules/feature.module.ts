import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    OrderListComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    BaseModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ]
})
export class FeatureModule { }
