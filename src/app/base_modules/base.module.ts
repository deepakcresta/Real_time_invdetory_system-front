import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {BaseLayoutComponent} from './base-layout/base-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import {RouterModule} from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS: Array<any> = [
  BaseLayoutComponent,
]

@NgModule({
  declarations: [
    BaseLayoutComponent,
    SidebarComponent,
    HeaderNavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
  ],
    exports: [COMPONENTS, SidebarComponent, HeaderNavComponent, FooterComponent]
})
export class BaseModule {
}
