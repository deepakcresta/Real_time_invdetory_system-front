import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'deepak-entry-stock',
  templateUrl: './entry-stock.component.html',
  styleUrls: ['./entry-stock.component.scss']
})
export class EntryStockComponent implements OnInit {
  stockEntryForm: FormGroup = new  FormGroup({});
  submitted:boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(){
    this.stockEntryForm = this.formBuilder.group({
      stockName:[undefined],
      stockUniT:[undefined],
      stockType:[undefined],

    })
  }
  get form(): { [key: string]: AbstractControl } {
    return this.stockEntryForm.controls;
  }
  onGoBack(){
    this.location.back();
  }
  onSaveStockLevel(){
    this.submitted= true;
    if(this.stockEntryForm.invalid){
      return;
    }

  }
}
