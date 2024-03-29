import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth_modules/auth.module";
import {ReactiveFormsModule} from "@angular/forms";
import {FeatureModule} from "./feature_modules/feature.module";
import { KitchenOrderComponent } from './feature_modules/components/order/kitchen-order/kitchen-order.component';
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    KitchenOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule,
    FeatureModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    // provideToastr(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
