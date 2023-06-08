import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {BaseLayoutComponent} from '../feature_modules/base-layout/base-layout/base-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import {RouterModule} from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS: Array<any> = [
  BaseLayoutComponent,
]

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderNavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
    exports: [ SidebarComponent, HeaderNavComponent, FooterComponent]
})
export class BaseModule {
}
