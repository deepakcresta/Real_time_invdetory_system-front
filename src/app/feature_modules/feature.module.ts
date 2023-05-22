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
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FeatureComponent,
    StockLevlelComponent,
    DashboardComponent,
    EntryStockComponent,
    StockDisplayComponent,
    SaleComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    BaseModule,
    ReactiveFormsModule,
  ]
})
export class FeatureModule { }
