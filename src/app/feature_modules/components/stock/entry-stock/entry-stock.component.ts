import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {SharedService} from "../../../service/shared.service";

@Component({
  selector: 'deepak-entry-stock',
  templateUrl: './entry-stock.component.html',
  styleUrls: ['./entry-stock.component.scss']
})
export class EntryStockComponent implements OnInit {
  stockEntryForm: FormGroup = new  FormGroup({});
  submitted:boolean = false;
  isSubmitting: boolean | undefined;


  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private  sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(){
    this.stockEntryForm = this.formBuilder.group({
      stockEntryDetails :this.formBuilder.array([]),
      // stockName:[undefined],
      // stockUniT:[undefined],
      // stockType:[undefined],

    });
    this.addMore();
  }
  addMore(){
    const stockEntryControl = this.stockEntryForm.get('stockEntryDetails') as FormArray;
    stockEntryControl.push(this.formBuilder.group({
      stockName:[undefined],
      category :[undefined],
      quantity:[undefined],
    }))

  }

  get stockEntryDetails(): FormArray{
    return this.stockEntryForm.get("stockEntryDetails") as FormArray;
  }
  get form(): { [key: string]: AbstractControl } {
    return this.stockEntryForm.controls;
  }
  onGoBack(){
    this.location.back();
  }
  onSaveStockLevel(stock:any){
    this.submitted = true;
    console.log(stock);
    if (this.stockEntryForm.valid) {
      this.sharedService.addStock(stock).subscribe(
        (response: any) => {
          this.isSubmitting = false;
          console.log("mero data heram hia ta",response);
          console.log('Stock added Successfully.');
          this.router.navigate(['/feature-modules/display-stock'])

        },
        (error: any) => {
          this.isSubmitting = false;
          this.router.navigate(['feature-modules/display-stock']);
          console.log('Error on adding the stock');
        }
      );
    }
  }

}
