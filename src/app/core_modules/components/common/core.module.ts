import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from "ngx-pagination";
import {PaginationComponent} from "./pagination/pagination.component";
import { DatePickerComponent } from './date-picker/date-picker.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    DatePickerComponent
  ],
  exports: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CoreModule { }
